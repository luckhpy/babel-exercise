import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import generate from '@babel/generator'

/** 修改函数里面的 n */
const code = `const n = function square(n) {
  return n * n;
}
console.log(n)
`

const ast = parse(code, {
  sourceType: 'module', // default: "script"
  plugins: ['jsx'], // default: []
})

traverse(ast, {
  Identifier(path) {
    if (path.node.name === 'n') {
      path.node.name = 'x'
    }
  },
})

const newCode = generate(ast, {}, code)

/** 函数外的 n 也被修改 */
console.log(newCode)
