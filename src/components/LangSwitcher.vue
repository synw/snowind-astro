<template>
    <div class="relative">
        <button class="btn text-2xl focus:outline-none" @click="toggleModal" aria-label="Select language">
            {{ languages[lang].flag }}
        </button>

        <!-- Modal Overlay -->
        <div v-show="isModalOpen === true" class="fixed top-[28rem] inset-0 flex items-center justify-center z-50 p-4"
            @click="closeModal">
            <!-- Modal Content -->
            <div class="bg-white dark:bg-gray-800  max-h-svh overflow-auto rounded-xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-in-out"
                @click.stop>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">Select Language</h3>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <button v-for="(langData, code) in languages" :key="code"
                            class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                            :class="{ 'bg-blue-100 dark:bg-blue-900': code === lang }" @click="selectLanguage(code)">
                            <span class="text-3xl mb-1">{{ langData.flag }}</span>
                            <span class="text-sm font-medium text-gray-700 dark:text-gray-200">{{ langData.name
                                }}</span>
                        </button>
                    </div>
                </div>
                <div class="px-6 py-4 bg-gray-50 dark:bg-gray-700 rounded-b-xl">
                    <button
                        class="w-full py-2 px-4 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
                        @click="closeModal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { languages } from '../conf';
import { langStore } from '../state';
import { ref } from 'vue';

const props = defineProps({
    urllang: {
        type: String,
        required: true
    }
})

let lang = props.urllang;

const isModalOpen = ref(false);

const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value;
};

const closeModal = () => {
    isModalOpen.value = false;
};

const selectLanguage = (code: string) => {
    localStorage.setItem("lang", code);
    langStore.set(code);
    isModalOpen.value = false;
    self.location.href = self.location.href.replace(lang, code);
};
</script>