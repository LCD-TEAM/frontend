import { createStore } from 'vuex';
import RolesModule from '@/store/roles.module';

export default createStore({
	modules: {
		rolesModule: RolesModule,
	}
});
