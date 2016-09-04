const ADD_SEMESTER = 'GPACalculatorReact/semesters/ADD_SEMESTER';
const REMOVE_SEMESTER = 'GPACalculatorReact/semesters/REMOVE_SEMESTER';
const MODIFY_SEMESTER_NAME = 'GPACalculatorReact/semesters/MODIFY_SEMESTER_NAME';
const ADD_COURSE = 'GPACalculatorReact/semesters/ADD_COURSE';
const REMOVE_COURSE = 'GPACalculatorReact/semesters/REMOVE_COURSE';
const MODIFY_COURSE_NAME = 'GPACalculatorReact/semesters/MODIFY_COURSE_NAME';
const MODIFY_COURSE_UNITS = 'GPACalculatorReact/semesters/MODIFY_COURSE_UNITS';
const MODIFY_COURSE_GRADE = 'GPACalculatorReact/semesters/MODIFY_COURSE_GRADE';
const MODIFY_COURSE_ISTECHNICAL = 'GPACalculatorReact/semesters/MODIFY_COURSE_ISTECHNICAL';
const MODIFY_COURSE_ISCS = 'GPACalculatorReact/semesters/MODIFY_COURSE_ISCS';

const MODIFY_NEW_SEMESTER_NAME = 'GPACalculatorReact/semesters/MODIFY_NEW_SEMESTER_NAME';

import _ from 'underscore';

import {defaultSemesterName} from '../../utils/constants';

const initialState = {newSemesterName: defaultSemesterName, semesters: {}};

export default function reducer (state = initialState, action = {}) {
  if (semestersHandlers[action.type]) {
    return {...state, semesters: cloneObject(semestersHandlers[action.type](state.semesters, action.payload))};
  } else if (action.type === MODIFY_NEW_SEMESTER_NAME) {
    return {...state, newSemesterName: action.payload};
  } else {
    return state;
  }
}

const semestersHandlers = {
  [ADD_SEMESTER]:           addSemester,
  [REMOVE_SEMESTER]:        removeSemester,
  [MODIFY_SEMESTER_NAME]:   modifySemesterName,
  [ADD_COURSE]:             addCourse,
  [REMOVE_COURSE]:          removeCourse,
  [MODIFY_COURSE_NAME]:     modifyCourseName,
  [MODIFY_COURSE_UNITS]:    modifyCourseUnits,
  [MODIFY_COURSE_GRADE]:    modifyCourseGrade,
  [MODIFY_COURSE_ISTECHNICAL]: modifyCourseIsTechnical,
  [MODIFY_COURSE_ISCS]: modifyCourseIsCS,
};

// state modifiers
function addSemester (semesters, semesterName) {
  return {...semesters, [semesterName]: []};
}

function removeSemester (semesters, semesterName) {
  return _.omit(semesters, semesterName);
}

function modifySemesterName (semesters, { oldSemesterName, newSemesterName }) {
  const newSemesters = {};
  _.each(_.keys(semesters), (semesterName) => {
    if (semesterName === oldSemesterName) {
      newSemesters[newSemesterName] = semesters[semesterName];
    } else {
      newSemesters[semesterName] = semesters[semesterName];
    }
  });
  return newSemesters;
}

function addCourse (semesters, {semesterName, course}) {
  return {...semesters, [semesterName]: semesters[semesterName].concat(course)};
}

function removeCourse (semesters, {semesterName, courseId}) {
  const newCourses = [];
  _.each(semesters[semesterName], (course) => {
    if (course['id'] !== courseId) {
      newCourses.push(course);
    }
  });
  const newSemesters = {...semesters, [semesterName]: newCourses};
  return newSemesters;
}

function modifyCourseName (semesters, {semesterName, oldCourseId, newCourseName}) {
  const courses = semesters[semesterName];
  _.each(courses, (course) => {
    if (course['id'] === oldCourseId) {
      course['name'] = newCourseName;
    }
  });
  return {...semesters, [semesterName]: courses};
}

function modifyCourseUnits (semesters, {semesterName, courseId, newUnits}) {
  const courses = semesters[semesterName];
  _.each(courses, (course) => {
    if (course['id'] === courseId) {
      course['units'] = newUnits;
    }
  });
  return {...semesters, [semesterName]: courses};
}

function modifyCourseGrade (semesters, {semesterName, courseId, newGrade}) {
  const courses = semesters[semesterName];
  _.each(courses, (course) => {
    if (course['id'] === courseId) {
      course['grade'] = newGrade;
    }
  });
  return {...semesters, [semesterName]: courses};
}

function modifyCourseIsTechnical (semesters, {semesterName, courseId}) {
  const courses = semesters[semesterName];
  _.each(courses, (course, index) => {
    if (course['id'] === courseId) {
      courses[index] = {...course, isTechnical: !course['isTechnical']};
      // course['isTechnical'] = !course['isTechnical'];
    }
  });
  return {...semesters, [semesterName]: courses};
}

function modifyCourseIsCS (semesters, {semesterName, courseId}) {
  const courses = semesters[semesterName];
  _.each(courses, (course) => {
    if (course['id'] === courseId) {
      course['isCS'] = !course['isCS'];
    }
  });
  return {...semesters, [semesterName]: courses};
}

// action creators
export function addSemesterAction (semesterName) {
  return {type: ADD_SEMESTER, payload: semesterName};
}

export function removeSemesterAction (semesterName) {
  return {type: REMOVE_SEMESTER, payload: semesterName};
}

export function modifySemesterNameAction (oldSemesterName, newSemesterName) {
  return {type: MODIFY_SEMESTER_NAME, payload: { oldSemesterName, newSemesterName }};
}

export function addCourseAction (semesterName, course) {
  return {type: ADD_COURSE, payload: {semesterName, course}};
}

export function removeCourseAction (semesterName, courseId) {
  return {type: REMOVE_COURSE, payload: {semesterName, courseId}};
}

export function modifyCourseNameAction (semesterName, oldCourseId, newCourseName) {
  return {type: MODIFY_COURSE_NAME, payload: {semesterName, oldCourseId, newCourseName}};
}

export function modifyCourseUnitsAction (semesterName, courseId, newUnits) {
  return {type: MODIFY_COURSE_UNITS, payload: {semesterName, courseId, newUnits}};
}

export function modifyCourseGradeAction (semesterName, courseId, newGrade) {
  return {type: MODIFY_COURSE_GRADE, payload: {semesterName, courseId, newGrade}};
}

export function modifyCourseIsTechnicalAction (semesterName, courseId) {
  return {type: MODIFY_COURSE_ISTECHNICAL, payload: {semesterName, courseId}};
}

export function modifyCourseIsCSAction (semesterName, courseId) {
  return {type: MODIFY_COURSE_ISCS, payload: {semesterName, courseId}};
}

export function modifyNewSemesterNameAction (semesterName) {
  return {type: MODIFY_NEW_SEMESTER_NAME, payload: semesterName};
}

// selectors/utils
export function getSemesters (state) {
  return state.semesters.semesters;
}

export function getNewSemesterName (state) {
  return state.semesters.newSemesterName;
}

export function doesSemesterNameExist (state, semesterName) {
  return _.contains(_.keys(getSemesters(state)), semesterName);
}

function cloneObject (object) {
  return JSON.parse(JSON.stringify(object));
}
