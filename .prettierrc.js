module.exports = {
  // 一行最多 80 个字符
  printWidth: 80,
  // 使用 4 个空格缩进
  tabWidth: 2,
  // 是否使用tab缩进
  useTabs: false,
  // 行尾是否加 ；
  semi: true,
  // 使用单引号代替双引号
  singleQuote: true,
  // 对象的key仅在必要时使用双引号
  jsxSingleQuote: false,
  // 末尾使用逗号
  trailingComma: "all",
  // 大括号内的首尾需要空格 { foo: bar }
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: "always",
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: "always",
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: "strict",
  // 换行符使用 lf
  endOfLine: "auto",
  vueIndentScriptAndStyle: true
};