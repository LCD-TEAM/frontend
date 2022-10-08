<template>
    <component :is="route.meta.layoutComponent" >
        <slot />
    </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
    setup() {
        const route = useRoute();
        return { route };
    },
})
</script>

<style lang="scss" scoped></style>
