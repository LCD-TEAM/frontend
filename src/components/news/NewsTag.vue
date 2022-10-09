<template>
    <router-link 
        class="news-tag"
        :class="{'news-tag_active': isActive}"
    >
        <span class="news-tag">
            <slot />
        </span>
    </router-link>
</template>

<script lang="ts">
import { Tag } from '@/store/serverData.types';
import { computed, defineComponent, PropType } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: "news-tag",
    props: {
        tag: {
            type: String as PropType<Tag>,
            required: true,
        },
    },
    setup(props) {
        const route = useRoute();

        const isActive = computed(() => {
            route.query.tag === props.tag;
        });

        return { isActive };
    },
});
</script>

<style lang="scss" scoped>
.news-tag {
    @apply font-body font-bold text-sm leading-4 text-vtb-grey-200 hover:text-vtb-accent-400 transition-colors duration-200;

    &_active {
        @apply text-vtb-accent-600 hover:text-vtb-accent-600;
    }

    & span {
        @apply block px-4 py-[10px];
    }
}
</style>