

<template>
    <div class="flex flex-col min-h-screen">
    
<Header></Header>
<main class="flex-grow">
<router-view/>
</main>
<div>
<Footer></Footer>
</div>
</div>
</template>


<script setup>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>



</style>
