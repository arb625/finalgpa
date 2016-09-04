import {
	ADD_SEMESTER,
	REMOVE_SEMESTER,
	MODIFY_SEMESTER_NAME,
	ADD_COURSE,
	REMOVE_COURSE,
	MODIFY_COURSE_NAME,
	MODIFY_COURSE_UNITS,
	MODIFY_COURSE_GRADE,
	MODIFY_COURSE_ISTECHNICAL,
	MODIFY_COURSE_ISCS,
	MODIFY_NEW_SEMESTER_NAME,
  addSemesterAction,
  remvoeSemesterAction
  modifySemesterNameAction,
  addCourseAction,
  removeCourseAction,
  modifyCourseNameAction,
  modifyCourseUnitsAction,
  modifyCourseGradeAction,
  modifyCourseIsTechnicalAction,
  modifyCourseIsCSAction,
  modifyNewSemesterNameAction,
  default as semestersReducer,
} from '../../../src/redux/modules/semesters';

describe('(Redux Module) semesters', function () {
  it('Should export a constant ADD_SEMESTER.', function () {
    expect(ADD_SEMESTER).to.equal('GPACalculatorReact/semesters/ADD_SEMESTER');
  })

  it('Should export a constant REMOVE_SEMESTER.', function () {
    expect(REMOVE_SEMESTER).to.equal('GPACalculatorReact/semesters/REMOVE_SEMESTER');
  })

  it('Should export a constant MODIFY_SEMESTER_NAME.', function () {
    expect(MODIFY_SEMESTER_NAME).to.equal('GPACalculatorReact/semesters/MODIFY_SEMESTER_NAME');
  })

  it('Should export a constant ADD_COURSE.', function () {
    expect(ADD_COURSE).to.equal('GPACalculatorReact/semesters/ADD_COURSE');
  })

  it('Should export a constant REMOVE_COURSE.', function () {
    expect(REMOVE_COURSE).to.equal('GPACalculatorReact/semesters/REMOVE_COURSE');
  })

  it('Should export a constant MODIFY_COURSE_NAME.', function () {
    expect(MODIFY_COURSE_NAME).to.equal('GPACalculatorReact/semesters/MODIFY_COURSE_NAME');
  })

  it('Should export a constant MODIFY_COURSE_UNITS.', function () {
    expect(MODIFY_COURSE_UNITS).to.equal('GPACalculatorReact/semesters/MODIFY_COURSE_UNITS');
  })

  it('Should export a constant MODIFY_COURSE_GRADE.', function () {
    expect(MODIFY_COURSE_GRADE).to.equal('GPACalculatorReact/semesters/MODIFY_COURSE_GRADE');
  })

  it('Should export a constant MODIFY_COURSE_ISTECHNICAL.', function () {
    expect(MODIFY_COURSE_ISTECHNICAL).to.equal('GPACalculatorReact/semesters/MODIFY_COURSE_ISTECHNICAL');
  })

  it('Should export a constant MODIFY_COURSE_ISCS.', function () {
    expect(MODIFY_COURSE_ISCS).to.equal('GPACalculatorReact/semesters/MODIFY_COURSE_ISCS');
  })

  it('Should export a constant MODIFY_NEW_SEMESTER_NAME.', function () {
    expect(MODIFY_NEW_SEMESTER_NAME).to.equal('GPACalculatorReact/semesters/MODIFY_NEW_SEMESTER_NAME');
  })

  describe('(Reducer)', function () {
    it('Should be a function.', function () {
      expect(semestersReducer).to.be.a('function')
    })

    it('Should initialize with a state of a specific object.', function () {
      expect(semestersReducer(undefined, {})).to.deep.equal({
        newSemesterName: defaultSemesterName,
        semesters: {},
      });
    })

    it('Should return the previous state if an action was not matched.', function () {
      let state = semestersReducer(undefined, {})
      expect(state).to.deep.equal({
        newSemesterName: defaultSemesterName,
        semesters: {},
      });
      state = detectionsMessageReducer(state, {type: '@@@@@@@'})
      expect(state).to.deep.equal({
        newSemesterName: defaultSemesterName,
        semesters: {},
      });
    })
  })

  describe('(Action Creator) newDetections', function () {
    it('Should be exported as a function.', function () {
      expect(newDetections).to.be.a('function')
    })

    it('Should return an action with type NEW_DETECTIONS.', function () {
      expect(newDetections()).to.have.property('type', NEW_DETECTIONS)
    })

    it('Should assign the first argument to the payload property.', function () {
      expect(newDetections(5)).to.have.property('payload', 5)
    })
  })

  
})