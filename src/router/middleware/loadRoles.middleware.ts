import store from '@/store/index'

export async function loadRolesMiddleware() {
    if (store.state.rolesModule.roles.length === 0) {
        await store.dispatch("rolesModule/fetchRoles");
    }
    if (store.state.rolesModule.chosenRole === null) {
        store.commit("rolesModule/setChosenRole", store.state.rolesModule.roles[0] ?? null);
    }
}
