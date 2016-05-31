#安装软件
node 
bower
npm install bower -g
webstorm 
mongodb
一定要启动起来
bower install bootstrap
bower install angular
#项目介绍
angular+bootstrap
node.js mongodb
实现一个增加删除 改查的示例
#http
发起请求()-服务器端响应()-浏览器渲染页面
使用了HTTP-TCP
请求
响应

[root@zfpx_dev_server ~]# telnet www.baidu.com 80
Trying 115.239.210.27...
Connected to www.baidu.com.
Escape character is '^]'.
GET / HTTP/1.1

HTTP/1.1 302 Moved Temporarily
Date: Thu, 02 Jul 2015 12:15:11 GMT
Content-Type: text/html
Content-Length: 215
Connection: Keep-Alive
Location: http://www.baidu.com/search/error.html
Server: BWS/1.1
X-UA-Compatible: IE=Edge,chrome=1
BDPAGETYPE: 3
Set-Cookie: BDSVRTM=0; path=/

<html>

#需求分析
实现一个增加删除 改查用户的示例
前端 html
后端 服务器端
##restful接口
http://open.weibo.com/wiki/2/statuses/public_timeline
representialtionl state transfer
资源 表现层状态转化
##资源
URI 统一资源标识符
URL 统一资源定位符 
##状态转移 method
GET 获取一个资源
POST 新建一个资源
PUT 更新一个资源
DELETE 删除一个资源 
##设计接口
