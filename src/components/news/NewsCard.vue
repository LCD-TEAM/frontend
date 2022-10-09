<template>
    <div class="news-card">
        <h2 class="news-card__title">
            Когда увольнение по соглашению сторон могут признать незаконным
        </h2>
        <span class="news-card__tag">
            Трудовые споры
        </span>
        <p class="news-card__content">
            Выступая в суде против заявленных исковых требований, представитель работодателя ссылался на то, что увольнение по соглашению сторон нельзя оспаривать и обжаловать в судебном порядке. Основанием...
        </p>
        <span class="news-card__date">
            08/10/22 10:30
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "NewsCard",
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
        @apply m-0 font-body font-medium text-base tracking-[0.5px] text-vtb-grey-100 overflow-hidden overflow-ellipsis max-h-[124px];
    }

    &__date {
        @apply block font-body m-0 mt-[72px] self-end font-medium text-xs tracking-[0.4px] text-vtb-grey-100;
    }
}
</style>