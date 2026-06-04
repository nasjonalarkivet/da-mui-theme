import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs"
import { extname, join } from "node:path"

mkdirSync("dist/esm", { recursive: true })
writeFileSync("dist/esm/package.json", `${JSON.stringify({ type: "module" }, null, 2)}\n`)

const addJsExtension = specifier => {
	if (!specifier.startsWith(".") || extname(specifier)) {
		return specifier
	}
	return `${specifier}.js`
}

const rewriteRelativeImports = filePath => {
	const source = readFileSync(filePath, "utf8")
	const rewritten = source.replace(
		/\b(from\s*["']|import\s*["'])(\.{1,2}\/[^"']+)(["'])/g,
		(_, prefix, specifier, suffix) => `${prefix}${addJsExtension(specifier)}${suffix}`,
	)

	if (rewritten !== source) {
		writeFileSync(filePath, rewritten)
	}
}

const walk = directory => {
	for (const entry of readdirSync(directory)) {
		const entryPath = join(directory, entry)
		if (statSync(entryPath).isDirectory()) {
			walk(entryPath)
			continue
		}
		if (entryPath.endsWith(".js")) {
			rewriteRelativeImports(entryPath)
		}
	}
}

walk("dist/esm")
