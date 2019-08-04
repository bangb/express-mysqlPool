const mysql=require("mysql");
var pool=mysql.createPool({
host:"127.0.0.1",
port:3306,
user:"root",
password:"12345678",
database:"xz",
connectLimit:15
});

pool.query=function(sql,options,callback){
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{
            conn.query(sql,options,function(err,results){
                //释放连接  
                conn.release();
                //事件驱动回调  
                callback(err,results);
            });
        }
    });
};

module.exports=pool;