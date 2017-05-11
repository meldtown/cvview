import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
	getTemplatesList, selectRefuseTemplate, closeRefuseDialog,
	openRefuseDialog, checkRefuseTemplateToSave
} from '../actions/refuseActions'
import RefuseJobsearcherDialog from '../components/Refuse/RefuseJobsearcherDialog'


class RefuseJobsearcherContainer extends React.Component {
	componentWillMount() {
		this.props.getTemplatesListAction(3496188)
		this.props.selectRefuseTemplateAction({
			id: 2,
			resumeId: 3496188,
			text: "Привіт, Андрій Геннадійович Сергієнко!Дякуємо за відгук на вакансію Менеджер з продажу. На жаль, на даний момент ми не готові зробити вам пропозицію. Дякуємо за інтерес до нашої компанії.",
			createDate: "2017-05-03T02:03:48.51",
			lng: "ua"
		})
	}

	checkRefuseTemplate(isChecked) {
		this.props.checkRefuseTemplateToSaveAction(isChecked)
	}

	render() {
		return <div>
			<h1>Refuse container</h1>
			<RefuseJobsearcherDialog
				resume={this.props.resume}
				getTemplates={this.props.getTemplatesListAction}
				templates={this.props.refuseTemplates}
				selectRefuseTemplate={this.props.selectRefuseTemplateAction}
				selectedRefuseTemplate={this.props.selectedRefuseTemplate}
				closeRefuseDialog={this.props.closeRefuseDialogAction}
				openRefuseDialog={this.props.openRefuseDialogAction}
				isRefuseTemplateToSaveChecked={this.props.isRefuseTemplateToSaveChecked}
				checkRefuseTemplate={this.checkRefuseTemplate.bind(this)}
			/>
		</div>
	}
}


const mapStateToProps = state => ({
	resume: state.resume,
	refuseTemplates: state.refuseTemplates,
	selectedRefuseTemplate: state.selectedRefuseTemplate,
	isRefuseTemplateToSaveChecked: state.isRefuseTemplateToSaveChecked
})

const mapDispatchToProps = dispatch => ({
	getTemplatesListAction: bindActionCreators(getTemplatesList, dispatch),
	selectRefuseTemplateAction: bindActionCreators(selectRefuseTemplate, dispatch),
	closeRefuseDialogAction: bindActionCreators(closeRefuseDialog, dispatch),
	openRefuseDialogAction: bindActionCreators(openRefuseDialog, dispatch),
	checkRefuseTemplateToSaveAction: bindActionCreators(checkRefuseTemplateToSave, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RefuseJobsearcherContainer)
