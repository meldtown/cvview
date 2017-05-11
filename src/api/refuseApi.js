import 'whatwg-fetch'

export const getTemplates = resumeId => fetch(`http://localhost:3001/refuseTemplates/?resumeId=${resumeId}`)
	.then(res => res.json())

export const saveInviteTemplate = (id, template) => {
	template = JSON.stringify(template)
	console.log(template)
	return fetch(`http://localhost:3001/refuseTemplates/${id}`,
		{
			method: 'put',
			headers: {
				"Content-Type": "application/json; charset=UTF-8"
			},
			body: template
		})
}