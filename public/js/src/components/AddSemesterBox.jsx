import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import {addSemesterAction, modifyNewSemesterNameAction, getNewSemesterName, doesSemesterNameExist} from '../redux/modules/semesters';
import {defaultSemesterName} from '../utils/constants';
import InvalidSemesterSnackbar from './InvalidSemesterSnackbar.jsx';
import {
  SEMESTER_NAME_EXISTS_MSG,
  SEMESTER_NAME_NOT_EMPTY_MSG,
} from './InvalidSemesterSnackbar.jsx';

class AddSemesterBox extends React.Component {

  static propTypes = {
    addSemesterAction: React.PropTypes.func,
    doesSemesterNameExist: React.PropTypes.bool,
    modifyNewSemesterNameAction: React.PropTypes.func,
    newSemesterName: React.PropTypes.string,
  }

  constructor (props) {
    super(props);
    this.state = {
      addSemesterDialogOpen: false,
      snackbarOpen: false,
      snackbarMessage: '',
    };
  };

  handleDialogOpen () {
    this.setState({addSemesterDialogOpen: true});
  };

  handleDialogClose () {
    this.setState({
      addSemesterDialogOpen: false,
    });
    this.props.modifyNewSemesterNameAction(defaultSemesterName);
  };

  handleDialogChange (event) {
    this.props.modifyNewSemesterNameAction(event.target.value);
  };

  submitNewSemester () {
    if (this.props.doesSemesterNameExist) {
      this.setState({
        snackbarMessage: SEMESTER_NAME_EXISTS_MSG,
        snackbarOpen: true,
      });
    } else if (!this.props.newSemesterName) {
      this.setState({
        snackbarMessage: SEMESTER_NAME_NOT_EMPTY_MSG,
        snackbarOpen: true,
      });
    } else {
      this.props.addSemesterAction(this.props.newSemesterName);
    }
    this.handleDialogClose();
  }

  handleSnackbarRequestClose () {
    this.setState({snackbarOpen: false});
  }

  render () {
    const addSemesterDialogActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleDialogClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.submitNewSemester.bind(this)}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Add Semester" primary={true} onClick={this.handleDialogOpen.bind(this)} />
        <Dialog
          title="Add Semester"
          actions={addSemesterDialogActions}
          open={this.state.addSemesterDialogOpen}
          onRequestClose={this.handleDialogClose.bind(this)}
        >
          <TextField hintText="Semester Name" onChange={this.handleDialogChange.bind(this)} defaultValue={defaultSemesterName} />
        </Dialog>
        <InvalidSemesterSnackbar
          snackbarOpen={this.state.snackbarOpen}
          snackbarMessage={this.state.snackbarMessage}
          handleSnackbarRequestClose={this.handleSnackbarRequestClose.bind(this)} />
        {/*
        <Snackbar
          open={this.state.snackbarOpen}
          message={this.state.snackbarMessage}
          autoHideDuration={4000}
          onRequestClose={this.handleSnackbarRequestClose.bind(this)}
        />
        */}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    newSemesterName: state.semesters.newSemesterName,
    doesSemesterNameExist: doesSemesterNameExist(state, getNewSemesterName(state)),
  };
};

const actions = {addSemesterAction, modifyNewSemesterNameAction};

export default connect(mapStateToProps, actions)(AddSemesterBox);
