import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'filters',
    initialState: '',
    reducers: {
        changeFilter: (state, action) => {
            return action.payload;
        }
    }
})

export const selectNameFilter = (state) => state.filters; // Функция-селектор

export const { changeFilter } = slice.actions;
export default slice.reducer;