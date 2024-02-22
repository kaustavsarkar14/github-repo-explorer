import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import RepositorySlice from "./RepositorySlice";
import RepositorySaga from "./RepositorySaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    repository: RepositorySlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(RepositorySaga);

export default store;
