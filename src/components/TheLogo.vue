<template>
    <a :href="'/' + pagePath">
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
            <div class="ml-3 text-2xl">
                {{ pageTitle }}
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BackIcon from '../icons/BackIcon.vue';
import { mobileBreakpoint, languages } from "../conf";

defineProps({
    pageTitle: {
        type: String
    },
    mobileBack: {
        type: Boolean
    }
});

const isMob = window.innerWidth <= mobileBreakpoint;
const isHome = ref(Object.keys(languages).map(v => "/" + v).includes(window.location.pathname));
const locPath = location.pathname.split('/');
const pagePath = locPath.slice(1, 2)[0];
</script>