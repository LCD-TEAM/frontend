<template>
    <div class="news-spheares-filter">
        <h2 class="news-spheares-filter__title">
            Сфера деятельности
        </h2>
        <div class="news-spheares-filter__content">
            <ul class="">
                <news-spheare v-for="spheare in spheares" :spheare="spheare" :key="spheare">
                    {{ spheare }}
                </news-spheare>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
import NewsSpheare from './NewsSpheare.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { NewsSpheare },
    name: "news-spheares-filter",
    setup() {
        const spheares = ref<any>([]);
        const store = useStore();
        const role = computed(() => {
            return store.state.rolesModule.chosenRole;
        });
        const router = useRouter();
        

        async function fetchSpheares() {
            const response = await axios.get(`${process.env.VUE_APP_BACKEND_IP}:${process.env.VUE_APP_BACKEND_PORT}/spheres/?role=${role.value}`);
            const fetchedSpheares = response.data;
            spheares.value = fetchedSpheares;
        }

        onMounted(async () => {
            await fetchSpheares();
        });
        watch(() => role.value, async () => {
            router.push({name: 'news'});
            await fetchSpheares();
        });


        return { spheares };
    },
})
</script>

<style lang="scss">

</style>