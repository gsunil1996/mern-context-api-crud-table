import React, { useContext, useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import NotificationDialog from '../notifications/NotificationDialog';
import CircularProgress from '@mui/material/CircularProgress';
import { GlobalContext } from '../../context/store';
import { deleteEmployee, deleteEmployeeReset } from '../../context/actions/employeeActions/deleteEmployee';
import { getEmployeeTable } from '../../context/actions/employeeActions/getEmployeeTable';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteEmployee = (props) => {

    const { deleteEmployeeOpen, setDeleteEmployeeOpen, tableRowId, page, setCurrentPage } = props;

    const { employeeTableState, employeeTableDispatch } = useContext(GlobalContext);

    const { employeeDeletedData, employeeDeleteDataLoading, employeeDeleteDataIsError, employeeDeleteDataError, employeeDeleteDataIsSuccess } = employeeTableState;

    // console.log("employeeDeletedData", employeeDeletedData)

    const [successMessage, setSuccessMessage] = useState("")
    const [failureMessage, setFailureMessage] = useState("")
    const [notificationOpen, setNotificationOpen] = React.useState(false);

    const handleNotificationClickOpen = () => {
        setNotificationOpen(true);
    };

    const handleNotificationClose = () => {
        setNotificationOpen(false);
        setSuccessMessage("")
        setFailureMessage("")
    };

    const handleDeleteEmployeeClose = () => {
        setDeleteEmployeeOpen(false)
    }

    const handleUserDelete = () => {
        deleteEmployee({ id: tableRowId })(employeeTableDispatch)
    }

    useEffect(() => {

        if (employeeDeleteDataIsSuccess) {
            setSuccessMessage("User Deleted Successfully")
            setFailureMessage("")
            handleDeleteEmployeeClose()
            handleNotificationClickOpen()
            deleteEmployeeReset()(employeeTableDispatch)
            sessionStorage.setItem("employeePage", page)
            setCurrentPage(page)
            getEmployeeTable({ search: "", gender: "all", status: "all", sort: "new", page })(employeeTableDispatch)
        } else if (employeeDeleteDataIsError) {
            setSuccessMessage("")
            setFailureMessage("Something Went Wrong")
            handleNotificationClickOpen()
            deleteEmployeeReset()(employeeTableDispatch)
        }

    }, [employeeDeleteDataIsSuccess, employeeDeleteDataIsError])

    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth='sm'
                open={deleteEmployeeOpen}
                onClose={handleDeleteEmployeeClose}
                TransitionComponent={Transition}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <div style={{ textAlign: "center" }} >
                        <h3 style={{ marginTop: "0px" }} >Are you sure to delete this user</h3>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }} >
                        <Button variant="contained" color="primary" onClick={handleDeleteEmployeeClose} >
                            No
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleUserDelete} >
                            {employeeDeleteDataLoading ? (
                                <CircularProgress style={{ color: "#fff" }} />
                            ) : (
                                "Yes"
                            )}
                        </Button>
                    </div>

                </DialogContent>

            </Dialog>

            <NotificationDialog notificationOpen={notificationOpen} handleNotificationClose={handleNotificationClose} successMessage={successMessage} failureMessage={failureMessage} />
        </div>
    )
}

export default DeleteEmployee