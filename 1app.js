//加载express模块
const express = require("express");
const pool = require("./pool.js");
//固态路由
var app = express();
//监听接口8080
app.listen(8080);
//静态资源
app.use("/abc", express.static("1login.html"));
app.get("/api/v1/login", function (req, res) {
    var obj = req.query;
    pool.query("select * from xz_user where uname = ? and upws = ?",[obj.uname, obj.upwd], function (err, results) {
        if(results && results.length > 0){
            res.send('可以登录');
        } else {
            res.send('失败，请重试');
        }
    });

});