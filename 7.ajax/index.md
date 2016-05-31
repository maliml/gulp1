1.介绍一下ajax
2.实现一个案例
  显示一个ajax页面，提供用户的输入。
  输入完成后以ajax的方式提交到后台并
  保存到mysql中。并且
  把最新的结果显示在此页面上.

   function handler(){
          if(this.readyState == 4 && this.status == 200){
              console.log(this.responseText);
          }
      }
      var client = new XMLHttpRequest();
      client.onreadystatechange = handler;
      client.open("GET", "/ajax");
      client.send();