<template>
<div class="ge">
 
 <img :src="require('./../..' + foton)" alt="selectedDog" />
  

<!--

<img :src="require(varianza + foton)" alt="selectedDog" />
 <img :src="require('.' + foton)" alt="selectedDog" />
  <img :src="require('./..' + foton)" alt="selectedDog" />
  
  
  <img :src="require('./../../..' + foton)" alt="selectedDog" />
  <img :src="require('' + foton)" alt="selectedDog" />
  <img :src="require('@@' + foton)" alt="selectedDog" />
  <img :src="require('@' + foton)" alt="selectedDog" />
  <img :src="require('~' + foton)" alt="selectedDog" />
  <img :src="require('@@/..' + foton)" alt="selectedDog" />
  <img :src="require('@/..' + foton)" alt="selectedDog" />
  <img :src="require('~/..' + foton)" alt="selectedDog" />

-->
 


  <br> {{ params }} <br>
 
</div>
</template>




<script>
 
export default {
    async asyncData({$content,params}){  
      //   "./../../../uploads/noimagetipo.jpg"
      let varianza = ".";  
      let foton = "/uploads/noimagetipo.jpg" ;
      //let Esto = require("./../../../uploads/noimagetipo.jpg");
       
        return { varianza,foton, params }
    }


}
</script>

<style>

</style>
