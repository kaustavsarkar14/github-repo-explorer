import { createSlice } from "@reduxjs/toolkit";

const RepositorySlice = createSlice({
  name: "repository",
  initialState: {
    loading: true,
    repositories: [],
    error: null,
    page: 1,
  },
  reducers: {
    fetchRepositoriesStart: (state, action) => {
      state.loading = true;
    },
    fetchRepositoriesSuccess: (state, action) => {
      state.loading = false;
      state.repositories = [...state.repositories, ...action.payload];
    },
    fetchRepositoriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    increasePage: (state, action) => {
      state.page += 1;
      state.loading = true;
    },
  },
});

export default RepositorySlice.reducer;
export const {
  fetchRepositoriesStart,
  fetchRepositoriesSuccess,
  fetchRepositoriesFailure,
  increasePage,
} = RepositorySlice.actions;
