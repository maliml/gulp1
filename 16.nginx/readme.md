#介绍
高性能的HTTP和反向代理服务器。
#安装
centos 源安装 nginx
添加nginx源：
wget http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm
rpm -ivh nginx-release-centos-6-0.el6.ngx.noarch.rpm
yum install nginx
nginx的几个默认目录
1 配置所在目录：/etc/nginx/
2 PID目录：/var/run/nginx.pid
3 错误日志：/var/log/nginx/error.log
4 访问日志：/var/log/nginx/access.log
5 默认站点目录：/usr/share/nginx/html
启动nginx
service nginx start
#配置文件说明
##负载均衡
1. 轮询（默认）
每人请求按时间顺序逐一分配到不同的后端服务器上，如果后端服务器当掉了，自去踢掉
2.weight
指定轮询的几率，wegiht和访问比率成正比，用于后端服务器性能不均衡的情况
3.ip hash
每个请求按访问IP的hash结果进行分配，每个访客固定一个后端服务器，解决session问题
ip_hash
4.fair
按后端的服务器响应时间来分析 请求，响应时间短的先分配
5.url_hash
按访问的URL的hash结果来进行分配 请求，每个URL对应一个后端服务器

down 标识本机已down掉，不参与请求处理
backup 备用机，当所有的其它机器都当掉时启用。
#location配置
语法规则
= 开头表示精确匹配
^~ 开头表示以此字符串开头
~表示正则匹配，区分大小写
~* 表示正则匹配,不区分大小写
!~表示不正则匹配，区分大小写
!~* 表示不正则匹配,不区分大小写
/ 通过匹配，可以匹配任何请求
如果多个location配置匹配同一个URL
先匹配 =,再匹配^`,再匹配正则，最后匹配/
当匹配成功之后不行继续匹配

location =/ {
       proxy_pass http://node/index;
    }
    location =/reg {
       proxy_pass http://node/register;
    }
    I am nginx c
 location ^~/static/ {
      root /usr/share/nginx/html;
     index index.html;
    }
     location  ~ \.(gif|png|jpg)$ {
      root /usr/share/nginx/html;
     index index.html;
    }
     location ^~/static/ {
          root /usr/share/nginx/html;
         index index.html;
        }
        location ~\.shtml {
              root /usr/share/nginx/html;
             index index.html;
            }