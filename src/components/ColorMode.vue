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
import MoonIcon from '../icons/MoonIcon.vue';
import SunIcon from '../icons/SunIcon.vue';
import { ref } from 'vue';
import { mobileBreakpoint } from '../conf.js';

const dm = ref(false);
const ism = window.innerWidth <= mobileBreakpoint;

function toggle() {
    dm.value = !dm.value;
    console.log("Set dark mode to", dm.value);
    localStorage.setItem("darkmode", dm.value.toString());
    //const pt = document.getElementById("pagetop")!;
    const t = document.getElementsByTagName("html")[0];
    if (dm.value) {
        t.classList.add("dark");
    } else {
        t.classList.remove("dark");
    }
    //self.location.reload()
}
</script>