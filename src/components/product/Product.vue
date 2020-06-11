<template>
  <div >
    <center style="font-size: 20px;">商品管理信息页面</center>
    <button class="btn-info" @click="toaddproduct" style="margin-left: 50px;">添加采购商品信息</button>
    <input type="text"  v-model="selectprice1" style="margin-left: 250px;width: 50px;"/>
    <label style="color: red;">—</label>
    <input type="text"  v-model="selectprice2" style="margin-left: 5px;width: 50px;"/>
    <button class="btn-info" @click="currentPage=1;getproducts()">搜索价格</button><br/>
    <div v-for="p in products" class="o">
      <img  v-bind:src="p.productimg" class="i"/>
      <center>商品价格:{{p.productprice}}</center>
      <center>信息描述:{{p.productdes}}</center>
      <center>商品尺寸:{{p.productsize}}</center>
    </div><br/>
    <div class="u" style="position:fixed;margin-top: 480px;margin-left: 280px;">
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
    </div>

</template>

<script>
  export default{
    data:function(){
      return {
        products:[],
        currentPage:1,
        pageSize:6,
        selectprice1:0,
        selectprice2:10000,
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
    methods:{
      toPage:function(currentPage){
        this.currentPage = currentPage;
        this.getproducts();
      },
      getproducts:function(){
          var obj = this;
          $.ajax({
            type:"post",
            url:"http://localhost:8082/mycrmproject/productController/getproducts",
            data:{time:new Date().getTime(),currentPage:obj.currentPage,pageSize:obj.pageSize,selectprice1:obj.selectprice1,selectprice2:obj.selectprice2},
            success:function(result){
                if(result.code == "520"){
                  obj.products =  result.data;
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
      toaddproduct:function(){
        this.$router.push("/main/addproduct")
      },
      getall:function(){
        var obj=this;
        $.ajax({
          type:"post",
          url:"http://localhost:8082/mycrmproject/productController/getAll",
          data:{time:new Date().getTime()},
          success:function(result){
            if(result.code=="520"){
               obj.products=result.products;
            }else{
              alert("没有信息")
            }
          },
          xhrFields: {
            withCredentials: true
          }
        })
      }
    },
    mounted:function(){
      this.getproducts()
    }
  }
</script>

<style scoped="scoped">
  .o{
  height: 250px;
  background-color:aliceblue;
  width: 33.3%;
  float: left;
  padding-left: 5px;
  font-size: 15px;
  position:relative;
  }
  .i{
  height: 150px;
  width: 150px;
  margin-left: 50px;
  margin-top: 5px;
  }

</style>
