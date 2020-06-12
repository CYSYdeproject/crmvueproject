<template>
  <div>
    <center>消费出货表</center>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>客户姓名</th>
          <th>客户等级</th>
          <th>客户手机号</th>
          <th>货物所在仓库</th>
          <th>购买折扣</th>
        </tr>
      </thead>
        <tbody>
        <tr v-for="d in datas">
          <td>{{d.name}}</td>
          <td>{{d.level}}</td>
          <td>{{d.phone}}</td>
          <td>{{d.maven.mavenname}}</td>
          <td>{{d.maven.discount}}</td>
        </tr>
     </tbody>
    </table>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        datas:[]
      }
    },
    mounted:function(){
      this.getmaven()
    },
    methods:{
      getmaven:function(){
        var obj=this;
        $.ajax({
          type:"post",
          url:"http://localhost:8082/mycrmproject/customerController/getmaven",
          data:{time:new Date().getTime()},
          success:function(result){
            if(result.code=="520"){
               obj.datas=result.data;
            }
          },
          xhrFields: {
            withCredentials: true
          }
        })
      }
    }
  }
</script>

<style scoped="scoped">
  div{background-color: #D9EDF7;}
</style>
