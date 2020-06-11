<template>
  <div>
    <center>采购管理信息</center>
    <button class="btn-info" style="margin-left:10px;height: 25px;" @click="toaddbuy">添加采购人信息</button>
    <input type="text" style="margin-left: 450px;" v-model="searchName"/><button class="btn-info" @click="tosearch">搜索</button><br/>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>采购批次</th>
          <th>采购者姓名</th>
          <th>采购金额</th>
          <th>采购时间</th>
          <th>采购者手机号</th>
          <th>操作</th>
        </tr></thead>
        <tbody>
        <tr v-for="b in buys">
          <td>{{b.id}}</td>
          <td>{{b.buyer}}</td>
          <td>{{b.amout}}</td>
          <td>{{b.buytime}}</td>
          <td>{{b.phone}}</td>
          <td>
            <button class="btn-success" @click="toupdate(b.id,b.buyer)"><i class="glyphicon glyphicon-wrench" ></i>修改</button>
            <button class="btn-danger" style="margin-left: 10px;" @click="todelete(b.id)"><i class="glyphicon glyphicon-trash"></i>删除</button>
          </td>
        </tr>
     </tbody>
    </table>
    <nav aria-label="Page navigation" style="margin-left: 50px;">
      <ul class="pagination">
        <li>
          <a href="javascript:void(0)" aria-label="Previous" @click="toPage(1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="index in indexs">
          <a href="javascript:void(0)" @click="toPage(index)"><span aria-hidden="true">{{index}}</span></a>
        </li>
        <li>
          <a href="javascript:void(0)" aria-label="Next" @click="toPage(countPage)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
        <li ><a href="javascript:void(0)">总共{{countPage}}页，当前第{{currentPage}}页</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default{
    data:function(){
      return {
       buys:[],
       currentPage:1,
       pageSize:8,
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
        this.tosearch()
      },
      methods:{
        toPage:function(currentPage){
          this.currentPage = currentPage;
          this.getproducts();
        },
        tosearch:function(){
          var obj=this;
          $.ajax({
            type:"post",
            url:"http://localhost:8082/mycrmproject/buyController/getbuybysearchname",
            data:{time:new Date().getTime(),currentPage:obj.currentPage,pageSize:obj.pageSize,searchName:obj.searchName},
            success:function(result){
                if(result.code == "520"){
                  obj.buys=result.list;
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
        
        toupdate:function(id,buyer){
          this.$router.push({name:"Updatebuy",query:{'id':id,'buyer':buyer}})
        },
        todelete:function(id){
          var obj=this;
           if(confirm("你确定删除吗?")){
          $.ajax({
            type:"post",
            url:"http://localhost:8082/mycrmproject/buyController/deleteone/"+id,
            data:{time:new Date().getTime()},
            success:function(result){
                 alert(result);
                 obj.getall()
            },
            xhrFields: {
              withCredentials: true
            }
          });
          }
        },
        getall:function(){
          var obj=this;
         $.ajax({
           type:"post",
           url:"http://localhost:8082/mycrmproject/buyController/getallbuy",
           data:{time:new Date().getTime()},
           success:function(result){
               if(result.code == "520"){
                 obj.buys=result.buys;
               }else{
                  obj.$router.push("/");
               }
           },
           xhrFields: {
             withCredentials: true
           }
         });
        },
        toaddbuy:function(){
          this.$router.push("/main/addbuy")
        }
      }
      }
</script>

<style scoped>
  center{
    font-size: 30px;
    font-family: "宋体";

  }
  div{
    background-color: aliceblue;
    color: #4B0082;
  }
  table{
    padding: 2px;
  }
</style>
