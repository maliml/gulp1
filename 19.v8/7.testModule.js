var m = require('./7.module');
m.leak(1);
m.leak(2);
m.leak(3);//......
m.clear();