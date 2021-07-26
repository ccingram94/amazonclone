import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from './reducer'

// Prepare the data layer
export const StateContext = createContext();

// Wrap app and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    const state = useReducer(reducer, initialState);
    return(
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
);

// Pull information from data layer
export const useStateValue = () => useContext(StateContext);