<template>
  <div>
    <center>修改采购批次{{id}}信息</center>
    <div class="upb">

      采购人姓名：<input type="text" value="buyer" v-model="buyer" style="margin-left: 9px;"/><br />
      采购金额:<input type="text" value="amout" v-model="amout" style="margin-left:34px;" /><br />
      采购时间:<input style="margin-left:34px;"type="date"  value="buytime" v-model="buytime"/><br />
      采购者手机号<input type="text"  value="phone" v-model="phone" style="margin-left: 8px;"/><br /><br/>
      <button class="btn-success" @click="updatebuy" style="margin-left: 130px;">确定提交</button>
    <button class="btn-danger" style="margin-left: 50px;" @click="goback">取消</button>

    </div>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        id:this.$route.query.id,
        buyer:this.$route.query.buyer,
        buy:{},
      }
    },
    mounted:function(){
      this.getbuybyid()
    },
    methods:{
      goback:function(){
        this.$router.go(-1)
      },
      updatebuy:function(){
      var obj=this;
      $.ajax({
        type:"post",
        url:"http://localhost:8082/mycrmproject/buyController/update",
        data:{time:new Date().getTime(),id:obj.id,buyer:obj.buyer,amout:obj.amout,buytime:obj.buytime,phone:obj.phone},
        success:function(result){
           if(result.code== "520"){
             alert("修改成功");
             obj.$router.push("/main/buy");

           }
        },
        xhrFields: {
          withCredentials: true
        }
      })
      },
      getbuybyid:function(){
       var obj=this;
       $.ajax({
         type:"post",
         url:"http://localhost:8082/mycrmproject/buyController/selectbuy/"+obj.id,
         data:{time:new Date().getTime()},
         success:function(result){
            obj.buy=result;
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
  .upb{
    margin-left: 20px;
    font-size: 15px;
    padding: 10px;
  }
</style>
