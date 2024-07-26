<div align="center">
  <img src="./public/logo.svg" width="500px" height="500px" />
</div>

# <span style="color: #9956F6;">Andromeda</span>

Andromeda is the Design System of Softis, designed to create cohesive and efficient user interfaces. With reusable components, clear guidelines, and comprehensive documentation, Andromeda helps build digital products with consistency and quality.

---

## Badges

![Version](https://img.shields.io/badge/Version-2.1.0-black?style=for-the-badge&logo=version&logoColor=white&color=black&labelColor=black&label=Version)
![Update](https://img.shields.io/badge/Update-July%202024-black?style=for-the-badge&logo=github&logoColor=white&color=black&labelColor=black&label=Update)
![License](https://img.shields.io/badge/License-Commercial-black?style=for-the-badge&logo=license&logoColor=white&color=black&labelColor=black&label=License)

## Project Status

![Status](https://img.shields.io/badge/Status-In%20Development-black?style=for-the-badge&logo=github&logoColor=white&color=black&labelColor=black&label=Status)

---

## Table of Contents

- [Prerequisites and How to Run the App](#prerequisites-and-how-to-run-the-app)
- [How to use](#how-to-use-andromeda)
- [Integration with Tailwind](#integration-with-tailwind)
- [Technologies Used](#technologies-used)
- [Author](#author)
- [License](#license)

---

## Prerequisites and How to Run the App

### Prerequisites

- Node.js version 21.x or higher
- Yarn or npm

Here's the updated section in English, without the Tailwind integration part:

---

## How to Use Andromeda

To integrate Andromeda into your project, follow these steps:

### 1. Install Dependencies

First, add Andromeda as a dependency in your project. Run the following commands to install the tokens package and the React components package:

```bash
npm install @hello.softis/andromeda-tokens
npm install @hello.softis/andromeda-react
```

### 2. Configure Design Tokens

Andromeda’s tokens provide values for colors, font sizes, and other design styles. To use them in your project, import the tokens and apply them in your styling files or directly in your components.

Here’s an example of how you might import and use tokens in a CSS-in-JS solution or inline styles:

```javascript
import * as tokens from '@hello.softis/andromeda-tokens';

const styles = {
  color: tokens.twColors.primary,
  fontSize: tokens.fontSizes.large,
};

function App() {
  return (
    <div style={styles}>
      <h1>Welcome to Andromeda</h1>
    </div>
  );
}

export default App;
```

### 3. Use React Components

The `@hello.softis/andromeda-react` package includes a set of pre-configured components that follow the Design System guidelines. To use them, import the desired components and include them in your project:

```javascript
import { Button, Card } from '@hello.softis/andromeda-react';

function App() {
  return (
    <div>
      <Card>
        <h1>Welcome to Andromeda</h1>
        <Button>Click Me</Button>
      </Card>
    </div>
  );
}

export default App;
```

### 4. Start Your Project

After setting up the dependencies and integrating the tokens and components, start your project to see the changes in action:

```bash
npm run dev
```

---

Feel free to let me know if there are any other changes you need!

## Integration with Tailwind

Andromeda can be easily integrated with Tailwind CSS, allowing you to use the colors defined in the Design System directly in your Tailwind utility classes. To do this, you need to configure your project's tailwind.config.js file to import the colors from the Andromeda tokens package.

First, install the tokens package:

```bash
npm install @hello.softis/andromeda-tokens
```

Next, configure the tailwind.config.js file to add Andromeda's colors:

```bash
/** @type {import('tailwindcss').Config} */
import * as tokens from '@hello.softis/andromeda-tokens';

export default {
  content: ['../react/src/**/*.{js,ts,jsx,tsx}','./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: tokens.twColors,
      fontSize: tokens.fontSizes,
      fontWeight: tokens.fontWeights,
      fontFamily: {
        sans: tokens.fonts.default,
        mono: tokens.fonts.code,
      },
      lineHeight: tokens.lineHeights,
      borderRadius: tokens.radii,
      spacing: tokens.space,
    },
  },
  plugins: [],
};
```

With this configuration, you can use Andromeda's colors directly in Tailwind CSS classes, ensuring visual consistency and leveraging the benefits of a well-defined design system.

---

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
