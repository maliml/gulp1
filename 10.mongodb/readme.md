#课程介绍  
周二第一讲 安装 配置 启动 增删改查 基础语法，node.js中的应用  
周四第二课 索引 集合 系统管理 主从复制 分片 集群  
#mongodb  
##mongodb特点  
BSON - binary json  
对JSON的扩展，把JSON转成二进制文件并保存到硬盘上。  
扩展了 null 布尔型 32 63整型 日期 正则 javascript函数等类型  
##安装  
##启动  
安装为windows服务  
mongod.exe --dbpath E:\mongodata --logpath E:\mongologo -  
-logappend --directoryperdb --serviceName MongoDB --install  
##mongo与关系型数据库的区别 mysql  
1.集合collection  表  
2.bson(key-value)  字段  
3.无有明确主外键      主外键  
mongosee  
article {  
  user_id: User(objectId) ref类型  
}  
4.扩展能力强，模式比较灵活   扩展能力差，不灵活  
5.find                     SQl  
#基本操作  
##创建数据库  
use blog  
##添加集合和数据  
db.persons.insert({name:'zfpx',age:1});  
##查看数据库下的集合  
show collections;  
##查询集合中的文档  
db.persons.find(); db.persons.findOne();  
#更新记录  
db.persons.update({name:'zfpx'},{$set:{age:10}});  
db.persons.update({name:'zfpx'},{$set:{email:'zfpx@126.com'}});  
##删除文档  
db.persons.remove({name:'zfpx'})  
##删除数据库  
db.dropDatabase();  
#基本语法  
##批量插入  
db.persons.insert([{name:'zfpx1',age:1},{name:'zfpx2',age:2}]);  
for(var i=1;i<=10;i++){ db.persons.insert({name:'zfpx'+i,age:i}); }  
##save&insert  
db.courses.insert({_id:1,name:'javascript',price:200});  
E11000 duplicate key error index: blog.courses.$_id_  dup key: { : 1.0 }  
db.courses.save({_id:1,name:'javascript',price:200});  
##remove删除  
db.courses.remove()  
db.courses.remove({name:'node'})  
##update修改  
强行替换除ID外的整个文档 不推荐这么用  
查询条件 更新条件 （存在则更新，不存在则保存） 是否更新所有匹配到的文档  
db.courses.update({name:'node'},{score:100});  
db.courses.update({name:'node'},{name:'node'},true);  
db.courses.update({price:500},{$set:{price:600}},true,true);  
##修改器  
1. $set 更新某个键,存在则更新，不存在则添加  
2. $inc 只能在数字类型上，增加减少数值  
db.courses.update({},{$inc:{price:500}},true,true);  
Cannot apply $inc modifier to non-number  
3. $unset 删除字段  
db.courses.update({},{$unset:{price:1}},true,true);  
4.$push向数组中增加元素 $pushAll批量加入元素  
db.persons.update({},{$push:{lessons:"js"}},true,true);  
db.persons.update({},{$pushAll:{lessons:['js','node']}},true,true);  
5.$addToSet增加到集合中 元素不重复  
db.persons.update({},{$addToSet:{lessons:'node'}},true,true);  
6.$pop 删除最后一个元素  
db.persons.update({},{$pop:{lessons:1}},true,true);  
7.从数组中删除一个或多个元素  
db.persons.update({},{$pull:{lessons:'node'}},true,true);  
db.persons.update({},{$pullAll:{lessons:['js','mongodb']}},true,true);  
8.数组定位  
db.persons.update({"scores.name":"js"},{$set:{age:100}},true,true)  
9.runCommand findAndModify  
var result = db.runCommand({  
... findAndModify:"persons", //指定操作的集合  
... query:{name:'zfpx'},//指定查询的条件，要更新哪些对象  
... update:{$set:{age:100}},//更新后的值  
... new:true});//是否返回更新后的值  
print(result);  
#查询  
1.指定返回的字段  
db.persons.find({},{name:1,_id:0});  
2 查询条件 比较运算符  
lt < less than  
lte <= less than equals  
gt > greater than  
gte >= greater than equals  
ne != not equal  
db.persons.find({age:{$gt:5}},{age:1,name:1,_id:0});  
db.persons.find({age:{$ne:3}},{age:1,name:1,_id:0});  
3.指定一个范围,多个条件与  
db.persons.find({age:{$gt:3,$lt:5}},{age:1,name:1,_id:0});  
4.$in包含 $nin不包含  
db.persons.find({age:{$in:[2,4,6,8,10]}},{age:1,name:1,_id:0});  
db.persons.find({age:{$nin:[2,4,6,8,10]}},{age:1,name:1,_id:0});  
5.$or或  
db.persons.find({$or:[{age:{$lt:3}},{age:{$gt:7}}]},{age:1,name:1,_id:0});  
6.null没有这个字段  
db.persons.find({home:null});  
7.正则查询  
db.persons.find({name:/1/});  
8.$not 取反  
db.persons.find({name:{$not:/1/}});  
9.$all 数组中包含指定的所有元素  
db.persons.update({},{$pushAll:{lessons:['node','js','mongodb']}},true,true);  
db.persons.find({lessons:{$all:['js','java']}});  
db.persons.find({"lessons.3":'java'});  
10.$size查询指定长度  
db.persons.find({"lessons":{$size:4}});  
db.persons.update({_id:3},{$push:{lessons:"java"},$inc:{size:1}});  
db.persons.find({size:{$gt:3}});  
11.curor游标  
var cur = db.persons.find();  
var p = cur.next();  
print(p);  
```var cur = db.persons.find();  
while(cur.hasNext()){  
... var p = cur.next();  
... print(p._id);  
... }``  
12.$slice 返回数组的指定元素  
db.persons.find({},{lessons:{$slice:[1,2]}});  
db.persons.find({},{lessons:{$slice:-1}}); //最后一个元素  
13.$where 万能查询方法  
db.p.find({'$where':function(){  
    var lessons = this.lessons;  
    var scores = this.scores;  
    if(lessons &&scores ){  
        if(this.age>3){  
            for(var i=0;i<lessons.length;i++){  
                if(lessons[i] == 'js'){  
                    for(var j=0;j<scores.length;j++){  
                        if(scores[j].score >60){  
                            return true;  
                        }  
                    }  
                }  
            }  
        }  
    }  
}});  
