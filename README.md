# frontend-tienda-online-v2

App tienda online con React + TypeScript.

## Stack y configuración base

Esta plantilla proporciona una configuración mínima para trabajar con React en Vite con HMR y reglas de ESLint.

Plugins oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) usa [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) usa [SWC](https://swc.rs/)

## React Compiler

El React Compiler está habilitado en esta plantilla. Consulta [esta documentación](https://react.dev/learn/react-compiler) para más información.

Nota: esto impactará en el rendimiento de desarrollo (`dev`) y compilación (`build`) de Vite. También puedes probar [el soporte nativo experimental de React Compiler en plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) usando `compiler: true` en las opciones del plugin en lugar del plugin de Babel.

## Ampliar la configuración de ESLint

Si estás desarrollando una aplicación en producción, se recomienda actualizar la configuración para habilitar reglas de lint con información de tipos:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Otras configuraciones...

      // Quita tseslint.configs.recommended y reemplázalo por esto
      tseslint.configs.recommendedTypeChecked,
      // O usa esto para reglas más estrictas
      tseslint.configs.strictTypeChecked,
      // Opcionalmente, agrega esto para reglas de estilo
      tseslint.configs.stylisticTypeChecked,

      // Otras configuraciones...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // otras opciones...
    },
  },
])