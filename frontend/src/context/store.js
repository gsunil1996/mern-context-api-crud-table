import { createContext, useReducer } from "react";
import companyTableReducer from "./reducers/CompanyTableReducer";
import companyTableInitialState from "./initialStates/companyTableInitialState";
import employeeTableReducer from "./reducers/employeeTableReducer";
import employeeTableInitialState from "./initialStates/employeeTableInitialState";


// Create Context
export const GlobalContext = createContext();

// Provider Component
export const GlobalProvider = ({ children }) => {

    const [employeeTableState, employeeTableDispatch] = useReducer(employeeTableReducer, employeeTableInitialState)
    const [companyTableState, companyTableDispatch] = useReducer(companyTableReducer, companyTableInitialState)

    const provides = {
        employeeTableState,
        employeeTableDispatch,
        companyTableState,
        companyTableDispatch
    }

    return (
        <GlobalContext.Provider value={provides}>{children}</GlobalContext.Provider>
    );

}