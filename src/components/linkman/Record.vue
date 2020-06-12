<template>
  <div>
        <h2>联系记录</h2>
        <table class="table table-hover">
          <thead>
            <tr >
              <th>用户id</th>
              <th>姓名</th>
              <th>时间</th>
              <th>状态</th>
              <th>咨询服饰</th>
              <th>手机号</th>

            </tr>
            </thead>
            <tbody>
            <tr v-for="c in click">

              <td>{{c.id}}</td>
              <td>{{c.name}}</td>
              <td>{{c.time}}</td>
              <td>{{c.condition}}</td>
              <td>{{c.say}}</td>
              <td>{{c.phone}}</td>
               <button class="btn-danger" @click="del(c.id)" style="margin-left: 10px;"><i class="glyphicon glyphicon-trash"></i>删除</button>
               <button class="btn-success" style="margin-left: 10px;" @click="tofindcall(c.id)"><i class="fa fa-database" aria-hidden="true"></i>详情</button>

            </tr>


         </tbody>
        </table>


  </div>
</template>

<script>
  
  
  export default{
        data:function(){
          return{
           click:[]
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
              url:"http://localhost:8082/mycrmproject/clickController/getClick",
              data:{time:new Date().getTime()},
              success:function(result){
              obj.click=result.list;
              },
              xhrFields: {
                withCredentials: true
              }
            })
          },
            //根据id删除记录
                del:function(id){
                  var obj = this;
                  if(confirm("你确定删除吗")){
  
                    $.ajax({
                      type:"post",
                      url:"http://localhost:8082/crmvuepeoject/clickController/delete/"+id,
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
  
  tofindcall:function(id){
          this.$router.push({name:"MoreMessage",query:{id:id}});
        }
  
  
  
  
    }
      }
  
  
  
</script>

<style>
</style>
