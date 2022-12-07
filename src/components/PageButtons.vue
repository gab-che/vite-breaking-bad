<script>
    export default{
        props:{
            currentPage:{
                type: Number,
                default: 1,
            }
        },

        data(){
            return{

            }
        },

        methods:{
            prevClick(){
                this.$emit('changePage', this.currentPage -1)
            },

            nextClick(){
                this.$emit('changePage', this.currentPage +1)
            }
        }
    }
</script>

<template>
    <div class="button_container d-flex">
        <button
        @click="prevClick">Prev</button>
        <button
        @click="nextClick">Next</button>
    </div>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss' as *;
    @use '../styles/partials/variables' as *;
</style>