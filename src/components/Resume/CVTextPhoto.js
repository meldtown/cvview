import React from 'react'

const CVTextPhoto = (props) => {
	const { photo } = props

	return <div>
		<img src={photo} alt="user" style={{ marginRight: 20, verticalAlign: 'middle' }}/>
	</div>
}


export default CVTextPhoto
