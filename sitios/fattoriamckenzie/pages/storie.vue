<template>
<div>
  
  <table v-if="typeof historietas !== 'undefined'">
    <thead>
    <tr>
      <th>Titulo</th>
      <th>Pv</th>
      <th>Autores</th>
      <th>Publicaciones</th>
      <th>Imagen</th>
      <th>Todo</th>

    </tr>
    </thead>
    <tr v-for="hist in historietas" :key="hist.slug">
      <!-- {{ hist['lafm-storie-titulo']}} - {{ hist['lafm-storie-pv']}} -->
      <td>{{ hist["lafm-storie-titulo"] }}</td>
      <td>{{ hist["lafm-storie-pv"] }}</td>
      <td>{{ hist["lafm-storie-autores-list"] }}</td>

      <td>{{ hist["susrevistas_array"] }}</td>
      <td>{{ hist["lafm-storie-image"]}}</td>
      <td>{{ hist }}</td>
      
    </tr>
  </table>
  <!--
    <nuxt-content :document="doc" />
    -->
</div>
</template>

<script>
export default {
    async asyncData({$content}){
      
       const srA= "susrevistas_array";
       const tipoide = "tipo_en_array";
       const historietas = await $content('lafmstories')
        .where({ 'lafm-storie-pv': {$eq : 4}})        
        .fetch();

        for(let key in historietas){
          let relacion = 'content' + historietas[key].path + '.md';

          historietas[key]["susrevistas_array"] = await $content('lafmpubs')
          .where({
            "lafm-pub-stories": { '$contains' : relacion }
          })
          .only(['lafm-pub-tipo','lafm-pub-anio','lafm-pub-numero','lafm-pub-titulo'])
          .fetch();

          for(let key2 in  historietas[key][srA]){
            let tipo_en_pub =  historietas[key][srA][key2]["lafm-pub-tipo"].slice(18,-3);
            
            let tipos = await $content('lafmtipos')
            .where({"lafm-tipo-tipo": { '$eq': tipo_en_pub }}).fetch();

            historietas[key][srA][key2][tipoide] = tipos[0][ "lafm-tipo-tipo"]

          }


        }
      
       // const doc = await $content(params.slug).fetch();
        return { historietas}
    }


}
</script>

<style>

</style>
