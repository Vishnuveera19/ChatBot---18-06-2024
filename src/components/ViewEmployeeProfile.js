import React, { useState, useEffect } from 'react';
import { Typography, CardContent, FormControl, Grid, InputLabel, Paper, Divider, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getRequest } from '../serverconfiguration/requestcomp';
import { ServerConfig } from '../serverconfiguration/serverconfig';
import { PAYMEMPLOYEE, REPORTS } from '../serverconfiguration/controllers';

export default function ViewEmployeeProfileForm() {
  const navigate = useNavigate();
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const [pnEmployeeId, setPnEmployeeId] = useState("");
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    async function getData() {
      const employeeResponse = await getRequest(ServerConfig.url, PAYMEMPLOYEE, {});
      setEmployee(employeeResponse.data);
    }
    getData();
  }, []);

  const handleEmployeeChange = async (e) => {
    const selectedEmployeeId = e.target.value;
    setPnEmployeeId(selectedEmployeeId);
    if (selectedEmployeeId) {
      try {
        const response = await getRequest(ServerConfig.url, REPORTS, {
          "query": `select p.pn_employeeId, p.pn_branchid, (select v_divisionname from paym_division where branchid=p.pn_branchid) as division, (select v_departmentname from paym_department where pn_branchid=p.pn_branchid) as department, (select v_DesignationName from paym_designation where BranchID = p.pn_branchid ) as designation, (select v_GradeName from paym_Grade where BranchID = p.pn_branchid) as grade, (select v_ShiftName from paym_Shift where BranchID = p.pn_BranchID) as shift, (select v_CategoryName from paym_Category where BranchID = p.pn_BranchID) as category, (select v_JobStatusName from paym_JobStatus where BranchID = p.pn_BranchID) as jobstatus, (select v_LevelName from paym_Level where BranchID = p.pn_BranchID) as level, (select employee_full_name from paym_Employee where pn_EmployeeID=p.pn_EmployeeID) as employee_name, (select EmployeeCode from paym_Employee where pn_EmployeeID=p.pn_EmployeeID) as employee_code from paym_employee_profile1 p where p.pn_employeeId = '${selectedEmployeeId}'`
        });
        setEmployeeDetails(response.data[0]);
      } catch (error) {
        console.error("Error fetching employee details:", error);
      }
    } else {
      setEmployeeDetails(null);
    }
  };

  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h5' color='textSecondary' align='center'>
              Paym Employee Profile
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>EmployeeId</InputLabel>
                    <select 
                      name="pnEmployeeId" 
                      onChange={handleEmployeeChange}
                      value={pnEmployeeId}
                      style={{ height: '50px' }}
                    >
                      <option value="">Select</option>
                      {employee.map((e) => (
                        <option key={e.pnEmployeeId} value={e.pnEmployeeId}>{e.pnEmployeeId}</option>
                      ))}
                    </select>
                  </FormControl>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

      {employeeDetails && (
        <Paper style={{ padding: '20px', margin: '20px', border: '2px solid black' }}>
          <Typography variant="h4" align="center">
            Employee Details
          </Typography>
          <Divider sx={{ borderBottomWidth: 2, borderColor: 'black', marginBottom: '20px' }} />
          <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={3}>
              <Typography variant='h6'>Employee ID: {employeeDetails.pn_employeeId}</Typography>
              <Typography variant='h6'>Branch ID: {employeeDetails.pn_branchid}</Typography>
              <Typography variant='h6'>Division: {employeeDetails.division}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h6'>Department: {employeeDetails.department}</Typography>
              <Typography variant='h6'>Designation: {employeeDetails.designation}</Typography>
              <Typography variant='h6'>Grade: {employeeDetails.grade}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h6'>Shift: {employeeDetails.shift}</Typography>
              <Typography variant='h6'>Category: {employeeDetails.category}</Typography>
              <Typography variant='h6'>Job Status: {employeeDetails.jobstatus}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h6'>Level: {employeeDetails.level}</Typography>
              <Typography variant='h6'>Employee Name: {employeeDetails.employee_name}</Typography>
              <Typography variant='h6'>Employee Code: {employeeDetails.employee_code}</Typography>
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
}
