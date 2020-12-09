<template>
<div>
  <ul v-if="typeof pubs !== 'undefined'">
    <li v-for="pub in pubs" :key="pub.slug">
      
      {{ pub }}
      </li>
  </ul>


  <!--
  <ul v-if="typeof tipos !== 'undefined'">
    <li v-for="tipo in tipos" :key="tipo.slug">
      
      {{ tipo }}
      </li>
  </ul>
  
    <nuxt-content :document="doc" />
    -->
</div>
</template>

<script>
export default {
    async asyncData({$content}){
      
     
       const tipos = await $content('lafmtipos').fetch();
       const pubs = await $content('lafmpubs').fetch();
      
       // const doc = await $content(params.slug).fetch();
        return { tipos ,pubs }
    }


}
</script>

<style>

</style>
