# Digitalarkivet MUI Theme

Package for MUI themes used in Digitalarkivet applications.

<br>

## **IMPORTANT**

Older majors will not be maintaned, nor receive security updates.
<br>

<br>

## Import standard

Avoid importing many MUI components or icons from large barrel packages such as `@mui/material` and `@mui/icons-material`; import each component or icon from its public subpath instead.

Do not:

```ts
import { Box, Button } from "@mui/material"
import { CheckOutlined, CloseOutlined } from "@mui/icons-material"
import buttonBaseClasses from "@mui/material/ButtonBase/buttonBaseClasses"
```

Do:

```ts
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import CheckOutlined from "@mui/icons-material/CheckOutlined"
import CloseOutlined from "@mui/icons-material/CloseOutlined"
import { buttonBaseClasses } from "@mui/material/ButtonBase"
```

## Preview/testing

Use `pnpm run gallery` to start a local dev server that serves the application defined under `./gallery`.

## Publishing a new release

- Bump version in package.json using semantic versioning.
- Commit and tag with same version.
- Create the release, workflow handles publishing to NPM.
