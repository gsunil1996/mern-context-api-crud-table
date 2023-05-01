const employeeTableInitialState = {
    // get employee table data
    data: [],
    isLoading: false,
    isError: false,
    error: "",
    isSuccess: false,

    // get employee profile
    employeeProfileData: {},
    employeeProfileIsLoading: false,
    employeeProfileIsError: false,
    employeeProfileError: "",
    employeeProfileIsSuccess: false,

    // add employee table data
    employeeAddedData: {},
    employeeAddDataLoading: false,
    employeeAddedDataIsError: false,
    employeeAddedDataError: "",
    employeeAddedDataIsSuccess: false,

    // edit employee table data
    employeeEditedData: {},
    employeeEditDataLoading: false,
    employeeEditDataIsError: false,
    employeeEditDataError: "",
    employeeEditDataIsSuccess: false,

    // delete employee table data
    employeeDeletedData: {},
    employeeDeleteDataLoading: false,
    employeeDeleteDataIsError: false,
    employeeDeleteDataError: "",
    employeeDeleteDataIsSuccess: false,
}

export default employeeTableInitialState;