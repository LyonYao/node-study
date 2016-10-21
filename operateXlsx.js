/**
 * Created by lyon on 2016/10/21.
 */
var fs= require('fs');

var path = require('path');
var xlsx = require("node-xlsx");



var list = xlsx.parse("./视频链接.xlsx");

//读出后是数组，包含每个sheet
list.forEach(function (it) {
    console.log('Sheet Name:'+it['name']);
    it['data'].forEach(function(row){
        console.log(row);
    });
});
//构建一个xlsx文件
var data=[];
for(var i=0;i<100;i++){
    data[i]=[];
    for(var j=0;j<5;j++){
        data[i][j]=i+'-'+j+'';
    }
}
var buffer=xlsx.build([{name:'Sheet1',data:data}]);
fs.writeFile(path.join(__dirname,'test.xlsx'),buffer,function(err){
    if(err){
        console.log(err.message);
    }
});

