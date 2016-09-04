import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import Semester from './Semester.jsx';

class SemestersList extends React.Component {

  static propTypes = {
    semesters: React.PropTypes.object,
  }

  render () {
    const semesters = _.values(_.mapObject(this.props.semesters, (courses, semesterName) => {
      return (<Semester name={semesterName} courses={courses} key={semesterName} />);
    }));
    return (
      <div>
        {semesters}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    semesters: state.semesters.semesters,
  };
};

export default connect(mapStateToProps)(SemestersList);
