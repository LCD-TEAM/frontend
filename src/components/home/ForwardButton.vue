<template>
    <router-link class="forward-button-block" :to="{name: 'news'}">
        <div class="forward-button-block__icon">
            <svg width="88" height="88" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 44C0 19.6995 19.6995 0 44 0C68.3005 0 88 19.6995 88 44C88 68.3005 68.3005 88 44 88C19.6995 88 0 68.3005 0 44ZM46.4444 66.2844C45.5644 66.2844 44.7333 65.9422 44.0978 65.2577C42.9244 63.9377 43.0222 61.9333 44.2933 60.76L58.4106 46.9065H24.4444C22.6894 46.9065 21.2667 45.4838 21.2667 43.7288C21.2667 41.9737 22.6894 40.551 24.4444 40.551H58.3761L44.1956 26.7822C42.8756 25.6088 42.8267 23.6044 44 22.2844C45.1733 21.0133 47.1778 20.9155 48.4978 22.0888L68.3467 41.1865C69.8622 42.5554 69.8622 44.9021 68.3467 46.271L48.5956 65.4533C47.96 66.04 47.2267 66.2844 46.4444 66.2844Z"/>
            </svg>
        </div>
        <p class="forward-button-block__text">
            К новостям
        </p>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "forward-button-block",
    setup() {},
});
</script>

<style lang="scss" scoped>
.forward-button-block {
    @apply flex items-center self-center decoration-transparent text-vtb-accent-500 hover:text-vtb-accent-600 transition-colors duration-200;

    &__icon {
        @apply w-[88px] h-[88px] fill-current mr-3;
    }

    &__text {
        @apply font-body font-bold text-[22px] leading-[28px];
    }
}
</style>