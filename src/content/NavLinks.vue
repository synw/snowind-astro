<template>
    <a class="btn menu-link" :href="lang + '/page1'">Page 1</a>
</template>

<script setup lang="ts">
const lang = location.pathname.split('/')[1];
</script>