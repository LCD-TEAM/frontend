<template>
    <div class="news-card">
        <h2 class="news-card__title">
            {{ article.title }}
        </h2>
        <span class="news-card__tag">
            {{ article.tags }}
        </span>
        <p class="news-card__content">
            {{ article.content }}
        </p>
        <span class="news-card__date">
            {{ article.date }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "NewsCard",
    props: {
        article: {
            type: Object,
            required: true,
        }
    },
    setup() {
        
    },
});
</script>

<style lang="scss" scoped>
.news-card {
    @apply bg-white p-4 rounded-xl shadow-sm flex flex-col;

    &__title {
        @apply m-0 mb-1 font-body font-bold text-[32px] leading-[40px] text-vtb-dark;
    }

    &__tag {
        @apply block m-0 mb-3 font-body font-medium text-sm leading-[16px] text-vtb-accent-900;
    }

    &__content {
        @apply m-0 font-body font-medium text-base tracking-[0.5px] text-vtb-grey-100 overflow-hidden overflow-ellipsis;
    }

    &__date {
        @apply block font-body m-0 mt-[72px] self-end font-medium text-xs tracking-[0.4px] text-vtb-grey-100;
    }
}
</style>