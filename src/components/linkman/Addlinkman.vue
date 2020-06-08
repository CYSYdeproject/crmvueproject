<template>
  <div class="b">
    <center>添加联系人信息</center>
    <div class="c">
       联系人姓名:<input type="text" v-model="name"/><br />
       联系人电话:<input type="text" v-model="phone"/><br />
       联系人邮箱:<input type="text" v-model="email"/><br />
       联系人qq:<input type="text" v-model="qq" style="margin-left:17px;"/><br />
       <button class="btn btn-success" @click="addLinkman()" style="margin-left: 110px;">添加</button>
      <button class="btn btn-danger" style="margin-left: 130px;">取消</button>
    </div>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        name:"",
        phone:"",
        email:"",
        qq:"",
        userId:0
      }
    },
    mounted:function(){
      this.getUser();
    },
    methods:{
      addLinkman:function(){
         var obj = this;
         $.ajax({
           type:"post",
           url:"http://localhost:8082/mycrmproject/linkController/addlinkman",
           data:{
             time:new Date().getTime(),name:obj.name,phone:obj.phone,email:obj.email,qq:obj.qq,userId:obj.userId},
           success:function(result){
             if(result.code=="520"){
               alert("添加成功");
               obj.$router.push("/main/linkman")
             }else{
               alert("添加失败")
             }
           },
           xhrFields: {
             withCredentials: true
           }
         })
      },
      getUser:function(){
        var obj = this;
        $.ajax({
            type:"post",
            url:"http://localhost:8082/mycrmproject/userController/user",
            data:{time:new Date().getTime()},
            success:function(result){
                if(result.code == "520"){
                  obj.userId = result.user.id;
                }else{
                  obj.$router.push("/");
                }
            },
            xhrFields: {
              withCredentials: true
            }
          });
      },
    }
  }
</script >

<style >
  *{

  }
  .b{
    background-color: #F0F8FF;
    color: palevioletred;
    font-size:20px
  }
  .c{
    margin: 2px;
    padding-left: 30px;
  }
  center{
    font-size: 30px;
  }

</style>
