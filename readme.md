## babel

### babel 手书参考地址

https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#toc-introduction

### babel api 

#### [babel cli](https://www.babeljs.cn/docs/babel-cli#%E5%BF%BD%E7%95%A5-babelrcjson-%E6%88%96-babelrc-%E6%96%87%E4%BB%B6)

```bash
npx babel script.js

# 如果你希望 输出到文件 ，可以使用 --out-file 或 -o 参数
npx babel script.js --out-file script-compiled.js

# 要在 每次文件修改后 编译该文件，请使用 --watch 或 -w 参数
npx babel script.js --watch --out-file script-compiled.js

# 编译并输出源码映射表
npx babel script.js --out-file script-compiled.js --source-maps

# 编译整个目录
npx babel src --out-dir lib

# 使用插件 --plugins
npx babel script.js --out-file script-compiled.js --plugins=@babel/proposal-class-properties,@babel/transform-modules-amd

# 使用 Preset
npx babel script.js --out-file script-compiled.js --presets=@babel/preset-env,@babel/flow

# 自定义配置文件路径
npx babel --config-file /path/to/my/babel.config.json --out-dir dist ./src

```

####

https://www.babeljs.cn/docs/babel-cli#%E5%BF%BD%E7%95%A5-babelrcjson-%E6%88%96-babelrc-%E6%96%87%E4%BB%B6

