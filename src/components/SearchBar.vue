<script>
    import { store, fetchData } from '../store';

    export default{
        data(){
            return{
                searchInput: {
                    name: ''
                },
            }
        },

        emits: ['search'],

        methods:{
            searchCharacter(){
                this.$emit('search', this.searchInput.name)
            }
        }, 
    }
</script>

<template>
    <label for="search">Cerca personaggi:</label>
    <input type="search" name="search" id="search"
        v-model="searchInput.name"
        @input="searchCharacter">
</template>

<style scoped lang="scss">
    @use '../styles/general.scss' as *;
    @use '../styles/partials/variables' as *;
    label{
        color: $secondary_color;
    }
</style>