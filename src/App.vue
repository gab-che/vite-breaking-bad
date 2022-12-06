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
  <TheSelect></TheSelect>
  <TheMain></TheMain>
</template>

<style lang="scss">
  @use './styles/general.scss';
</style>
