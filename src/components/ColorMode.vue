<template>
    <a class="btn menu-link flex flex-row justify-center space-x-2" v-if="dm" @click="toggle();">
        <SunIcon></SunIcon>
        <div v-if="ism">Light mode</div>
    </a>
    <a class="btn menu-link flex flex-row justify-center space-x-2" v-else @click="toggle()">
        <MoonIcon></MoonIcon>
        <div v-if="ism">Dark mode</div>
    </a>
</template>

<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { isDarkModeStore } from '../state';
import MoonIcon from '../icons/MoonIcon.vue';
import SunIcon from '../icons/SunIcon.vue';
import { isMobileStore, toggleDarkMode } from '../state';

const dm = useStore(isDarkModeStore);
const ism = useStore(isMobileStore);

function toggle() {
    toggleDarkMode();
    document.location.reload()
}
</script>