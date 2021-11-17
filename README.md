# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

# learn ts






# YARN NPM 更换镜像
老 `npm.taobao.org` 和 `registry.npm.taobao.org` 域名将于 2022 年 05 月 31 日零时起停止服务。 镜像需要更换为 `https://registry.npmmirror.com`

简单操作：项目根目录下 新建 `.yarnrc` 或 `.npmrc` 写入 `registry "https://registry.npmmirror.com"`

## NPM

- 查询当前镜像
  ```bash
  npm get registry 
  ```
- 设置为淘宝镜像
  ```bash
  npm config set registry https://registry.npmmirror.com 
  ```
- 设置为官方镜像
  ```bash
  npm config set registry https://registry.npmjs.org/
  ```

## YARN

- 查询当前镜像
  ```bash
  yarn config get registry
  ```
- 设置为淘宝镜像
  ```bash
  yarn config set registry https://registry.npmmirror.com 
  ```
- 设置为官方镜像
  ```bash
  yarn config set registry https://registry.yarnpkg.com
  ```