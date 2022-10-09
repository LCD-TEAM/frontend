<template>
    <div class="role-choser">
        <h1 class="role-choser__title">
            Выберите роль
        </h1>
        <div class="role-choser__button-list">
            <RoleButton 
                class="role-choser__button"
                v-for="role in roles"
                :key="role" :role="role"
            >
                {{ role }}
            </RoleButton>
        </div>
    </div>
</template>

<script lang="ts">
import { Role } from '@/store/serverData.types';
import { defineComponent, PropType } from 'vue';
import RoleButton from './RoleButton.vue';

export default defineComponent({
    components: { RoleButton },
    name: "RoleChoser",
    props: {
        roles: {
            type: Array as PropType<Role[]>,
            required: true,
            default: [],
        }
    },
    setup() {

    },
});
</script>

<style lang="scss" scoped>
.role-choser {
    &__button-list {
        @apply flex justify-between;
    }

    &__title {
        @apply font-body font-bold text-[32px] text-vtb-dark leading-10 m-0 mb-9;
    }

    &__button {
        @apply w-[444px];
    }
}
</style>