<div align="center">
  <img src="./public/logo.svg" width="500px" height="500px" />
</div>

# <span style="color: #9956F6;">Andromeda</span>

Andromeda é o Design System da Softis, projetado para criar interfaces de usuário coesas e eficientes. Com componentes reutilizáveis, diretrizes claras e documentação completa, Andromeda ajuda a construir produtos digitais com consistência e qualidade.

## Badges

![Version](https://img.shields.io/badge/Version-0.0.1-black?style=for-the-badge&logo=version&logoColor=white&color=black&labelColor=black&label=Version)
![Update](https://img.shields.io/badge/Update-July%202024-black?style=for-the-badge&logo=github&logoColor=white&color=black&labelColor=black&label=Update)
![License](https://img.shields.io/badge/License-Commercial-black?style=for-the-badge&logo=license&logoColor=white&color=black&labelColor=black&label=License)

## Status do Projeto

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-black?style=for-the-badge&logo=github&logoColor=white&color=black&labelColor=black&label=Status)

## Tabela de Conteúdos

- [Pré-requisitos e Como Rodar o App](#pré-requisitos-e-como-rodar-o-app)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Autor](#autor)
- [Licença](#licença)

## Pré-requisitos e Como Rodar o App

### Pré-requisitos

- Node.js versão 21.x ou superior
- Yarn ou npm

### Como Rodar

Clone o repositório:
```bash
git clone https://github.com/hello-softis/andromeda
```

Instale as dependências:
```bash
cd andromeda
npm install
```

Inicie a aplicação:
```bash
npm run dev
```
## Integração com Tailwind

Andromeda pode ser facilmente integrado ao Tailwind CSS, permitindo que você utilize as cores definidas no Design System diretamente em suas classes utilitárias do Tailwind. Para isso, você precisa configurar o arquivo tailwind.config.js do seu projeto para importar as cores do pacote de tokens do Andromeda.

Primeiro, instale o pacote de tokens:

```bash
npm install @andromeda/tokens
```

Em seguida, configure o arquivo tailwind.config.js para adicionar as cores do Andromeda:

```bash
import * as tokens from '@andromeda/tokens'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: tokens.colors,
      fontSize: tokens.fontSizes,
      fontWeight: tokens.fontWeights,
      fontFamily: tokens.fonts,
      lineHeight: tokens.lineHeights,
      borderRadius: tokens.radii,
      spacing: tokens.space,
    },
  },
  plugins: [],
}
  ```

Com essa configuração, você pode usar as cores do Andromeda diretamente nas classes do Tailwind CSS, garantindo consistência visual e aproveitando os benefícios de um design system bem definido.

## Tecnologias Utilizadas

![Storybook](./public/readme/languages/storybook.svg "Storybook")
![React](./public/readme/languages/react-ts.svg "React")
![Tailwind](./public/readme/languages/tailwind.svg "Tailwind CSS")
![TypeScript](./public/readme/languages/typescript.svg "TypeScript")
![Turborepo](./public/readme/languages/turborepo.svg "Turborepo")
![npm](./public/readme/languages/npm.svg "npm")
![others](./public/readme/languages/symbols.svg "Others")

## Autor

Desenvolvido por [Softis©](https://github.com/hello-softis). Entre em contato!

## Licença

Este projeto está licenciado sob uma licença fechada. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
