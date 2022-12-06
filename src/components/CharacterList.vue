<script>
    import SingleCharacter from './SingleCharacter.vue';
    import { store, fetchData } from '../store';

    export default{
    components: { SingleCharacter },

    data() {
        return {
            store,
        };
    },
    methods: {},

    created(){
        fetchData();
    }
}
</script>

<template>
    <SingleCharacter></SingleCharacter>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss' as *;
    @use '../styles/partials/variables' as *;
</style>