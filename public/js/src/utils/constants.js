import _ from 'underscore';
import determineDefaultSemester from './determineDefaultSemester';

export const defaultSemesterName = determineDefaultSemester();

export const defaultCourseName = 'CS61A';
export const defaultUnits = 4.0;
export const defaultGrade = 'A';

export const grades = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F', 'P', 'NP'];
export const allUnits = _.range(0, 5.5, 0.5); //units can be from 0 to 5

export const gradesToPoints = {
  'A+': 4,
  'A': 4,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2,
  'C-': 1.7,
  'D+': 1.3,
  'D': 1,
  'D-': 0.7,
  'F': 0,
};
