<template>
  <div>
    <h2>客户信息列表</h2>
    <button class="btn-info"><i class="fa fa-plus" aria-hidden="true"></i>添加客户信息</button>
    <input type="text" placeholder="请输入客户姓名" v-model="searchName"/><button class="btn-info" @click="currentPage=1; getCustomers()"><i class="fa fa-search" aria-hidden="true"></i>搜索</button>
    <div class="bs-example" data-example-id="hoverable-table">
        <table class="table table-hover">
          <thead>
            <tr >
              <th>客户id</th>
              <th>客户姓名</th>
              <th>客户性别</th>
              <th>客户年龄</th>
              <th>客户手机号</th>
              <th>客户级别</th>
              <th>操作</th>
            </tr></thead>
            <tbody>
            <tr v-for="c in customers">
              <td>{{c.id}}</td>
              <td>{{c.name}}</td>
              <td>{{c.sex==0?"男":"女"}}</td>
              <td>{{c.age}}</td>
              <td>{{c.phone}}</td>
              <td>{{c.level==0?"重要客户":(c.level==1?"普通客户":"潜在客户")}}</td>
              <td>
                <button class="btn-info"><i class="glyphicon glyphicon-wrench" ></i>修改</button>
                <button class="btn-danger" style="margin-left: 10px;"><i class="glyphicon glyphicon-trash"></i>删除</button>
                <button class="btn-success" style="margin-left: 10px;" @click="tofindcustomer(c.id)"><i class="fa fa-database" aria-hidden="true"></i>详情</button>
                
              </td>
            </tr>
         </tbody>
        </table>
        <nav aria-label="Page navigation">
     <ul class="pagination">
       <li>
         <a href="javascript:void(0)" aria-label="Previous" @click="toPage(1)">
           <span aria-hidden="true">&laquo;</span>
         </a>
       </li>
       <li v-for="index in indexs"><a href="javascript:void(0)" @click="toPage(index)">{{index}}</a></li>
       <li>
         <a href="javascript:void(0)" aria-label="Next" @click="toPage(countPage)">
           <span aria-hidden="true">&raquo;</span>
         </a>
       </li>

       <li ><a href="javascript:void(0)">总共{{countPage}}页，当前第{{currentPage}}页</a></li>
     </ul>
   </nav>
      </div>

  </div>
</template>

<script>
  export default{
    data:function(){
      return {
       currentPage:1,
       pageSize:5,
       searchName:"",

       customers:[],
       countPage:0,
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
     this.getCustomers();
    },
    methods:{
      toPage:function(currentPage){
        this.currentPage = currentPage;
        this.getCustomers();
      },
      getAll:function(){
        var obj=this;
        $.ajax({
          type:"post",
          url:"http://localhost:8082/mycrmproject/customerController/getall",
          data:{time:new Date().getTime()},
          success:function(result){
          obj.customers=result;
          },
          xhrFields: {
            withCredentials: true
          }
        })
      },
      getCustomers:function(){
          var obj = this;
          $.ajax({
            type:"post",
            url:"http://localhost:8082/mycrmproject/customerController/getCustomers",
            data:{time:new Date().getTime(),currentPage:obj.currentPage,pageSize:obj.pageSize,searchName:obj.searchName},
            success:function(result){
                if(result.code == "520"){
                  obj.customers =  result.data;
                  obj.countPage =  result.countPage;
                }else{
                  alert("有问题，请联系管理员");
                }
            },
            xhrFields: {
              withCredentials: true
            }
          });
      },
      tofindcustomer:function(id){
        this.$router.push({name:"MoreMessage",query:{id:id}});
      }
    },
  }
</script>

<style>
  table{
    background-color: #F0F8FF;
  }
</style>
