const MODIFY_OVERALL_GPA = 'GPACalculatorReact/statistics/MODIFY_OVERALL_GPA';
const MODIFY_TECHNICAL_GPA = 'GPACalculatorReact/statistics/MODIFY_TECHNICAL_GPA';
const MODIFY_CS_GPA = 'GPACalculatorReact/statistics/MODIFY_CS_GPA';

const initialState = {
  overallGPA: 0,
  technicalGPA: 0,
  CSGPA: 0,
};

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case MODIFY_OVERALL_GPA:
      return {...state, overallGPA: action.payload};
    case MODIFY_TECHNICAL_GPA:
      return {...state, technicalGPA: action.payload};
    case MODIFY_CS_GPA:
      return {...state, CSGPA: action.payload};
    default:
      return state;
  }
}

export function modifyOverallGPAAction (newOverallGPA) {
  return {type: MODIFY_OVERALL_GPA, payload: newOverallGPA};
}

export function modifyTechnicalGPAAction (newTechnicalGPA) {
  return {type: MODIFY_TECHNICAL_GPA, payload: newTechnicalGPA};
}

export function modifyCSGPAAction (newCSGPA) {
  return {type: MODIFY_CS_GPA, payload: newCSGPA};
}
