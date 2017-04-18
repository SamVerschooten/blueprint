import {createReducerTree} from "create-reducer-tree";
import {applicationReducer} from "./reducers/containers/applicationReducer";
import {
    CONTAINER_APPLICATION_DISABLE_BUSY_FLAG,
    CONTAINER_APPLICATION_ENABLE_BUSY_FLAG

} from "./actionTypes";

let reducerComposer: any = {
    containers: {
        application: {
            initialState: {isBusy: false },
            actions: [
                CONTAINER_APPLICATION_ENABLE_BUSY_FLAG,
                CONTAINER_APPLICATION_DISABLE_BUSY_FLAG
            ],
            reducer: applicationReducer
        }
    }
};

export let store = createReducerTree(reducerComposer);