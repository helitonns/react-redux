import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contador from "./contador";
import modal from "./modal";
import logger from "./middleware/logger";

const reducer = combineReducers({contador, modal});

// getDefaultMiddleware() esta deprecated, então uma nova forma de passar middleare se vê abaixo
const store = configureStore({reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)});

export default store;