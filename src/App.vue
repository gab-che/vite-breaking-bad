<script>
  import TheHeader from './components/TheHeader.vue';
  import TheSelect from './components/TheSelect.vue';
  import TheMain from './components/TheMain.vue';

  export default{
    components: { TheHeader, TheSelect, TheMain },

    data(){

    },

    methods: {

    }
  }
</script>

<template>
  <TheHeader></TheHeader>
  <div class="container">
    <div class="row">
      <div class="col-md-8 m-auto">
        <TheSelect></TheSelect>
        <TheMain></TheMain>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @use './styles/general.scss';
  @use './styles/partials/variables' as *;
  
</style>
