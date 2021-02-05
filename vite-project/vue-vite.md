# Vite指南

## 介绍

Vite(法语单词“快速”，发音为/vit/)是一种新型的前端构建工具，它显著改善了前端开发体验。它主要由两部分组成:

- 一个开发运行的服务器，有着丰富的特性和快速热更新
- 一个构建命令，将您的代码与[Rollup](https://rollupjs.org/guide/en)捆绑在一起，预先配置以输出高度优化的静态资产用于生产。

另外，Vite是一个可以通过Plugin Api与Javascript API高度扩展示的,并支持全类型

## ESM

相信现大多数开发者都熟悉以代码

```js
import { foo } from './other-module'
```

这些语法大多数[浏览器](https://caniuse.com/es6-module)都支持了。然而，在浏览器拥有对ES模块的原生支持之前，我们不得不依赖于一些打包工具(Browserify, webpack, Parcel或Rollup)将所有模块源代码合并到一个文件中，以便浏览器能够提供服务，甚至在开发过程中也是如此。

在开发中这些工具存在两个缺点:

- **服务启动慢:**在开发服务启动时，这些打包工具会运行你所有代码，即使你的代码分割的也会一起编译。例如在有数十个懒得加载的路由项目中，你仍然要等待打包工具执行完成每一个文件才能访问这一个页面。

![bundler based dev server](https://vitejs.dev/assets/bundler.37740380.png)



- **Vite如何解决这个问题：**vite启动服务不需要任何准备，Vite只是按浏览器所需要的来编译文件。在代码分割中项目中，仅仅加载当前的模块。

  ![esm based dev server](https://vitejs.dev/assets/esm.3070012d.png)

- **更新慢:**当文件编更新时，除了构建文件本身之外，其它打包工具需要使一部份依赖图失效并且重新编译整个项目。这意味着随着程序越来越大反应该的时间也会增加。

- **Vite如何解决:**每个服务的文件都通过http的headers缓存，如果浏览器的缓存被禁用vite将启用内存缓存。在文件编辑时，我们只需使该文件的缓存无效。另外热更新的时候我们只需获取更新的哪一部份代码，所以无论项目多大也不会影响运行。

  一旦你体验到Vite有多快，你可能就会无法忍受以前打包工具的慢了。



# 入门指南

  如果你有兴趣在尝试之前了解更多关于Vite的知识，请查看简介部分

- 搭建您的第一个Vite项目

> Compatibility Note
>
> Vite requires [Node.js](https://nodejs.org/en/) version >=12.0.0.

便用npm

```visual basic
$ npm init @vitejs/app
```

使用yarn

```visual basic
$ yarn create @vitejs/app
```

然后按照提示操作

您还可以通过附加的命令行选项直接指定项目名称和您想要使用的模板。例如，要构建一个Vite + Vue项目，运行:

```visual basic
# npm 6.x
npm init @vitejs/app my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm init @vitejs/app my-vue-app -- --template vue

# yarn
yarn create @vitejs/app my-vue-app --template vue
```

支持以下模板预设

- `vanilla`
- `vue`
- `vue-ts`
- `react`
- `react-ts`
- `preact`
- `preact-ts`
- `lit-element`
- `lit-element-ts`

可以查看 [@vitejs/create-app](https://github.com/vitejs/vite/tree/main/packages/create-app)查看更新多模板的详细介绍

## `index.html` 和项目根目录

