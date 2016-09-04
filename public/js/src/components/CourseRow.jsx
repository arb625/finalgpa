import React from 'react';
import { connect } from 'react-redux';
import {TableRowColumn, TableRow} from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';
import _ from 'underscore';

import Course from '../utils/Course';
import { grades, allUnits } from '../utils/constants';
import {
  modifyCourseNameAction,
  modifyCourseUnitsAction,
  modifyCourseGradeAction,
  modifyCourseIsTechnicalAction,
  modifyCourseIsCSAction,
  removeCourseAction} from '../redux/modules/semesters';

class CourseRow extends React.Component {

  static propTypes = {
    course: React.PropTypes.object,
    removeCourseAction: React.PropTypes.func,
    modifyCourseNameAction: React.PropTypes.func,
    modifyCourseUnitsAction: React.PropTypes.func,
    modifyCourseGradeAction: React.PropTypes.func,
  }

  constructor (props) {
    super(props);
    this.state = {
      // name: this.props.course.getName(),
      // units: this.props.course.getUnits(),
      // grade: this.props.course.getGrade(),
      mouseOnRemoveCouse: false,
    };
  }

  handleNameChange (event) {
    const newName = event.target.value;
    // this.setState({
    //   name: newName,
    // });
    this.props.modifyCourseNameAction(this.props.course['semesterName'], this.props.course['id'], newName);
  }

  handleUnitsChange (event, value) {
    const newUnits = allUnits[value];
    // this.setState({
    //   units: newUnits,
    // });
    this.props.modifyCourseUnitsAction(this.props.course['semesterName'], this.props.course['id'], newUnits);
  }

  handleGradeChange (event, index, value) {
    const newGrade = grades[value];
    // this.setState({
    //   grade: newGrade,
    // });
    this.props.modifyCourseGradeAction(this.props.course['semesterName'], this.props.course['id'], newGrade);
  }

  render () {
    const unitOptions = allUnits.map((unitOption, index) => {
      return (<MenuItem value={index} primaryText={unitOption} key={index} />);
    });

    const gradeOptions = grades.map((grade, index) => {
      return (<MenuItem value={index} primaryText={grade} key={index} />);
    });

    const removeCourseImg = this.state.mouseOnRemoveCouse ? '../../../img/close_red_36x36.png' : '../../../img/close_black_36x36.png';

    const colWidth = {width: '16.67vw'};

    return (
      <TableRow displayBorder={true} >
        <TableRowColumn>
          <TextField id="courseNameField" style={colWidth} defaultValue={this.props.course['name']} onChange={this.handleNameChange.bind(this)} />
        </TableRowColumn>
        <TableRowColumn>
          <SelectField style={colWidth} value={_.indexOf(allUnits, this.props.course['units'])} onChange={this.handleUnitsChange.bind(this)}>
            {unitOptions}
          </SelectField>
        </TableRowColumn>
        <TableRowColumn>
          <SelectField style={colWidth} value={_.indexOf(grades, this.props.course['grade'])} onChange={this.handleGradeChange.bind(this)}>
            {gradeOptions}
          </SelectField>
        </TableRowColumn>
        <TableRowColumn>
          <Checkbox style={{paddingLeft:'7vw'}} onTouchTap={(event) => {
            this.props.modifyCourseIsTechnicalAction(this.props.course['semesterName'], this.props.course['id']);
          }} checked={this.props.course['isTechnical']} />
        </TableRowColumn>
        <TableRowColumn>
          <Checkbox onTouchTap={(event) => {
            this.props.modifyCourseIsCSAction(this.props.course['semesterName'], this.props.course['id']);
          }} checked={this.props.course['isCS']} />
        </TableRowColumn>
        <TableRowColumn>
          {/*
          <img src={removeCourseImg} style={{ cursor: 'pointer' }} onClick={
            () => this.props.removeCourseAction(this.props.course['semesterName'], this.props.course['id'])
          }
          onMouseEnter={() => this.setState({mouseOnRemoveCouse: true})}
          onMouseLeave={() => this.setState({mouseOnRemoveCouse: false})} />
          */}
          <NavigationCloseIcon style={{ cursor: 'pointer' }} hoverColor="red" onClick={
            () => this.props.removeCourseAction(this.props.course['semesterName'], this.props.course['id'])
          } />
        </TableRowColumn>
      </TableRow>
    );
  }
}

const actions = {modifyCourseNameAction, modifyCourseUnitsAction, modifyCourseGradeAction, modifyCourseIsTechnicalAction, modifyCourseIsCSAction, removeCourseAction};

export default connect(undefined, actions)(CourseRow);
