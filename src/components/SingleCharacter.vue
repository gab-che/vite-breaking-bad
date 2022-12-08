<script>
    export default{
        props: {
            /**
             *  @property {string} name
                @property {string} height
                @property {string} mass
                @property {string} hair_color 
                @property {string} skin_color 
                @property {string} eye_color 
                @property {string} birth_year 
                @property {string} gender 
                @property {string} homeworld
                @property {Array} films
                @property {Array} species
                @property {Array} vehicles
                @property {Array} starships
                @property {string} created
                @property {string} edited
                @property {string} url
             */
            character: {
                type: Object,
                required: true,
            }
        },

        data(){
            return{

            }
        },

        methods:{

        }
    }
</script>

<template>
    <div class="card char_card">
        <div class="card-body">
            <h5 class="card-title">{{character.name}}</h5>
            <div class="card-text">
                <p>Genere: {{character.gender}}</p>
                <p>Capelli: {{character.hair_color}}</p>
                <p>Occhi: {{character.eye_color}}</p>
            </div>
            <a :href="character.url" class="btn btn-outline-light" target="_blank">More info</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss' as *;
    @use '../styles/partials/variables' as *;
    .card.char_card{
        height: 100%;
        .card-body{
            border: none;
            background-color: $primary_color;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .card-title{
            color: $accent_color_light;
        }

        .card-text{
            color: $accent_color_dark;
        }

    }
</style>