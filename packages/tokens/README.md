# Design System Tokens used by Softis

## Table of Contents

- [Prerequisites and How to Run the App](#prerequisites-and-how-to-run-the-app)
- [How to use](#how-to-use-andromeda)
- [Integration with Tailwind](#integration-with-tailwind)
- [Author](#author)
- [License](#license)

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

## Author

Developed by [Softis©](https://github.com/hello-softis). Get in touch!

## License

This project is licensed under a closed license. See the [LICENSE](https://github.com/hello-softis/andromeda?tab=License-1-ov-file) file for more details.
