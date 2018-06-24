export let REGEXPS = [
  "#[^\n]*[\n\\e]",
  "//[^\n]*[\n\\e]",
  "/\\*[^\\*]*(\\*|\\*[^/\\*][^\\*]*)*\\*/",
  "[ \t\r\n]*",
  "[a-zA-Z_][a-zA-Z_0-9]*",
  "\\-?(0|[1-9][0-9]*)\\.[0-9]+([eE][\\+\\-]?[0-9]+)?[fFdD]?",
  "\\-?(0|[1-9][0-9]*)",
  "0x[A-Fa-f0-9]*",
  '"([^"\\\\]|\\\\([\'"\\\\/bfnrt]|u[0-9a-fA-F]{4}))*"',
  "'([^'\\\\]|\\\\(['\"\\\\/bfnrt]|u[0-9a-fA-F]{4}))*'",
  "\\{",
  "\\}",
  "\\[",
  "\\]",
  "\\.\\.",
  "\\.",
  ",",
  "\\+=",
  "\\+",
  "\\-=",
  "\\-",
  "\\*=",
  "\\*",
  "/=",
  "/",
  "%=",
  "%",
  "\\|=",
  "\\|\\|",
  "\\|",
  "&=",
  "&&",
  "&",
  "\\^=",
  "\\^",
  "\\?",
  ":",
  "\\(",
  "\\)",
  "~=",
  "~",
  ";",
  "<=",
  "<",
  ">=",
  ">",
  "==",
  "=",
  "!=",
  "!",
  "$"
];