import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import generate from '@babel/generator'

const code = `const n = function square(n) {
  return n * n;
}
console.log(n)
`

const ast = parse(code, {
  sourceType: 'module', // default: "script"
  plugins: ['jsx'], // default: []
})

/**
 * https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#state%E7%8A%B6%E6%80%81
 */
traverse(ast, {
  FunctionExpression: (path0) => {
    path0.node!.id!.name = 'x' // 修改 square 为 x
    path0.traverse({
      Identifier(path) {
        if (path.node.name === 'n') {
          path.node.name = 'x'
        }
      },
    })
  },
})

const newCode = generate(ast, {}, code)

console.log(newCode)
