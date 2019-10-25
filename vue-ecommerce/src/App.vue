<template>
  <div id="app">
    <div id="loading" v-if="loading">
      <img src="/static/img/loading.gif" alt="ganesh">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data()
  {
    return{
      loading:false
    }
    },
    created(){
      this.$eventBus.$on("loadingstatu",payload=>{
        this.loading=payload;
      });
    }
  
}
</script>


