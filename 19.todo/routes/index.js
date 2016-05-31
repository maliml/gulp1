var express = require('express');
var router = express.Router();
var Todo = require('../models/todos');
function getTodos(res){
  Todo.find(function(err,todos){
    if(err)
      res.send(err);
    res.json(todos);
  });
}
router.get('/api/todos', function(req, res) {
  getTodos(res);
});

router.post('/api/todos', function(req, res) {
  Todo.create({
    text:req.body.text,
    done:false
  },function(err,todo){
    if(err)
      res.send(err);
    getTodos(res);
  });
});
router.post('/api/todos/batchDelete', function(req, res) {
  var ids = req.body.ids;
  Todo.remove({_id:{$in:ids}},function(err){
    if(err)
      res.send(err);
    getTodos(res);
  });
});


router.delete('/api/todos/:_id',function(req,res){
  Todo.remove({_id:req.params._id},function(err){
    if(err)
      res.send(err);
    getTodos(res);
  });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
