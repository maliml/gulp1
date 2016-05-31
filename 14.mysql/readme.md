#简介
1. mysql多用户，多线程的数据库服务器。
2. 它使用的是SQL Structure query languar 结构化查询语言。
3. 速度快，使用方便，查询复杂查询语言。
4. 它可以跨平台。
#安装
http://dev.mysql.com/downloads/mysql/
https://www.apachefriends.org/zh_cn/index.html
http://www.phpmyadmin.net/home_page/downloads.php
http://www.navicat.com/cht/download
#数据库
##创建数据库
create database if not exists school default charset utf8;
##显示数据库
show databases like 'school%';
##使用数据库
use school;
##删除数据库
drop database if exists school;
#数据库表
##创建表
create table  tname(colname type 
是否不可以为空 默认值 是否自动增长 是否主键
[not null|null] [default default value]
[auto_increment] [primary key])
create table user(id int primary key,name varchar(32));
create table score2 select * from score;
#查看表结构
show tables from school; 
show columns from score;
show index from score;
#修改表结构
alter table score add note varchar(32); 增加列
alter table score modify note int; 修改列
alter table score change note vnote int;改名列
alter table score drop vnote;删除列
alter table score rename score3;重命名表
#删除表
drop table if exists user ;
#操作数据
##插入数据
insert into tablename(col1,col2...) values(val1,val2...)
insert into tablename set col1=val1,col2=val2

insert into score(name,lesson,score) 
values('zhangsan','chinese',70);
insert into score(name,lesson,score) 
values('zhangsan','math',81);
insert into score(name,lesson,score) 
values('zhangsan','english',83);

insert into score(name,lesson,score) 
values('lisi','chinese',80),('lisi','math',93)
,('lisi','english',70);

把一个表里的数据复制到另一个表中
create table score2 select * from score;
select * from  score2;
insert into score select * from score;
#查询
select * from tablename
select * from score2
select name,lesson,score from score2;

select
column names 查询哪些列
from tables 从哪些表里面查询
where 查询条件
group by 按哪个列进行分组
having 第二条件，也就是说对分组后的数据进行过滤
order by 排序，对结果进行排序的规则
limit 0,5


select * from score where score>80 or score<80
group by 
根据所给的列名返回分组的查询结果。
select lesson,max(score) from score group by lesson

order 指定顺序
select lesson,max(score) from score group by lesson
order by max(score) desc

having 对分组后的条件进行过滤
select lesson,max(score) from score group by lesson
having max(score) > 90
order by max(score) desc

select lesson,max(score) from score group by lesson
having max(score) < 90
order by max(score) desc
limit 1


select lesson,max(score) from score group by lesson
having max(score) < 90
order by max(score) desc
limit 1,1

查询每门课程的平均分,返回课程和平均分二列 avg(score)
chinese xx
math xxxx
english xxx

计算每个人的总成绩并排名 显示字段(姓名,总成绩)
从高到低排
zhangsan 200
lisi 150
wangwu 120
sum() 汇总

##多表查询
select * from score s,student t where s.id = t.id;
select * from score s inner join student t on s.id = t.id;


update score set name='zfpx',lesson='node.js',score=60 where id in (1,2,3)
update score set name='zfpx',lesson='js',score=60 where id in (4,5,6)
删除ID不同，但其它信息都相同的冗余信息
select * from score where id in (select id from score where id<3);
delete from score where id in 
(
select a.id from (SELECT MAX(id) id FROM score  GROUP BY NAME,LESSON,SCORE) a
)

person
id name city



select * from person group by city
1 zhangsan beijing
3 wangwu beijing

2 lisi shanghai