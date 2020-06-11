<template>
 <div >
   <center >添加采购信息</center>
     <form enctype="multipart/form-data" action="http://www.baidu.com" id="myform">

        商品描述：<input type="text" name="productdes" /><br/>
        商品价格：<input type="text" name="productprice" /><br/>
        商品尺寸：<input type="radio" name="productsize"value="S" /><label>S</label>
                <input type="radio" name="productsize"value="M"/><label>M</label>
                <input type="radio" name="productsize"value="L"/><label>L</label>
                <input type="radio" name="productsize"value="XL"/><label>XL</label>
                <input type="radio" name="productsize"value="XXL"/><label>XXL</label><br/>
       <input type="file" name="productimg"/><br />
       <input type="submit" style="background-color:#5BC0DE;align-content: center;margin-left: 100px;" @click="abc"/>
        <input type="reset" style="background-color: orange;margin-left: 130px" />
     </form>
   </div>
 </template>

 <script>
   export default{
     methods:{
       abc:function(event){
         var obj=this;
         event.preventDefault();
         var formData = new FormData($("#myform")[0]);
         $.ajax({
         					type:"post",
         					url:"http://localhost:8082/mycrmproject/productController/addproduct",
         					data:formData,
         					success:function(result){
         					  alert(result);
                    obj.$router.push("/main/product")
         					},
         					xhrFields: {
         					  withCredentials: true
         					},
         					 /**
         					 *必须false才会自动加上正确的Content-Type
         					 */
         					 "contentType": false,
         					 /**
         					 * 必须false才会避开jQuery对 formdata 的默认处理
         					 * XMLHttpRequest会对 formdata 进行正确的处理
         					 */
         					 "processData": false,
         				  });


       }


     }


   }

</script>

<style scoped="scoped">
  div{
    background-color:#D9EDF9;
    font-size: 20px;

  }
  form{
     margin-left: 50px;
  }
  
</style>
