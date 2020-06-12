<template>
  <div>
         <h2> 供应商</h2>
         <table class="table table-hover">
           <thead>
             <tr >

               <th>姓名</th>
               <th>邮箱</th>
               <th>手机号</th>
               <th>地址</th>

             </tr></thead>
             <tbody>
             <tr v-for="c in scm">

               <td>{{c.name}}</td>
               <td>{{c.email}}</td>
               <td>{{c.phone}}</td>
               <td>{{c.address}}</td>

             </tr>
          </tbody>
         </table>

  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        scm:[],
      }
    },
    mounted:function(){
     this.getAll();
    },
    methods:{

     getAll:function(){
        var obj=this;
        $.ajax({
          type:"post",
          url:"http://localhost:8082/mycrmproject/scmController/getScm",
          data:{time:new Date().getTime()},
          success:function(result){
          obj.scm=result.list;
          },
          xhrFields: {
            withCredentials: true
          }
        })
      },

}
  }



</script>

<style>
</style>
