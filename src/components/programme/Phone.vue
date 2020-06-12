<template>
  <div>
    <h1>通讯录</h1>
    <div class="bs-example" data-example-id="hoverable-table">
    <table class="table table-hover">
      <thead>
        <tr >
          <th>客户id</th>
          <th>姓名</th>
          <th>电话</th>

        </tr>
        </thead>
        <tbody>
           <tr v-for="h in phone">
             <td>{{h.id}}</td>
             <td>{{h.name}}</td>
             <td>{{h.phone}}</td>

           </tr>
        </tbody>
     </table>
    </div>
    <nav>
      <ul class="pagination">
        <li >
          <a href="javascript:void(0);" @click="toPage(--currentPage <= 1 ? 1: currentPage)">
          <span >&laquo;</span>
          </a>
        </li>
        <li v-for="index in indexs"><a href="javascript:void(0);" @click="toPage(index)">{{index}}</a></li>
        <li >
          <a href="javascript:void(0);" @click="toPage(++currentPage >= countPage?countPage:currentPage)">
          <span>&raquo;</span>
          </a>
        </li>
          <li> <a>共{{countPage}}页,当前第{{currentPage}}页</a></li>
        </ul>
    </nav>
  </div>
</template>

<script>
  export default{
   data:function(){
     return {
      phone:[],
      currentPage:1,
      //当前每页显示的数据
      pageSize:5,
      //总页数（接收）
      countPage:0,
      //搜索的名字
      searchName:""
     }
   },
   computed:{
         indexs:function(){
             var arr = [];
             for(var i = 1;i<=this.countPage;i++){
               arr[i - 1] = i;
             }
           return arr;
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
   //查询所有数据
         getPhone:function(){
           var obj = this;
           $.ajax({
             type:"post",
             url:"http://localhost:8082/mycrmproject/phoneController/getPhone",
             data:{time:new Date().getTime(),currentPage:obj.currentPage,pageSize:obj.pageSize,searchName:obj.searchName},
             success:function(result){
              obj.phone = result.list;
              obj.countPage = result.countPage;
             },
             xhrFields: {
               withCredentials: true
             }
           });
         },
          //查询所有数据
               toPage:function(index){
                 var obj = this;
                 obj.currentPage = index;
                 obj.getPhone();
         
               }

   }

  }
</script>

<style>
  table{
    background-color: #F0F8FF;
  }
</style>
