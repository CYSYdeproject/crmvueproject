<template>
  <div>
   <center>客户详情</center>
    <div class="a">客户编号：{{customer.id}}</div>
    <div class="a">客户名字:{{customer.name}}</div>
    <div class="a">客户年龄:{{customer.age}}</div>
    <div class="a">客户性别:{{customer.sex == 0?"男":"女"}}</div>
    <div class="a">客户邮箱:{{customer.email}}</div>
    <div class="a">客户电话:{{customer.phone}}</div>
    <div class="a">客户生日:{{customer.birth}}</div>
    <div class="a">客户级别:{{customer.level == 0 ? "重要客户":(customer.level==1?"普通客户":"潜在客户")}}</div>
    <button class="btn-success"  @click="goback()">返回</button>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
      id:this.$route.query.id,
      customer:{}
      }
    },
    mounted:function(){
      this.getAll();
    },
    methods:{
      goback:function(){
        this.$router.go(-1)
      },
      getAll:function(){
        var obj=this;
        $.ajax({
          type:"post",
          url:"http://localhost:8082/mycrmproject/customerController/findcustomerbyid",
          data:{time:new Date().getTime(),id:obj.id},
          success:function(result){
            if(result.code=="520"){
              obj.customer=result.data;
            }
          else{
            alert("有问题，请联系管理员");
            }
          },
          xhrFields: {
            withCredentials: true
          }
        })
      },
    }
  }
</script>

<style scoped>
  div{
    background-color: #F9F9F9;
  }
 .a{
   font-size: 20px;
   color: indigo;
   margin-left: 100px;
 }
 center{
   font-size: 40px;
   color: #337AB7;
 }
 button{
   align-content: center;
   margin-left: 350px;
 }
</style>
