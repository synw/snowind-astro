<template>
    <div class="flex flex-col w-full space-y-3 mb-12">
        <div>
            Edit component {{ component }}
        </div>
        <div>
            <textarea v-model="_data" :rows="rows"
                class="w-full overflow-y-visible focus:ring-0 focus:border-lighter" />
        </div>
        <div class="flex flex-row justify-end space-x-3 w-full">
            <div v-if="nTokens > 0" class="txt-semilight">{{ nTokens }} tokens</div>
            <div class="flex-grow flex justify-end space-x-3">
                <button class="warning btn px-4 py-2 rounded" @click="onRevert()">Revert</button>
                <button class="success btn px-4 py-2 rounded" @click="onSubmit()">Submit</button>
            </div>
        </div>
        <pre>
            <code>
            {{ resp }}
            </code>
        </pre>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useServer } from "@agent-smith/apicli";
import { aiServerApiKey, projectCodePath } from '../conf.local';

const props = defineProps({
    component: {
        type: String,
        required: true
    }
})

const data = "";
const maxlines = 8;
const _data = ref(data);
const resp = ref("");
const componentPath = projectCodePath + "/src/aiwidgets/" + props.component;
const nTokens = ref(0);

const api = useServer({
    apiKey: aiServerApiKey,
    onToken: (t) => {
        resp.value += t;
        ++nTokens.value;
    },
});

async function onSubmit() {
    nTokens.value = 0;
    resp.value = "";
    console.log("Prompt:", _data.value);
    await api.executeCmd("edit-astro-component", [componentPath, _data.value]);
}

async function onRevert() {
    resp.value = "";
    await api.executeCmd("revert-component", [componentPath]);
}

const rows = computed(() => {
    const nlines = _data.value.split("\n").length;
    if (nlines > maxlines) {
        return maxlines
    }
    return nlines
});
</script>