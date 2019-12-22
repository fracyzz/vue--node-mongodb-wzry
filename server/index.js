const express = require("express")

const app = express()

app.use(require('cors')())// 引入跨域模块
app.use(express.json()) // 引入express框架
require('./routes/admin')(app)
require('./plugins/db')(app)

app.listen(3000, () => { 
    console.log('正在监听：3000端口')
});