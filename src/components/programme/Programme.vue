<template>
  <div>
    <h1>日程管理</h1>
    <div class="bs-example" data-example-id="hoverable-table">
    <table class="table table-hover">
      <thead>
        <tr >
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th>周六</th>
          <th>周日</th>
        </tr>
        </thead>
        <tbody>
           <tr v-for="p in programme">
             <td>{{p.monday}}</td>
             <td>{{p.tuesday}}</td>
             <td>{{p.wednesday}}</td>
             <td>{{p.thursday}}</td>
             <td>{{p.friday}}</td>
             <td>{{p.saturday}}</td>
             <td>{{p.sunday}}</td>

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
      programme:[]
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
           url:"http://localhost:8082/mycrmproject/programmeController/getprogramme",
           data:{time:new Date().getTime()},
           success:function(result){
            
               obj.programme=result.list;
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
  table{
    background-color: #F0F8FF;
  }
</style>
