<template>
<div>
  <b>{{textito}} uuuu-------</b>
  <ul v-if="typeof historietas !== 'undefined'">
    <li v-for="hist in historietas" :key="hist.slug">
      {{ hist['lafm-storie-titulo']}} - {{ hist['lafm-storie-pv']}}
      </li>
  </ul>
  <nuxt-content :document="doc" />
</div>
</template>

<script>
export default {
    async asyncData({$content,params}){
      let textito = 'como mola', historietas;
      if(params.slug == 'about'){
        textito = 'esto es about'
     
       historietas = await $content('lafmstories')
        .where({ 'lafm-storie-pv': {$eq : 4}})
        .sortBy(
          
            'lafm-storie-pv'
          )
        .fetch();
      }
        const doc = await $content(params.slug).fetch();
        return {doc , textito, historietas}
    }


}
</script>

<style>

</style>
