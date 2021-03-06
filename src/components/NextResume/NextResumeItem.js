import React from 'react'
import moment from 'moment'
import ResumePhoto from '../Resume/ResumePhoto'
import ExperienceListSmall from '../Resume/ExperienceListSmall'
import scrollTo from '../../util/smoothScroll'
import CityAgeSalaryContainer from '../../containers/CityAgeSalaryContainer'

export const NextResumeItem = ({nextResume, getResumeText}) => {
	if(!Object.keys(nextResume).length) {
		return null
	}

	const {id, photo, personal, position, experiences, updateDate} = nextResume
	const {name, surName, cityId, dateBirth} = personal
	const updatedAgo = moment(updateDate).fromNow()

	const getResume = id => {
		if(id) {
			getResumeText(id)
		}
		scrollTo(document.body, 0, 300)
	}

	return <div className="f-paper fd-p20" style={{marginTop: '10px'}}>
		<h3 className="f-custom-heading f-custom-heading fd-fat-gunso">
			Следующее резюме в списке результатов
		</h3>
		<div className="fd-f-left-middle fd-f-g20">
			<div style={{marginTop: '20px'}}>
				<ResumePhoto photo={photo} position={position} id={id} getResumeText={getResume}/>
			</div>
			<div className="fd-f1">
				<p>
					<a style={{cursor: 'pointer'}}
					   onClick={() => getResume(nextResume.id)}>{nextResume.position.position}</a>
				</p>
				<p>
					<span>{name} {surName}</span>
				</p>
				<CityAgeSalaryContainer cityId={cityId} position={position} dateBirth={dateBirth} />
				<ExperienceListSmall experiences={experiences.slice(0, 2)}/>
				<p>{updatedAgo}</p>
			</div>
		</div>

	</div>




}

