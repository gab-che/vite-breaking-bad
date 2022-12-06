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
    <div class="row character_list p-3 g-2">
        <div class="col col-lg-3 single_col"
            v-for="(character, index) in store.charachterList" :key="index">
            <SingleCharacter :character="character"></SingleCharacter>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss' as *;
    @use '../styles/partials/variables' as *;
    .character_list{
        color: $secondary_color;
        .single_col{
            height: 300px;
        }
    }
</style>