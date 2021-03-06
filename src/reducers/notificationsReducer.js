const notificationsReducer = (state = [], {type, message, id}) => {
	switch (type) {
		case 'NOTIFY_SUCCESS':
			return [...state, {message, id, type: 'success'}]
		case 'NOTIFY_ERROR':
			return [...state, {message, id, type: 'error'}]
		case 'NOTIFY_CLOSE':
			return state.filter(n => n.id !== id)
		default:
			return state
	}
}

export default notificationsReducer
