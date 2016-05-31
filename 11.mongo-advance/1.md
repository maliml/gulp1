#今天的内容
扩展命令、数据库管理、索引、主从和副本集以及分片。
#命令和配置
1. 启动项
--dbpath 指定数据库文件的目录
--port 端口 默认是27017 28017
--fork 以后台守护的方式进行启动
--logpath 指定日志文件输出路径
--config 指定一个配置文件
--auth 以安全方式启动数据库，默认不验证
--rest 会启动一个帮助页
2.启动数据库
3.关闭数据库
3.1 ctrl+c
3.2 db.shutdownServer();
3.3 关闭CMD
#导出导入 只存成文件格式 比如JSON CVS
-导出 mongoexport
 -d 指定导出的数据库
 -c 指定导出的集合
 -o 导出的文件存储路径
 -q 进行过滤
 mongoexport -d blog -c persons -o bak.json
#备份恢复 保存成了二进制格式，无法直接访问
mongoimport --db blog --collection persons --file bak.json
mongorestore --db blog --directoryperdb bak.dmp\blog
##文件备份
拷贝文件夹的方式实现备份
##为了数据的完整性和一致性，导出前要先锁定写入，导出后再解锁。
db.runCommand({fsync:1,lock:1});
db.fsyncUnlock()
#用户和权限
##安全措施
物理隔离 网络隔离 防火墙(ip ip段 白名单 黑名单) 用户名和密码验证
##用户管理
1. 创建用户的两种方法
db.addUser('zry','123'); 创建root角色的用户，已经废弃
db.createUser({user:'zhangsan',pwd:'123',roles:[{role:'read',db:'blog'}]})
2.查看用户的权限
db.runCommand({usersInfo:'zry',showPrivileges:true});
3.验证用户
db.auth('zry','123');
4.修改用户密码
db.changeUserPassword('zhangsan','456');
5.修改用户信息
db.runCommand({updateUser:'zhangsan',pwd:'789',customData:{title:'manager',age
:30}});
#用户的注意事项
1. 用户的操作都需要在admin下面进行 use admin
2. 如果在在某一个数据库下执行操作，那只对当前数据库生效。
3. addUser 已经废弃，不建议使用。但是创建出来的是默认有root权限的用户。