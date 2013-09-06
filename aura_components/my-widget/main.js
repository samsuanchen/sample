define(['underscore','text!./template.tmpl','backbone'], 
 function(_,template,Backbone) {
  return {
      type:"Backbone",
      // A. 設定 按鍵處理
      events: {"click #btnhello":"hello"}, // 按鈕 id='btnhello' 定義於 template.tmpl
      hello:function(e){
        $btn=$(e.target);
        $("#message").append($btn.html()+",world!<br>")
      },
      // B. 套用 template
      render:function() { // 
        this.$el.html( _.template(template,{name:"sam"}) );
        // 套用 template.tmpl 以設定 my-widget 所對應的 div //
      },
      // C. 啟動 
      initialize: function() {
        this.render();
      }
    }
});
