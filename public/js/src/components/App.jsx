import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'underscore';

import SemestersList from './SemestersList.jsx';
import AddSemesterBox from './AddSemesterBox.jsx';
import SummaryBox from './SummaryBox.jsx';
import {
  modifyOverallGPAAction,
  modifyTechnicalGPAAction,
  modifyCSGPAAction,
} from '../redux/modules/statistics';
import {
  calculateOverallGPA,
  calculateTechnicalGPA,
  calculateCSGPA,
} from '../utils/calculateGPA';

export class App extends React.Component {

  static propTypes = {
    semesters: React.PropTypes.object,
    modifyOverallGPAAction: React.PropTypes.func,
    modifyTechnicalGPAAction: React.PropTypes.func,
    modifyCSGPAAction: React.PropTypes.func,
  }

  displayGPASummary () {
    const allCourses = _.reduce(_.values(this.props.semesters), (courses1, courses2) => {
      return courses1.concat(courses2);
    });
    this.props.modifyOverallGPAAction(calculateOverallGPA(allCourses));
    this.props.modifyTechnicalGPAAction(calculateTechnicalGPA(allCourses));
    this.props.modifyCSGPAAction(calculateCSGPA(allCourses));
  }

  render () {
    return (
      <div>
        <img src='/public/img/logo.png' />
        <SemestersList /><br />
        <AddSemesterBox /><br />
        <RaisedButton label="Calculate GPA" backgroundColor='#a4c639' labelColor='white' onClick={this.displayGPASummary.bind(this)} />
        <SummaryBox />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    semesters: state.semesters.semesters,
  };
};

const actions = {modifyOverallGPAAction, modifyTechnicalGPAAction, modifyCSGPAAction};

export default connect(mapStateToProps, actions)(App);

