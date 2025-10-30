<template>
    <div>
        <div class="flex flex-col space-y-3 items-start" v-if="isMobile">
            <NavLinks></NavLinks>
            <ColorMode client:only></ColorMode>
        </div>
        <div class="sm:flex sm:flex-row items-end hidden mr-5 space-x-3 justify-center" v-else>
            <NavLinks></NavLinks>
            <ColorMode client:only></ColorMode>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavLinks from '../content/NavLinks.vue';
import ColorMode from './ColorMode.vue';

defineProps({
    isMobile: {
        type: String
    }
})
</script>