<template>
    <div class="app-layout-news">
        <TheHeader>
            <router-link class="app-layout-news__logo" :to="{name: 'home'}">
                <img :src="require('@/assets/logos/App-Logo.png')" />
            </router-link>
        </TheHeader>
        <div class="app-layout-news__content">
            <div class="app-layout-news__container">
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import TheHeader from '@/components/common/TheHeader.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { TheHeader },
    name: "AppLayoutNews",
    setup() {
        
    },
});
</script>

<style lang="scss" scoped>
.app-layout-news {
    @apply flex flex-col min-h-screen;
    
    &__logo {
        @apply block max-w-[105px];

        & img {
            @apply w-full h-full;
        }
    }

    &__content {
        @apply bg-vtb-accent-100 flex-1;
    }

    &__container {
        @apply mx-auto max-w-[1110px] px-4 py-3;
    }
}
</style>