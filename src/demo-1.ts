import { parse } from '@babel/parser'
import traverse from '@babel/traverse'

const code = `function square(n) {
  return n * n;
}`

const ast = parse(code, {
  sourceType: 'module', // default: "script"
  plugins: ['jsx'], // default: []
})

traverse(ast, {
  Identifier(path) {
    console.log('---visitor ', path.node.name)
  },
})
