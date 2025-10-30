<template>
    <a href="/">
        <div class="flex flex-row items-center">
            <div v-if="!mobileBack || !isMob">
                <img src="/logo.png" alt="" />
            </div>
            <div v-else>
                <template v-if="isHome">
                    <img src="/logo.png" alt="" />
                </template>
                <template v-else>
                    <a href="javascript:history.go(-1)">
                        <BackIcon style="width: 3em;"></BackIcon>
                    </a>
                </template>
            </div>
            <div class="ml-3 text-xl">
                {{ pageTitle ? pageTitle : siteTitle }}
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { siteTitle } from '../conf';
import BackIcon from '../icons/BackIcon.vue';
import { mobileBreakpoint, langs } from "../conf";

defineProps({
    pageTitle: {
        type: String
    },
    mobileBack: {
        type: Boolean
    }
});

const isMob = window.innerWidth <= mobileBreakpoint;
const isHome = ref(langs.map(v => "/"+v).includes(window.location.pathname));
</script>