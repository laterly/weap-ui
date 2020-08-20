//app.js
App({
  onLaunch: function () {
    let a={
      name:'qqq',
      b:function(){
        console.log(this.name,this);
      },
      c:function(){
        this.b();
      }
    }
    a.c();
  }
})