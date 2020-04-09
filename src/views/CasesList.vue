<template>
    <v-container>
        <to-do></to-do>

        <notepad></notepad>
    </v-container>
</template>

<script>
import ToDo from '../components/ToDo'
import Notepad from '../components/Notepad'

    export default {
        name:'CasesList',

        components: {ToDo, Notepad}
    }
</script>

<style lang="scss" scoped>

</style>