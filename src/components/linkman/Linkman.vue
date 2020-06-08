<template>
  <div>
    <center>联系人详情</center>
    <button class="btn-info" @click="toaddlink()"><i class="fa fa-plus" aria-hidden="true"></i>添加联系人</button>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>联系人编号</th>
          <th>联系人名字</th>
          <th>联系人邮箱</th>
          <th>联系人电话</th>
          <th>联系人qq</th>
          <th>所属人</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="linkman in linkmans">
            <td>{{linkman.id}}</td>
            <td>{{linkman.name}}</td>
            <td>{{linkman.email}}</td>
            <td>{{linkman.phone}}</td>
            <td>{{linkman.qq}}</td>
            <td>{{linkman.user.username}}</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        linkmans:[]
      }
    },
    mounted:function(){
      this.getlinkmans()
    },
    methods:{
      toaddlink:function(){
        this.$router.push("/main/addlinkman")
      },
      getlinkmans:function(){
        var obj=this;
        $.ajax({
          type:"post",
          url:"http://localhost:8082/mycrmproject/linkController/getlinkmans",
          data:{time:new Date().getTime()},
          success:function(result){
          obj.linkmans=result.data;
          },
          xhrFields: {
            withCredentials: true
          }
        })
      }
    }
  }
</script>

<style>
  table{
   margin: 1px;
   background-color: #D9EDF9;
  }
</style>
