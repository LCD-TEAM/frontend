<template>
  
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    name: "the-graph",
    setup() {

        const graph = ref<any>();
        async function getCodes() {
            const response = await axios.get(`${process.env.VUE_APP_BACKEND_IP}:${process.env.VUE_APP_BACKEND_PORT}/valute/codes`);

            return response.data;
        } 

        async function getGraph() {
            const codes = await getCodes();
            console.log(codes);

            const valutes = await Promise.all([codes.forEach(async (code: string) => await fetchValue(code))]);

            return valutes;
        }

        async function fetchValue(code: string) {
            const response = await axios.get(`${process.env.VUE_APP_BACKEND_IP}:${process.env.VUE_APP_BACKEND_PORT}/valute?code=${code}`);

            return response.data;
        }

        onMounted( async () => {
            const graphPoints  = await getGraph();
            console.log(graphPoints);
        });
    },
})
</script>


<style lang="scss" scoped>

</style>