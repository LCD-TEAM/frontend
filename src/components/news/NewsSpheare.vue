<template>
    <div class="news-spheare">
        <input type="radio" name="spheare" @change="changeSpheare" v-bind:checked="isActive" />
        <label class="news-spheare">
            {{ spheare }}
        </label>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

export default defineComponent({
    name: 'NewsSpheare',
    props: {
        spheare: {
            type: String,
            required: true,
        }
    },
    setup(props) {
        const route = useRoute();
        const router = useRouter();

        function changeSpheare(evt: any) {
            const spheares = route.query.spheares;
            if (evt.target.checked) {
                router.replace({name: "news", query: { spheares: props.spheare, role: route.query.role }});
            }
        };

        const isActive = computed(() => {
            route.query.spheare === props.spheare;
        });

        return {
            changeSpheare,
            isActive,
        }
    },
});
</script>

<style lang="scss" scoped>

</style>