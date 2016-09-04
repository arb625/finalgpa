export default class Course {
  constructor (semesterName, courseId, name, units, grade, isTechnical, isCS) {
    this.semesterName = semesterName;
    this.courseId = courseId;
    this.name = name;
    this.units = units;
    this.grade = grade;
    this.isTechnical = isTechnical;
    this.isCS = isCS;
  }

  getSemesterName () {
    return this.semesterName;
  }

  getId () {
    return this.courseId;
  }

  getName () {
    return this.name;
  }

  getUnits () {
    return this.units;
  }

  getGrade () {
    return this.grade;
  }

  getIsTechnical () {
    return this.isTechnical;
  }

  getIsCS () {
    return this.isCS;
  }

  setName (name) {
    this.name = name;
  }

  setUnits (units) {
    this.units = units;
  }

  setGrade (grade) {
    this.grade = grade;
  }

  setIsTechnical (isTechnical) {
    this.isTechnical = isTechnical;
  }

  setIsCS (isCS) {
    this.isCS = isCS;
  }
}
