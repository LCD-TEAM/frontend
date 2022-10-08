<template>
    <AppLayout>
        <router-view />
    </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';

export default defineComponent({
    components: { AppLayout },
    name: 'App',
    setup() {},
});
</script>

<style lang="scss" scoped></style>