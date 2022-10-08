<template>
    <div class="the-header">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'the-header',
    setup() {},
});
</script>

<style lang="scss" scoped>
.the-header {
    @apply sticky top-0 left-0 right-0 min-h-[64px] pt-4 px-6 pb-3;
}
</style>