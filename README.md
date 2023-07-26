## 同源策略
协议 域名 端口 -> 同域

## 为什么浏览器不支持跨域
cookie LocalStorage
Dom元素也有同源策略 iframe
ajax也不支持跨域

## 实现跨域
- jsonp
- cors
- postMessage
- document.domain
- window.name
- location.hash
- http-proxy  (webpack代理)
- nginx
- websocket