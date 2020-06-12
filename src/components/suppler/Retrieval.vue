<template>
  <div>
        <h2>检索中心</h2>

        <input type="text" placeholder="请输入客户姓名" /><button class="btn-info" ><i class="fa fa-search" aria-hidden="true"></i>搜索</button>





         <table class="table table-hover">
           <thead>
             <tr >

               <th>姓名</th>
               <th>邮箱</th>
               <th>手机号</th>
               <th>地址</th>
               <th>服装类型</th>


             </tr></thead>
             <tbody>
             <tr v-for="c in retrieval">

               <td>{{c.name}}</td>
               <td>{{c.email}}</td>
               <td>{{c.phone}}</td>
               <td>{{c.address}}</td>
               <td>{{c.clothes}}</td>
             </tr>
          </tbody>
         </table>




  </div>


</template>

<script>

  export default{
      data:function(){
        return{
          retrieval:[],
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
            url:"http://localhost:8082/mycrmproject/retrievalController/getRetrieval",
            data:{time:new Date().getTime()},
            success:function(result){
            obj.retrieval=result.list;
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
