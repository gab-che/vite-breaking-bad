<script>
    import { store, fetchData } from '../store';
    import CharacterList from './CharacterList.vue';
    import SearchBar from './SearchBar.vue';

    export default{
    components: { CharacterList, SearchBar },

    data() {
        return {
            store,
        };
    },
    methods: {
        onSearch(characterName){
            this.store.searchName = characterName;
            fetchData();
            console.log(characterName);
        }
    },
}
</script>

<template>
    <main>
        <SearchBar @search="onSearch"></SearchBar>
        <CharacterList></CharacterList>
    </main>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss' as *;
    @use '../styles/partials/variables' as *;
    main{
        background-color: $accent_color_light;
    }
</style>