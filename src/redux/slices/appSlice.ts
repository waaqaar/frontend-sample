import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'radio',
  initialState: {
    selectedOption: 'Option A',
    discountCode: '',
    notes: [] as string[],
  },
  reducers: {
    setSelectedOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
    setDiscountCode: (state, action: PayloadAction<string>) => {
      state.discountCode = action.payload;
    },
    setNotes: (state, action: PayloadAction<string>) => {
      state.notes.push(action.payload);
    },
  },
});

export const { setSelectedOption, setDiscountCode, setNotes } = appSlice.actions;
export default appSlice.reducer;