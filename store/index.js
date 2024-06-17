export const state = () => ({
    sharedVariable: 'کهربا '
  });
  
  export const mutations = {
    setSharedVariable(state, newValue) {
      state.sharedVariable = newValue;
    }
  };
  
  export const getters = {
    sharedVariable: (state) => state.sharedVariable
  };