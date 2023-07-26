let express = require('express');
let app = express();
let whitList = ['http://localhost:3000', 'http://127.0.0.1:3000'];
app.use(function (req,res, next) {
    console.log('--', req.headers)
    let origin = req.headers.origin;
    if(whitList.includes(origin)) {
        // 允许哪个源可以访问我
        res.setHeader('Access-Control-Allow-Origin', origin);
        // 允许携带哪个头访问我
        res.setHeader('Access-Control-Allow-Headers', 'name,age');
        // 允许前端获取哪些头  允许返回的头
        res.setHeader('Access-Control-Expose-Headers', 'name,height');
        // 允许哪些方法访问我
        res.setHeader('Access-Control-Allow-Methods', 'PUT');
        // 允许携带cookie (跨域cookie)
        res.setHeader('Access-Control-Allow-Credentials', true); // 此时跨域头不能设置为*号
        // 预检的存活时间
        res.setHeader('Access-Control-Max-Age', 60); // 设置预检间隔时长
        // 设置了上边的Max-Age后 感觉下面的设置没啥必要 而且也没用 还是有问题
        if(req.method === 'OPTIONS') {
            res.end(); // OPTIONS请求不做任何处理
        }
    }
    next()
})
app.put('/getData', function (req, res) {
    console.log(req.headers)
    res.setHeader('name', 'xiaoming')
    res.setHeader('height', '170')
    res.end('我不爱你')
})
app.post('/getData', function (req, res) {
    console.log(req.headers)
    res.end('我不爱你')
})
app.get('/getData', function (req, res) {
    console.log(req.headers)
    res.end('我不爱你')
})
app.listen(4000);