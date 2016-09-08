import React from 'react';
import { connect } from 'react-redux';
import {Card, CardText} from 'material-ui/Card';

class SummaryBox extends React.Component {

  static propTypes = {
    overallGPA: React.PropTypes.number,
    technicalGPA: React.PropTypes.number,
    CSGPA: React.PropTypes.number,
  }

  render () {
    return (
      <div>
        <br />
        <Card>
          <CardText>Overall GPA: {this.props.overallGPA}</CardText>
          <CardText>Major/Technical GPA: {this.props.technicalGPA}</CardText>
          <CardText>CS GPA: {this.props.CSGPA}</CardText>
        </Card>
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
