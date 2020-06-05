<template>
  <div>
    <center>修改密码页面</center>
    <div class="form-horizontal">
      <div class="form-group">
        <label  class="col-sm-2 control-label">原密码</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" placeholder="请输入原密码" v-model="oldpassword">
        </div>
      </div>

      <div class="form-group">
        <label  class="col-sm-2 control-label">新密码</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" placeholder="请输入新密码" v-model="newpassword">
        </div>
      </div>

      <div class="form-group">
        <label  class="col-sm-2 control-label">确认密码</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" placeholder="请输入确认密码" v-model="newpassword2">
        </div>
      </div>
      <button class="btn btn-default" style="margin-left: 400px;" @click="comfirm">确认修改</button>
    </div>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        user:{},
        oldpassword:"",
        newpassword:"",
        newpassword2:"",
      }
    },
    mounted:function(){
    this.getUser();
    },
    methods:{
      getUser:function(){
        var obj = this;
        $.ajax({
          type:"post",
          url:"http://localhost:8082/mycrmproject/userController/user",
          data:{time:new Date().getTime()},
          success:function(result){
              if(result.code == "520"){
                obj.user=result.user;
              }else{
                 obj.$router.push("/");
              }
          },
          xhrFields: {
            withCredentials: true
          }
        });
      },
      comfirm:function(){
        if(this.oldpassword!=this.user.password){
          alert("原密码不正确");
          return;
        }
        if(this.newpassword!=this.newpassword2){
          alert("两次密码输入不正确");
          return;
        }
        var obj=this;
        $.ajax({
          type:"post",
          url:"http://localhost:8082/mycrmproject/userController/update",
          data:{time:new Date().getTime(),password:obj.newpassword,id:obj.user.id},
          success:function(result){
              if(result.code =="123"){
                alert("修改成功！");
                obj.password=result.password;
                obj.$router.push("/");
              }else{
                alert("修改失败！")
              }
          },
          xhrFields: {
            withCredentials: true
          }
        });
      },
    }
  }
</script>

<style>
</style>
