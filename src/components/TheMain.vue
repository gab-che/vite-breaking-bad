<script>
    import CharacterList from './CharacterList.vue';

    export default{
    components: { CharacterList },

    data() {
        return {};
    },
    methods: {},
}
</script>

<template>
    <main>
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