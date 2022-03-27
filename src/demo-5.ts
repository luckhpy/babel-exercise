import * as t from '@babel/types'
import generate from '@babel/generator'
import template from '@babel/template'

/**
 * https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#babel-template
 * 注意：变量名（NAME) 和 （SOURCE）必须大写
 */
const buildRequire = template(`
  var NAME = require(SOURCE)
`)

const ast = buildRequire({
  NAME: t.identifier('myModule'),
  SOURCE: t.stringLiteral('my-module'),
})

console.log(generate(ast as any))
