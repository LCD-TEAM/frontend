import axios from "axios";
import { GetterTree, MutationTree, ActionTree } from "vuex";
import { Role } from "./serverData.types";


class State {
    roles: string[] = [];
    chosenRole: string | null = null;
}

const getters = <GetterTree<State, any>> {
    getRoles(state) {
        return state.roles;
    },
    getChosenRole(state) {
        return state.chosenRole;
    },
};

const mutations = <MutationTree<State>> {
    setRoles(state, roles: string[]) {
        state.roles = roles;
    },
    setChosenRole(state, role: string | null) {
        state.chosenRole = role;
    },
};

const actions = <ActionTree<State, any>> {
    async fetchRoles({ commit }) {
        try {
            const response = await axios.get(`${process.env.VUE_APP_BACKEND_IP}:${process.env.VUE_APP_BACKEND_PORT}/roles`);
            const roles = response.data;

            commit("setRoles", roles);
        }
        catch(err) {
            console.log(err);
        }
    },
};

const RolesModule = {
    namespaced: true,
    state: new State(),
    mutations: mutations,
    actions: actions
};

export default RolesModule;