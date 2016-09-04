import React from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import shortid from 'shortid';

import CourseRow from './CourseRow.jsx';
import Course from '../utils/Course';
import InvalidSemesterSnackbar from './InvalidSemesterSnackbar.jsx';
import {
  SEMESTER_NAME_NOT_DIFFERENT,
  SEMESTER_NAME_NOT_EMPTY_MSG,
} from './InvalidSemesterSnackbar.jsx';
import {defaultCourseName, defaultUnits, defaultGrade} from '../utils/constants';
import { removeSemesterAction, modifyNewSemesterNameAction, addCourseAction, modifySemesterNameAction, getNewSemesterName, doesSemesterNameExist } from '../redux/modules/semesters';

class Semester extends React.Component {

  static propTypes = {
    name: React.PropTypes.string,
    courses: React.PropTypes.array,
    // modifyNewSemesterNameAction: React.PropTypes.func,
    // newSemesterName: React.PropTypes.string,
    modifySemesterNameAction: React.PropTypes.func,
    // doesSemesterNameExist: React.PropTypes.bool,
  }

  constructor (props) {
    super(props);
    this.state = {
      // editingName: this.props.name,
      mouseOnRemoveSemester: false,
      // inEditMode: false,
      // snackbarOpen: false,
      // snackbarMessage: '',
    };
  }

  // submitNewSemester () {
  //   if (this.props.doesSemesterNameExist) {
  //     this.setState({
  //       snackbarMessage: SEMESTER_NAME_NOT_DIFFERENT,
  //       snackbarOpen: true,
  //     });
  //   } else if (!this.props.newSemesterName) {
  //     this.setState({
  //       snackbarMessage: SEMESTER_NAME_NOT_EMPTY_MSG,
  //       snackbarOpen: true,
  //     });
  //   } else {
  //     this.props.addSemesterAction(this.props.newSemesterName);
  //   }
  //   this.handleDialogClose();
  // }

  // handleSnackbarRequestClose () {
  //   this.setState({snackbarOpen: false});
  // }

  render () {
    const courses = this.props.courses.map((course, index) => {
      return (<CourseRow course={course} key={index} />);
    });

    // const editImg = this.state.inEditMode ? <div /> : (
    //   <img src={'../../../img/edit_black_36x36.png'}
    //     style={{ cursor: 'pointer' }}
    //     onClick={() => this.setState({inEditMode: true})} />
    // );
    // const saveEditImg = !this.state.inEditMode ? <div /> : (
    //   <img src={'../../../img/check_black_36x36.png'}
    //     style={{ cursor: 'pointer' }}
    //     onClick={() => {
    //       this.setState({inEditMode: false});
    //       this.submitNewSemester();
    //       this.props.modifySemesterNameAction(this.props.name, this.state.editingName);
    //     }} />
    // );
    // const semesterNameDisplay = this.state.inEditMode ? (
    //   <TextField
    //     id="semesterNameEditTextField"
    //     defaultValue={this.props.name}
    //     onChange={(event) => {
    //       this.setState({editingName: event.target.value});
    //       this.props.modifyNewSemesterNameAction(event.target.value);
    //     }}
    //   />) : this.props.name;

    const removeSemesterImgSrc = this.state.mouseOnRemoveSemester ? '../../../img/delete_forever_red_48x48.png' : '../../../img/delete_forever_black_48x48.png';

    const colWidth = {width: '16.67vw'};

    return (
      <div>
        <Table>
          <TableHeader displaySelectAll={false} >
            <TableRow>
              <TableHeaderColumn colSpan="6" style={{textAlign: 'center'}}>
                {this.props.name}
                {/*
                {editImg}
                {saveEditImg}
                */}
                <img src={removeSemesterImgSrc}
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.props.removeSemesterAction(this.props.name)}
                  onMouseEnter={() => this.setState({mouseOnRemoveSemester: true})}
                  onMouseLeave={() => this.setState({mouseOnRemoveSemester: false})} />
              </TableHeaderColumn>
            </TableRow>
            <TableRow style={{width:'100vw'}}>
              <TableHeaderColumn style={colWidth}>Course Name</TableHeaderColumn>
              <TableHeaderColumn style={colWidth}>Units</TableHeaderColumn>
              <TableHeaderColumn style={colWidth}>Grade</TableHeaderColumn>
              <TableHeaderColumn style={colWidth}>Major/Technical</TableHeaderColumn>
              <TableHeaderColumn style={colWidth}>CS</TableHeaderColumn>
              <TableHeaderColumn style={colWidth}>Remove?</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} >
            {courses}
          </TableBody>
        </Table>
        <RaisedButton label="Add Course" primary={true} onTouchTap={
          () => this.props.addCourseAction(this.props.name,
            // new Course(this.props.name, shortid.generate(), defaultCourseName, defaultUnits, defaultGrade, false, false))
            {
              semesterName: this.props.name,
              id: shortid.generate(),
              name: defaultCourseName,
              units: defaultUnits,
              grade: defaultGrade,
              isTechnical: false,
              isCS: false,
            }
        )} />
        {/*
        <InvalidSemesterSnackbar
          snackbarOpen={this.state.snackbarOpen}
          snackbarMessage={this.state.snackbarMessage}
          handleSnackbarRequestClose={this.handleSnackbarRequestClose.bind(this)} /> 
        */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    doesSemesterNameExist: doesSemesterNameExist(state, getNewSemesterName(state)),
  };
};

const actions = {removeSemesterAction, addCourseAction, modifySemesterNameAction, modifyNewSemesterNameAction};

export default connect(mapStateToProps, actions)(Semester);
