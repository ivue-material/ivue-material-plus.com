// prefer old unicode hacks for backward compatibility
// https://base64.guru/developers/javascript/examples/unicode-strings
// 编码为 URI 组件的新字符串
export function utoa(data) {
  // 十六进制转义序列被它所代表的字符替换
  return btoa(unescape(encodeURIComponent(data)));
}

// 解码base64
export function atou(base64) {
  return decodeURIComponent(escape(atob(base64)));
}
