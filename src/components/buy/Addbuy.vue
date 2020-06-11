<template>
  <div class="f">
    <center>添加采购人信息</center>
    <div class="form-horizontal">
      采购人姓名：<input type="text" value="buyer" v-model="buyer"/><br />
      采购金额:<input type="text" value="amout" v-model="amout" style="margin-left:34px;" /><br />
      采购时间:<input style="margin-left:34px;"type="date"  value="buytime" v-model="buytime"/><br />
      采购者手机号<input type="text"  value="phone" v-model="phone"/><br />
      <button class="btn-success" style="margin-left: 50px;" @click="add()">提交</button>
    </div>
  </div>
</template>

<script>
export default{
  data:function(){
    return{
      buyer:"",
      amout:"",
      buytime:"",
      phone:"",
      id:0
    }
  },
  mounted:function(){
    this.getall()
  },
  methods:{
    add:function(){
      var obj=this;
      $.ajax({
        type:"post",
        url:"http://localhost:8082/mycrmproject/buyController/addbuy",
        data:{time:new Date().getTime(),buyer:obj.buyer,amout:obj.amout,phone:obj.phone,buytime:obj.buytime},
        success:function(result){
            if(result.code == "520"){
             alert("添加成功");
             obj.$router.push("/main/buy")
            }else{
               obj.$router.push("/");
            }
        },
        xhrFields: {
          withCredentials: true
        }
      });
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
  }
}
</script>

<style>
 center{
    font-size: 30px;
    font-family: "宋体";}
.f{
  background-color: aliceblue;
  color: #4B0082;
  padding-left: 5px;
  font-size: 20px;

}
</style>
