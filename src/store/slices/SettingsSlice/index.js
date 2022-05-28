import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isNavLinkLabelShown: true,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeIsNavLinkLabelShown(state, { payload }) {
      state.isNavLinkLabelShown = payload;
    },
  },
});

const settingsReducer = settingsSlice.reducer;

export default settingsReducer;
export const { changeIsNavLinkLabelShown } = settingsSlice.actions;
