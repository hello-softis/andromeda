<div align="center">
  <img src="./public/logo.svg" width="500px" height="500px" />
</div>

# <span style="color: #9956F6;">Andromeda</span>

Andromeda is the Design System of Softis, designed to create cohesive and efficient user interfaces. With reusable components, clear guidelines, and comprehensive documentation, Andromeda helps build digital products with consistency and quality.

## Badges

![Version](https://img.shields.io/badge/Version-0.0.1-black?style=for-the-badge&logo=version&logoColor=white&color=black&labelColor=black&label=Version)
![Update](https://img.shields.io/badge/Update-July%202024-black?style=for-the-badge&logo=github&logoColor=white&color=black&labelColor=black&label=Update)
![License](https://img.shields.io/badge/License-Commercial-black?style=for-the-badge&logo=license&logoColor=white&color=black&labelColor=black&label=License)

## Project Status

![Status](https://img.shields.io/badge/Status-In%20Development-black?style=for-the-badge&logo=github&logoColor=white&color=black&labelColor=black&label=Status)

## Table of Contents

- [Prerequisites and How to Run the App](#prerequisites-and-how-to-run-the-app)
- [Integration with Tailwind](#integration-with-tailwind)
- [Technologies Used](#technologies-used)
- [Author](#author)
- [License](#license)

## Prerequisites and How to Run the App

### Prerequisites

- Node.js version 21.x or higher
- Yarn or npm

### How to Run

Clone the repository:
```bash
git clone https://github.com/hello-softis/andromeda
```

Install the dependencies:
```bash
cd andromeda
npm install
```

Start the application:
```bash
npm run dev
```
## Integration with Tailwind

Andromeda can be easily integrated with Tailwind CSS, allowing you to use the colors defined in the Design System directly in your Tailwind utility classes. To do this, you need to configure your project's tailwind.config.js file to import the colors from the Andromeda tokens package.

First, install the tokens package:

```bash
npm install @andromeda/tokens
```

Next, configure the tailwind.config.js file to add Andromeda's colors:

```bash
/** @type {import('tailwindcss').Config} */
import * as tokens from '@andromeda/tokens';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: tokens.twColors,
      fontSize: tokens.fontSizes,
      fontWeight: tokens.fontWeights,
      fontFamily: tokens.fonts,
      lineHeight: tokens.lineHeights,
      borderRadius: tokens.radii,
      spacing: tokens.space,
    },
  },
  plugins: [],
};
```

With this configuration, you can use Andromeda's colors directly in Tailwind CSS classes, ensuring visual consistency and leveraging the benefits of a well-defined design system.

## Technologies Used

![Storybook](./public/readme/languages/storybook.svg "Storybook")
![React](./public/readme/languages/react-ts.svg "React")
![Tailwind](./public/readme/languages/tailwind.svg "Tailwind CSS")
![TypeScript](./public/readme/languages/typescript.svg "TypeScript")
![Turborepo](./public/readme/languages/turborepo.svg "Turborepo")
![npm](./public/readme/languages/npm.svg "npm")
![others](./public/readme/languages/symbols.svg "Others")

#### Others
- [Radix UI](https://radix-ui.com/ "Radix")
- [Chakra-UI](https://chakra-ui.com/ "Chakra")
- [Stitches](https://stitches.dev/ "Stitches")
- [Tailwind Variants](https://www.tailwind-variants.org/ "Tailwind Variants")
- [HugeIcons](https://hugeicons.com/ "HugeIcons")

## Author

Developed by [Softis©](https://github.com/hello-softis). Get in touch!

## License

This project is licensed under a closed license. See the [LICENSE](LICENSE.md) file for more details.