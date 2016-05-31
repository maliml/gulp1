//查年年龄大于3的，选择了js课的，JS课的数大于60分的。document
[{name:'zfpx',age:5,lessons:['js','node'],scores:[{name:'js',score:90},{name:'node',score:80}]}]
db.p.find({'$where':function(){
    var lessons = this.lessons;
    var scores = this.scores;
    if(lessons &&scores ){
        if(this.age>3){
            for(var i=0;i<lessons.length;i++){
                if(lessons[i] == 'js'){
                    for(var j=0;j<scores.length;j++){
                        if(scores[j].score >60){
                            return true;
                        }
                    }
                }
            }
        }
    }
}});
