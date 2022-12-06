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
    <ul class="list-unstyled character_list">
        <li v-for="character in store.charachterList">
            {{character.name}}
        </li>
    </ul>
    <SingleCharacter></SingleCharacter>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss' as *;
    @use '../styles/partials/variables' as *;
    .character_list{
        color: $secondary_color;
    }
</style>