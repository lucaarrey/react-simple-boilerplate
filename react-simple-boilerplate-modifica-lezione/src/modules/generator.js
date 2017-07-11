const GENERATE_CASUAL_LETTER = 'GENERATE_CASUAL_LETTER';


export function addTomyString(char){
  return{
    type: GENERATE_CASUAL_LETTER,
    payload: char
  }
}

export const getletter = state => state.generator.generator;


const initialState = {
  'mystring': ''

};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case GENERATE_CASUAL_LETTER:
    return {
      ...state,
      generator: state.generator + action.payload
    };
  default:
    return state;
  }
}

