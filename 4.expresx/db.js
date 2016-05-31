var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://123.57.143.189/blog");
var userSchema = new mongoose.Schema({
    username:{type:String},
    password:{type:String}
});
var userModel = db.model('User',userSchema);
exports.model = userModel;