

var queue  = [];
function inqueue(num){
    if(queue.length >=10){
        console.error('队列消息堆积太多，请及时处理');
        // sendMail();
    }else{
        queue.push(num);
    }


}
function outqueue(num){
    queue.shift();
}
function loop(){
    inqueue(1);
    inqueue(2);
    outqueue();

}
loop();
loop();
loop();
loop();
loop();
loop();
loop();
loop();
loop();
loop();
loop();
loop();
loop();
loop();
console.log(queue);