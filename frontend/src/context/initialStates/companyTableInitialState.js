const companyTableInitialState = {
    // get company table data
    data: [],
    isLoading: false,
    isError: false,
    error: "",
    isSuccess: false,

    // get company profile
    companyProfileData: {},
    companyProfileIsLoading: false,
    companyProfileIsError: false,
    companyProfileError: "",
    companyProfileIsSuccess: false,

    // add company table data
    companyAddedData: {},
    companyAddDataLoading: false,
    companyAddedDataIsError: false,
    companyAddedDataError: "",
    companyAddedDataIsSuccess: false,

    // edit company table data
    companyEditedData: {},
    companyEditDataLoading: false,
    companyEditDataIsError: false,
    companyEditDataError: "",
    companyEditDataIsSuccess: false,

    // delete company table data
    companyDeletedData: {},
    companyDeleteDataLoading: false,
    companyDeleteDataIsError: false,
    companyDeleteDataError: "",
    companyDeleteDataIsSuccess: false,
}

export default companyTableInitialState;