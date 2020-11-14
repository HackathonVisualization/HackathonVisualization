# OrangeX4初始化该项目过程记录

仅供参考.

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

### 3. 初始化项目

```bash
yarn create react-app hackathon-visualization --template typescript
```

于是便初始化了一个带有 yarn, react, typescript 的原始项目.

### 添加antd

#### 命令行添加

```bash
yarn add antd
```

#### 源代码加入布局

略, 详见 `src/App.tsx`

#### 优化布局

文档参考:

[https://ant.design/components/layout-cn/](https://ant.design/components/layout-cn/)

### 添加Echarts

#### 命令行添加

```bash
yarn add echarts
yarn add echarts-for-react
```

#### 加入Echarts

文档详见: 

[https://github.com/hustcc/echarts-for-react](https://github.com/hustcc/echarts-for-react)