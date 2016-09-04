export const SEMESTER_NAME_EXISTS_MSG = 'Semester with this name already exists.';
export const SEMESTER_NAME_NOT_DIFFERENT = 'You did not change the semester name.';
export const SEMESTER_NAME_NOT_EMPTY_MSG = 'Semester name cannot be empty.';

import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class InvalidSemesterSnackbar extends React.Component {

  static propTypes = {
    snackbarOpen: React.PropTypes.bool.isRequired,
    snackbarMessage: React.PropTypes.string.isRequired,
    handleSnackbarRequestClose: React.PropTypes.func,
  }

  constructor (props) {
    super(props);
    this.state = {
      snackbarOpen: this.props.snackbarOpen,
      snackbarMessage: this.props.snackbarMessage,
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      snackbarOpen: nextProps.snackbarOpen,
      snackbarMessage: nextProps.snackbarMessage,
    });
  }

  // handleSnackbarRequestClose () {
  //   this.setState({snackbarOpen: false});
  // }

  render () {

    return (
      <Snackbar
        open={this.state.snackbarOpen}
        message={this.state.snackbarMessage}
        autoHideDuration={4000}
        onRequestClose={this.props.handleSnackbarRequestClose}
      />
    );
  }

}