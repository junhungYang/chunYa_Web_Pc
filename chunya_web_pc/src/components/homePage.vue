<template>
    <div class="home-page">
        <!-- <v-header></v-header>
        <div class="scroll-to-cont">进入官网</div>
        <v-nav></v-nav>
        <v-content></v-content> -->
    </div>
</template>
<script>
import header from './homeContent/header'
import nav from './homeContent/nav'
import content from './homeContent/content'
export default {
    components: {
        'v-header': header,
        'v-nav': nav,
        'v-content': content
    }
}
</script>

