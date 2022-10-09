<template>
    <div class="news">
        <div class="news__title-block">
            <h1 class="news__title">
                Все актуальные новости
            </h1>
            <NewsDigest />
        </div>
    </div>
</template>

<script lang="ts">
import NewsCard from '@/components/news/NewsCard.vue';
import NewsDigest from '@/components/news/NewsDigest.vue';
import NewsFilterOverlay from '@/components/news/NewsFilterOverlay.vue';
import NewsSphearesFilter from '@/components/news/NewsSphearesFilter.vue';
import { defineComponent, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
    components: {NewsFilterOverlay, NewsSphearesFilter, NewsCard, NewsDigest  },
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();

        onMounted(() => {
            const chosenRole = store.state.rolesModule.chosenRole;
            const roles = store.state.rolesModule.roles;

            if (!roles.includes(route.query.role)) {
                router.push({name: "news", query: {role: chosenRole}});
                return;
            }
            store.commit("rolesModule/setChosenRole", route.query.role);
        });
    },
})
</script>

<style lang="scss" scoped>
.news {
    &__title {
        @apply font-body font-bold m-0 mb-10 mt-10 text-[32px] leading-[40px] text-vtb-dark;
    }
}
</style>