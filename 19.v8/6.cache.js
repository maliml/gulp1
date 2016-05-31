/**
 简单的缓存
 **/
var cache = {};
var set = function(key,value){
    cache[key] =  value;
}
var get = function(key){
    return cache[key];
}

/**
 * 可以限制key数量的缓存
 */
var CacheMap = function(limit){
    this._limit = limit || 10;
    this.map = {};
    this.keys = [];
}

CacheMap.prototype.set = function(key,value){
    var map = this.map;
    var keys = this.keys;
    if(map.hasOwnProperty(key)){//判断此key是否存在
        map[key] = value;
    }else{
        if(keys.length == this._limit){//如果key的数量等于最大数量
            var firstKey = keys.shift();//移除第一个元素
            delete map[firstKey];//在此对象中删除此key
        }
        map[key] = value;
        keys.push(key);
    }
}

CacheMap.prototype.get = function(key){
    return this.map[key];
}

var map = new CacheMap(3);
map.set('key1','value1');
map.set('key2','value2');
map.set('key3','value3');
map.set('key4','value4');
var name = 'cache';
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key3'));
console.log(map.get('key4'));
module.exports.name = name;
module.exports = CacheMap;