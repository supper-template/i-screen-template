# ⚡️ 简介

一个开箱即用，基于 `vite 4` + `vue 3` + `typeScript 5` + `element Plus` + `pinia` + `vue-router 4` 的PC端项目模板。

# 🚀 开发

1. 安装

```
yarn
```

2. 运行

```
npm run dev
```

# 📦️ 多环境打包

- 测试环境打包

```
npm run build_test
```

- 生产环境打包

```
npm run build
```

# 🔧 代码检查修复

- 格式检查

```
npm run lint
```

- 自动修复

```
npm run lint-fix
```

```
I-BRAIN-SCREEN-TEMPLATE
├─ .env.development
├─ .env.production
├─ .env.test
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ .husky
│  ├─ _
│  │  ├─ .gitignore
│  │  └─ husky.sh
│  └─ pre-commit
├─ .lintstagedrc.json
├─ .prettierignore
├─ .prettierrc.js
├─ README.md
├─ favicon.ico
├─ index.html
├─ mock
│  └─ 1.md
├─ package-lock.json
├─ package.json
├─ public
│  └─ favicon.ico
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ images
│  │  │  └─ 404.png
│  │  └─ styles
│  │     ├─ animation.css
│  │     ├─ colors.css
│  │     └─ reset.css
│  ├─ components
│  ├─ constants
│  │  └─ index.ts
│  ├─ layouts
│  │  └─ header
│  │     └─ index.vue
│  ├─ main.ts
│  ├─ router
│  │  ├─ index.ts
│  │  └─ router.ts
│  ├─ services
│  ├─ types
│  │  ├─ common.d.ts
│  │  ├─ declare.d.ts
│  │  ├─ router-meta.d.ts
│  │  ├─ shim.d.ts
│  │  └─ source.d.ts
│  ├─ utils
│  │  ├─ cookie.ts
│  │  ├─ index.ts
│  │  ├─ loading.ts
│  │  ├─ request-api
│  │  │  ├─ check-status.ts
│  │  │  ├─ http-enum.ts
│  │  │  ├─ index.ts
│  │  │  └─ types.ts
│  │  ├─ storage.ts
│  │  ├─ toast.ts
│  │  └─ token.ts
│  └─ views
│     ├─ 404
│     │  └─ index.vue
│     └─ main
│        └─ index.vue
├─ tsconfig.json
├─ vite.config.ts
└─ yarn.lock

```
