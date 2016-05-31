var express = require('express');
var router = express.Router();
var Todo = require('../models/todos');

/* 获取首页 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
function getTodos(res){
    console.log(Todo);
  Todo.find(function(err,todos){
    if(err)
     res.send(err);
    res.json(todos);
  });
}
//获取所有的待办事项
router.get('/api/todos', function(req, res) {
  getTodos(res);
});
//保存待办事项
router.post('/api/todos', function(req, res) {
  Todo.create({
    text:req.body.text,
    done:false //是否完成默认给false
  },function(err,todo){
    getTodos(res);
  });
});

router.post('/api/todos/delete', function(req, res) {
    var ids = req.body.ids;
    Todo.remove({_id:{$in:ids}},function(err){
        getTodos(res);
    });
});


module.exports = router;
