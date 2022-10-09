<template>
    <div class="news-digest">
        <h2 class="news-digest__title">
            {{ chosenRole  }}
        </h2>
        <div class="news-digest__content">
            <ul class="news-digest__list">
                <li class="news-digest__item" v-for="article in newsList" :key="article.title">
                    <news-card :article="article" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import NewsCard from './NewsCard.vue';

export default defineComponent({
  components: { NewsCard },
    name: 'news-digest',
    setup() {
        const store = useStore();

        const chosenRole =  computed(() => {
            return store.state.rolesModule.chosenRole;
        });

        const newsList = ref<any>([]);

        onMounted(async () => {
            const response = await axios.get(`${process.env.VUE_APP_BACKEND_IP}:${process.env.VUE_APP_BACKEND_PORT}/news/?role=${chosenRole.value}`);
            const news = response.data;

            newsList.value = news;
        });

        return { newsList, chosenRole };
    },
});
</script>

<style lang="scss" scoped>
.news-digest {
    &__title {
        @apply font-body font-bold m-0 mb-3 text-[22px] leading-[28px] text-vtb-accent-300;
    }

    &__list {
        @apply flex flex-col list-none gap-5 m-0 p-0;
    }

    &__item {
        @apply p-0 m-0;
    }

    &__item:first-of-type {
        grid-row: 1 / 2;
    }
}
</style>