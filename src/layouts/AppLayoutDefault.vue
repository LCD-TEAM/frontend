<template>
    <div class="app-layout-default">
        <TheHeader>
            <div class="app-layout-default__logo-container">
                <router-link class="app-layout-default__logo" :to="{name: 'home'}">
                    <img :src="require('@/assets/logos/App-Logo.png')" />
                </router-link>
            </div>
        </TheHeader>
        <main class="app-layout-default__view">
            <slot />
        </main>
    </div>
</template>

<script lang="ts">
import TheHeader from '@/components/common/TheHeader.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { TheHeader },
    name: 'AppLayoutDefault',
    setup() {
        
    },
});
</script>

<style lang="scss" scoped>
.app-layout-default {
    &__logo-container {
        @apply flex w-full justify-center items-center;
    }

    &__logo {
        @apply w-[178px] h-[60px];

        & img {
            @apply max-w-full;
        }
    }

    &__view {
        @apply px-4 bg-vtb-accent-100;
    }
}
</style>