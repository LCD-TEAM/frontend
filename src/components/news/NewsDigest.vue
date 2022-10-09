<template>
    <div class="news-digest">
        <div class="news-digest__content">
            <ul class="news-digest__list">
                <li class="news-digest__item" v-for="article in 3" :key="article.title">
                    <news-card :article="article" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, computed, onMounted } from 'vue';
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

        // onMounted(async () => {
        //     const response = await axios.get(`${process.env.VUE_APP_BACKEND_IP}:${process.env.VUE_APP_BACKEND_PORT}/news/role=${chosenRole.value}`);
        //     const news = response.data;

        //     console.log(news);
        // });
    },
});
</script>

<style lang="scss" scoped>
.news-digest {
    &__list {
        @apply grid list-none p-0;
        grid-template-columns: 625px 463px;
        grid-template-rows: repeat(2, 172px);
        grid-auto-flow: column-reverse;
        list-style: none;
        gap: 20px
    }

    &__item {
        @apply p-0 m-0;
    }

    &__item:first-of-type {
        grid-row: 1 / 2;
    }
}
</style>