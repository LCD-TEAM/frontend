<template>
    <div class="app-layout-onboard">
        <div class="app-layout-onboard__container">
            <a class="app-layout-onboard__vtb-logo" :href="VTBLink" >
                <img :src="require('@/assets/logos/VTB-icon.svg')" alt="Логотип ВТБ">
            </a>
            <router-link class="app-layout-onboard__app-logo" :to="{name: 'home'}">
                <img :src="require('@/assets/logos/App-Logo.png')" alt="Логотип приложения">
            </router-link>
            <main class="app-layout-onboard__view">
                <slot />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "AppLayoutOnboard",
    setup() {
        return {
            VTBLink: process.env.VUE_APP_VTB_LINK,
        }
    },
});
</script>

<style lang="scss" scoped>
.app-layout-onboard {
    &__container {
        @apply px-4 py-6 bg-white max-w-[952px] mx-auto flex flex-col;
    }

    &__vtb-logo {
        @apply h-[36px] w-[100px];

        & img {
            @apply h-full w-full;
        }
    }

    &__app-logo {
        @apply w-[393px] h-[135px] self-center my-[140px];
    }
}
</style>