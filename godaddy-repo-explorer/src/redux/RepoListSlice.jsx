import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  repoList: [],
};

const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    setRepo: (state, action) => {
      state.repoList = action.payload;
    },
  },
});

export const { setRepo } = repoSlice.actions;
export default repoSlice.reducer;
