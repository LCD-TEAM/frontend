<template>
    <div class="home">
        <div class="home__content">
            <RoleChoser class="home__role-choiser" :roles="roles"/>
            <ForwardButton class="home__forward-button"/>
        </div>
    </div>
</template>

<script lang="ts">
import ForwardButton from '@/components/home/ForwardButton.vue';
import RoleChoser from '@/components/home/RoleChoser.vue';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  components: { RoleChoser, ForwardButton },
    name: "Home",
    setup() {
        const store = useStore();

        const roles = store.state.rolesModule.roles;
        
        return { roles };
    },
});
</script>

<style lang="scss" scoped>
.home {
    &__content {
        @apply flex flex-col;
    }

    &__role-choiser {
        @apply mb-[88px];
    }
}
</style>