<template>
  <div>
    <center>添加手机号</center>
     <label  class="col-sm-2 control-label">客户名字</label><br />
     <input type="text" class="form-control"  placeholder="请输入客户名字" v-model="addphone.name">
     <label  class="col-sm-2 control-label">客户电话</label><br />
     <input type="text" class="form-control"  placeholder="请输入客户电话" v-model="addphone.phone">
      <button class="btn btn-success" @click="add" style="margin-left: 200px;">添加</button>
  </div>
</template>

<script>
export default{
  data:function(){
    return {
      addphone:{name:"",phone:""}
    }
  },
  methods:{
    //添加的方法
    add:function(){
      var obj = this;

        $.ajax({
          type:"post",
          url:"http://localhost:8082/mycrmproject/phoneController/add",
          data:{time:new Date().getTime(),name:obj.addphone.name,phone:obj.addphone.phone},
          success:function(result){
             alert(result);
             obj.$router.push("/main/phone");
          },
          xhrFields: {
            withCredentials: true
          }
        });
    }
  }


}

</script>


<style>
</style>
