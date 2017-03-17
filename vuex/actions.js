import * as types from './mutation-types';

export default {
	addNote({commit}) {
		commit(types.ADD_NOTE)
	},
	editNote({commit}, text) {
		commit(types.EDIT_NOTE, text)
	},
	deleteNote({commit}) {
		commit(types.DELETE_NOTE)
	},
	updateActiveNote({commit}, note) {
		commit(types.SET_ACTIVE_NOTE, note)
	},
	toggleFavorite({commit}) {
		commit(types.TOGGLE_FAVORITE)
	}
}
