import React from 'react';
import { connect } from 'react-redux';

class SummaryBox extends React.Component {

  static propTypes = {
    overallGPA: React.PropTypes.number,
    technicalGPA: React.PropTypes.number,
    CSGPA: React.PropTypes.number,
  }

  render () {
    return (
      <div>
        <p>Overall GPA: {this.props.overallGPA}</p>
        <p>Major/Technical GPA: {this.props.technicalGPA}</p>
        <p>CS GPA: {this.props.CSGPA}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    overallGPA: state.statistics.overallGPA,
    technicalGPA: state.statistics.technicalGPA,
    CSGPA: state.statistics.CSGPA,
  };
};

export default connect(mapStateToProps)(SummaryBox);
