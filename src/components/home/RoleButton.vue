<template>
    <button 
        class="role-button"
        :class="{'role-button_active' : isActive}"
        @click="setChosenRole(role)"
    >
        <slot />
    </button>
</template>

<script lang="ts">
import { Role } from '@/store/serverData.types';
import { computed, defineComponent, PropType } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: "role-button",
    props: {
        role: {
            type: String as PropType<Role>,
            required: true,
        }
    },
    setup(props) {
        const store = useStore();

        const chosenRole = computed(() => {
            return store.state.rolesModule.chosenRole;
        });
        const setChosenRole = (role: string) => store.commit("rolesModule/setChosenRole", role);

        const isActive = computed(() => {
            return props.role === chosenRole.value;
        });

        return { isActive, setChosenRole };
    },
});
</script>

<style lang="scss" scoped>
.role-button {
    @apply font-body font-bold text-[32px] leading-[40px] text-vtb-accent-500 rounded-xl border-4 border-vtb-accent-500 border-solid bg-transparent
            p-0 h-24 px-7 flex flex-col items-center justify-center cursor-pointer;

    &_active {
        @apply text-white border-none cursor-default;
        background: linear-gradient(92.48deg, #316FCC 1.34%, #629CF4 74.85%);
    }
}
</style>