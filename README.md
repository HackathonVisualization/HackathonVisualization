# 搭建这个项目

## 安装环境

### 1. 软件安装

安装nodejs, vscode

### 2. npm配置

#### 给npm换源 (淘宝源)

```bash
npm config set registry http://registry.npm.taobao.org/
```

#### 安装yarn并换源

```bash
npm install -g yarn
yarn config set registry http://registry.npm.taobao.org/
```

### 3. Clone项目

```bash
git clone git@github.com:HackathonVisualization/HackathonVisualization.git
```

### 4. 安装项目

```bash
yarn install
```

## 运行项目

```bash
yarn start
```

然后就可以在开发者模式运行这个项目.  
在浏览器打开 [http://localhost:3000](http://localhost:3000) 便可以浏览这个项目.

支持代码热更新.

## 构建项目

```bash
yarn build
```

编译好的文件会输出到 `build` 文件夹, 这时候只需要把 `build` 文件夹挂载到网站上就行了.

# 项目目录结构

* public: 用于存放网页静态文件, 比如网页图标, 网页标题啥的
* src: 代码存放主要位置
  * **component: 用于存放可视化控件的主要文件夹**
    * Charts.tsx: 其中的一个控件示例
  * App.css: 项目css代码的主要位置
  * **App.tsx: 项目主要代码, 例如界面的渲染, Echarts的主要内容啥的**
  * **utils.ts: 通过Github API获取数据的函数库**
* README2.md: 如果你想从头构建这个项目, 可以参考我构建这个项目的过程

其他文件都是不太重要的文件, 无视就好.

# 项目分工

## 后端 (伪)

主要任务就是在 `utils.ts` 使用 Github API 添加获取相应数据的函数.
大概就像 `getCountOfCommits` 那样的函数就行.

这个工作主要是获取数据, 处于前端和后端之间, 所以我就随意地称为 后端(伪).

**需要了解的知识:**

* [Javascript](https://www.runoob.com/js/js-tutorial.html)
* [Ajax](https://www.runoob.com/ajax/ajax-tutorial.html)
* [稍微了解一点Typescript](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)
* [Github API](https://docs.github.com/cn/free-pro-team@latest/rest)

## 前端

主要任务就是构思和优化前端界面, 比如加个logo, 改个标题, 添加动效, 使用Antd, 优化界面美观度啥的.

还有一个很重要的工作, 给页面加个 `Router` 路由.

主要工作在 `App.css` 和 `App.tsx` 这两个文件.

**需要了解的知识:**

* [HTML](https://www.runoob.com/html/html-basic.html)
* [Javascript](https://www.runoob.com/js/js-tutorial.html)
* [CSS](https://www.runoob.com/css/css-tutorial.html)
* [稍微了解一点Nodejs](https://www.runoob.com/nodejs/nodejs-tutorial.html)
* [React](https://zh-hans.reactjs.org/)
* [React Hook](https://zh-hans.reactjs.org/docs/hooks-intro.html)
* [Typescript](https://www.tslang.cn/docs/home.html)
* [Antd](https://ant.design/components/layout-cn/)

## 数据可视化

主要任务就是使用 Echarts 将数据进行可视化.

主要工作在 `component` 这个文件夹.
通过 Echarts 数据可视化添加Component.

**需要了解的知识:**

* [HTML](https://www.runoob.com/html/html-basic.html)
* [Javascript](https://www.runoob.com/js/js-tutorial.html)
* [CSS](https://www.runoob.com/css/css-tutorial.html)
* [React](https://zh-hans.reactjs.org/)
* [稍微了解一点Typescript](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)
* [Echarts](https://echarts.apache.org/zh/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts)
* [echarts-for-react](https://github.com/hustcc/echarts-for-react)
