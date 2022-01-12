# [0.3.0](https://github.com/miaoxing/jest-preset-miaoxing/compare/jest-preset-miaoxing@0.2.5...jest-preset-miaoxing@0.3.0) (2022-01-12)


### Features

* **jest-preset-miaoxing:** 支持替换更多图片，字体，音频，视频 ([e3d73b4](https://github.com/miaoxing/jest-preset-miaoxing/commit/e3d73b489a3a679c1230d517cf9100ab62601dcc))
* 更新 typescript 到 `^4.5.2` ([dc1bdaa](https://github.com/miaoxing/jest-preset-miaoxing/commit/dc1bdaa7ebb4645858242f05e3963a3e8d85fcdf))


### BREAKING CHANGES

* 更新 typescript 到 `^4.5.2`

## [0.2.5](https://github.com/miaoxing/jest-preset-miaoxing/compare/jest-preset-miaoxing@0.2.4...jest-preset-miaoxing@0.2.5) (2021-10-28)


### Features

* **jest-preset:** 增加 `ENABLE_TEMPLATE_CONTENT` 和 `ENABLE_CLONE_NODE` 常量，兼容 Taro 3.3.4+ ([058a433](https://github.com/miaoxing/jest-preset-miaoxing/commit/058a433db7c4263042c29c9e0a8cc535d14b519f))
* **jest-preset-miaoxing:** 兼容 taro 3.3 ([8fcbbd1](https://github.com/miaoxing/jest-preset-miaoxing/commit/8fcbbd138cb24c52e4d359af7744650efea858a9))
* **jest-preset-miaoxing:** 替换 `@tarojs/components` 和 `@tarojs/taro` 为 h5 ([dd30691](https://github.com/miaoxing/jest-preset-miaoxing/commit/dd30691ad3c3d6f54cff28d5aacf790987f7cd57))

## [0.2.4](https://github.com/miaoxing/jest-preset-miaoxing/compare/jest-preset-miaoxing@0.2.3...jest-preset-miaoxing@0.2.4) (2021-05-11)


### Bug Fixes

* **jest-preset-miaoxing:** 不转换 `@babel/plugin-transform-runtime` 加载的 `core-js-pure` ([d36ab06](https://github.com/miaoxing/jest-preset-miaoxing/commit/d36ab0682ae08d5f514c3f10609348a5b805e595))
* 当外部指定 `testEnvironment` 为 `node` 时，没有 `window` 对象则不初始化 `matchMedia` ([d3dc1d6](https://github.com/miaoxing/jest-preset-miaoxing/commit/d3dc1d69941aead6115ebdc0275166a233d3410c))


### Features

* **jest:** 支持 `tsx` 格式 ([c7d08ce](https://github.com/miaoxing/jest-preset-miaoxing/commit/c7d08ce9ba6a73242237a62b120ede7b15f5ab3f))

## [0.2.3](https://github.com/miaoxing/jest-preset-miaoxing/compare/jest-preset-miaoxing@0.2.2...jest-preset-miaoxing@0.2.3) (2021-03-22)


### Bug Fixes

* 忽略其他 PHP 类库中的 JS 测试文件 ([8a711f8](https://github.com/miaoxing/jest-preset-miaoxing/commit/8a711f8055b4266e337e494416e336aefa9c4846))

## [0.2.2](https://github.com/miaoxing/jest-preset-miaoxing/compare/jest-preset-miaoxing@0.2.1...jest-preset-miaoxing@0.2.2) (2021-03-12)


### Bug Fixes

* 更新前端包依赖 ([b11a42f](https://github.com/miaoxing/jest-preset-miaoxing/commit/b11a42f543ca432c46b5d46eb08b09e8dcf92e1f))

## [0.2.1](https://github.com/miaoxing/jest-preset-miaoxing/compare/jest-preset-miaoxing@0.2.0...jest-preset-miaoxing@0.2.1) (2020-09-25)


### Features

* setup.js 增加常用的 window.matchMedia 方法 ([867359e](https://github.com/miaoxing/jest-preset-miaoxing/commit/867359e8691430bb101cb8b553ffcdcf01192787))

# [0.2.0](https://github.com/miaoxing/jest-preset-miaoxing/compare/jest-preset-miaoxing@0.1.0...jest-preset-miaoxing@0.2.0) (2020-08-17)


### Code Refactoring

* 忽略 plugins 目录，自动加载 setup 文件，更新 mocks 路径 ([b9ac520](https://github.com/miaoxing/jest-preset-miaoxing/commit/b9ac52097cbe876632d0b0b542420ec14219eb92))


### BREAKING CHANGES

* mocks 目录从 __mocks__ 改为 tests/mocks

# 0.1.0 (2020-08-13)


### Features

* init jest-preset-miaoxing ([0f51caa](https://github.com/miaoxing/jest-preset-miaoxing/commit/0f51caae7dcec8364f7277991c889ecb2bc20232))
