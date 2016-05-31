var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = 'mongodb://123.57.143.189/zry';
var assert = require('assert');
exports.insert = function(user,callback){
    MongoClient.connect(url,function(err,db){
        assert.equal(null,err);
        db.collection('user').save(user,function(err,ret){
            db.close();
            callback(null,ret);
        });
    });
}

exports.update = function(user,callback){
    MongoClient.connect(url,function(err,db){
        assert.equal(null,err);
        console.dir(user);
        db.collection('user').update({_id:new ObjectID(user._id)},{username:user.username,password:user.password},function(err,ret){
            db.close();
            callback(null,ret);
        });
    });
}
exports.list = function(callback){
    MongoClient.connect(url,function(err,db){
        assert.equal(null,err);
        db.collection('user').find({}).toArray(function(err,ret){
                db.close();
                callback(null,ret);
        });
    });
}
exports.delete = function(_id,callback){
    MongoClient.connect(url,function(err,db){
        assert.equal(null,err);
        db.collection('user').remove({_id:new ObjectID(_id)},function(err,ret){
            db.close();
            callback(null,ret);
        });
    });
}