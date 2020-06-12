<template>
  <div>
    <h1>通讯录管理</h1>
    <div class="bs-example" data-example-id="hoverable-table">
    <table class="table table-hover">
      <thead>
        <tr >
          <th>用户id</th>
          <th>姓名</th>
          <th>电话</th>
          <th>相关操作</th>
        </tr>
        </thead>
        <tbody>
           <tr v-for="h in phone">
             <td>{{h.id}}</td>
             <td>{{h.name}}</td>
             <td>{{h.phone}}</td>
             <td>
              <button class="btn btn-success" @click="toadd" ><i class="fa fa-plus"></i>添加</button>
              <button class="btn btn-danger" @click="del(h.id)"><i class="glyphicon glyphicon-trash"></i>删除</button>
             </td>

           </tr>
        </tbody>
     </table>
    </div>
  </div>
</template>

<script>
  export default{
   data:function(){
     return {
      phone:[]
     }
   },
   mounted:function(){
     this.getAll()
   },
   methods:{
     getAll:function(){
     var obj=this;
         $.ajax({
           type:"post",
           url:"http://localhost:8082/mycrmproject/phoneController/findAll",
           data:{time:new Date().getTime()},
           success:function(result){

               obj.phone=result.list;
           },
          xhrFields: {
             withCredentials: true
        }
      })
   },

   del:function(id){
           var obj = this;
           if(confirm("你确定删除吗")){
             $.ajax({
               type:"post",
               url:"http://localhost:8082/mycrmproject/phoneController/delete/"+id,
               data:{time:new Date().getTime()},
               success:function(result){
                  alert(result);
                  //重新查询
                  obj.getAll();
               },
               xhrFields: {
                 withCredentials: true
               }
             });
           }
         },

   toadd:function(){
     this.$router.push("/main/addphone")
   }
   }

  }
</script>

<style>
  table{
    background-color: #F0F8FF;
  }
</style>
