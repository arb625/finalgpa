import _ from 'underscore';

import { gradesToPoints } from './constants';

export function calculateOverallGPA (allCourses) {
  const courses = removePNPCourses(allCourses);
  return calculateGPA(courses);
};

export function calculateTechnicalGPA (allCourses) {
  const courses = removePNPCourses(allCourses);
  const technicalCourses = _.filter(courses, (course) => course['isTechnical']);
  return calculateGPA(technicalCourses);
}

export function calculateCSGPA (allCourses) {
  const courses = removePNPCourses(allCourses);
  const CSCourses = _.filter(courses, (course) => course['isCS']);
  return calculateGPA(CSCourses);
}

function removePNPCourses (allCourses) {
  return _.filter(allCourses, (course) => !(_.contains(['P', 'NP'], course['grade'])));
}

function calculateGPA (courses) {
  const totalUnits = sum(_.map(courses, (course) => course['units']));
  const totalPoints = sum(_.map(courses, (course) => {
    return gradesToPoints[course['grade']]*course['units'];
  }));
  if (totalUnits === 0) return 0;
  return totalPoints/totalUnits;
}

function sum (arr) {
  return _.reduce(arr, (memo, num) => {
    return memo + num;
  }, 0);
};
