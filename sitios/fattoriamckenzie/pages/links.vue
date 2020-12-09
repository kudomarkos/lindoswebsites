<template>
<div class="ge">
  <br> {{ params }} <br>
 
</div>
</template>




<script>
 
export default {
    async asyncData({$content,params}){  
     
       
        return { params }
    }


}
</script>

<style>

</style>
