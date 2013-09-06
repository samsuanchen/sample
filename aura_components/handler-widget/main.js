define(['underscore','text!./template.tmpl','backbone'], 
 function(_,template,Backbone) {
  return {
      type:"Backbone",
      events: {},
      onhi:function(msg){
        $("#message").append(msg+",world!<br>")
      },
      // B. 套用 template
      render:function() { // 
       
        // 套用 template.tmpl 以設定 my-widget 所對應的 div //
      },
      // C. 啟動 主程式
      initialize: function() {
        this.sandbox.on("hi", this.onhi, this)
        this.render();
      }
    }
});
