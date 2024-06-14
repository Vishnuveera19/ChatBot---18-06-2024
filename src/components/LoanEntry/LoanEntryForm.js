import { Grid,Card,
  TextField,
  Button,
  Typography,
  Box,
  CardContent,
  FormControl
} from '@mui/material';
import { useState, useEffect } from 'react';
import { PAYMEMPLOYEE, PAYMLOAN, LOANENTRY } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import {InputLabel} from '@mui/material';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';



export default function LoanEntForm() {
const navigate=useNavigate();
const [employee,setEmployee]=useState([])
const [company,setCompany]=useState([])
const [branch,setBranch]=useState([])
const [pnEmployeeId,setEmployeeId]=useState("")
const [employeeCode,setEmployeeCode]=useState("")
const [employeeName,setEmployeeName]=useState("")
const [paymLoan,setPaymLoan]=useState([])
const [pnLoanId,setPnLoanId]=useState("")
const [sanDate,setSanDate]=useState("")
const [dEffdate,setDeffDate]=useState("")
const [loanAmt,setLoanAmt]= useState("")
const [instalmentAmt,setInstalmentAmt]=useState("")
const [instalmentcount,setInstalmentCount]=useState("")
const [balanceAmt,setBalanceAmt]=useState("")
const [cStatus,setCstatus]=useState("")
const [vLoanName,setVLoanName]=useState("")
const [loanProcess,setLoanProcess]=useState("")
const [loanCalculation,setLoanCalculation]=useState("")
const [comments,setComments]=useState("")
const [loanAppid,setLoanAppId]=useState("")
const [interest,setInterest]=useState("")
const [totInterestAmt,setTotInterestAmt]=useState("")
const [loanStatus,setLoanStatus]=useState("")
const [lasttransactionFrom,setLastTransactionFrom]=useState("")
const [lasttransactionTo,setLastTransactionTo]=useState("")
const[LoanAutoID,setLoanAutoId]=useState("")




useEffect(() => {
async function getData() {
  const data = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
  setEmployee(data.data);
  const paymleave=await getRequest(ServerConfig.url,PAYMLOAN)
    setPaymLoan(paymleave.data)
}
getData();
}, []);  // Function to format the time in HH:mm:ss format
const formatTime = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}:00`;
};


// Handler for changing the date in the time picker
const handleDateChange = (date, setter) => {
  const formattedTime = formatTime(date);
   console.log(formattedTime)
   console.log(date)
  setter(formattedTime);
};




const handleSubmit = async (e) => {
e.preventDefault();
const formData = {
  pnCompanyId: company,
  pnBranchId: branch,
  pnEmployeeId: pnEmployeeId,
  loanAutoId:LoanAutoID,
  fnLoanId: pnLoanId,
  sanDate:null, //sanDate,
  dEffdate: null,//dEffdate,
  loanAmt: loanAmt,
  instalmentAmt: instalmentAmt,
  instalmentcount: instalmentcount,
  balanceAmt: balanceAmt,
  cStatus : cStatus,
  loanName: vLoanName,
  loanProcess: loanProcess,
  loanCalculation: loanCalculation,
  comments: comments,
  loanAppid: loanAppid,
  interest: interest,
  
  totInterestAmt: totInterestAmt,
  empName:employeeName,
  loanStatus: loanStatus,
  lasttransactionFrom:null, lasttransactionFrom,
  lasttransactionTo:null ,lasttransactionTo,
  pnCompany:{
    "pnCompanyId":company
  },
  pnBranch:{
    "pnBranchId": branch
  }
  
};
console.log(formData)
};

  const margin={margin:"0 5px"}
  
  return (
    <div>
      <Grid style ={{ padding: "80px 5px0 5px" }}>
      <Card style = {{maxWidth: 600, margin: "0 auto"}}>
      <CardContent>
      <Typography variant='h5' color='S- Light' align='center'>Loan Entry</Typography>
      <form>
     
      <Grid container spacing={2} inputlabelprops={{shrink:true}}>
          <Grid item xs={12} sm={6} >
            <FormControl fullWidth>
           
            <InputLabel shrink>Company</InputLabel>
               <select name = "pnCompanyId" 
               onChange={(e)=>{
                setCompany(e.target.value)
                
               }}
               style={{ height: '50px' }}
              
               >
                <option value="">Select</option>
                   {

                      employee.map((e)=><option>{e.pnCompanyId}</option>)
                      
                   }
               </select>
            </FormControl >
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth >
                  <InputLabel shrink>BranchId</InputLabel>
               <select 
               name="pnBranchId"
               onChange={(e)=>{
                setBranch(e.target.value)
              
               }}
               style={{ height: '50px' }}
               inputlabelprops={{ shrink: true }}
               >
                <option value="">Select</option>
                   {
                     
                        employee.filter((e)=>(e.pnCompanyId==company)).map((e)=><option>{e.pnBranchId}</option>)
                   }
               </select>
               </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth >
                  <InputLabel shrink>EmployeeId</InputLabel>
               <select 
               name="pnEmployeeId"
               onChange={(e)=>{
                setEmployeeId(e.target.value)
              
               }}
               style={{ height: '50px' }}
               inputlabelprops={{ shrink: true }}
               >
                <option value="">Select</option>
                   {
                     
                        employee.filter((e)=>(e.pnCompanyId==company && e.pnBranchId==branch)).map((e)=><option>{e.pnEmployeeId}</option>)
                   }
               </select>
               </FormControl>
                </Grid>


                <Grid xs={12} sm={6} item>
               
                  <FormControl fullWidth>
                  <InputLabel shrink>empCode</InputLabel>
               <select 
               name = "empCode"
               onChange={(e)=>{
                  
                   var v=e.currentTarget.value
                var empname=employee.filter((e)=>e.employeeCode==v)
                setEmployeeCode(v)
                setEmployeeName(empname[0].employeeFullName)
             
               }}
               style={{ height: '50px' }}
               >
                      <option value="">Select</option>
               
                   {
                      
                      employee.filter((e)=>(e.pnCompanyId==company && e.pnBranchId==branch)).map((e)=><option>{e.employeeCode}</option>)
                    
                   }
               </select>
               </FormControl>
                </Grid>

          
                 <Grid xs={12} sm={6} item  >
                
                 <FormControl fullWidth>
                <TextField 
                name= "empName"
                value={employeeName}
                label="employeename"
                variant="outlined"
                fullWidth
                required  /> 
                </FormControl>
                </Grid>

                {/* <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name= "loanAutoId"
                 
                  label="loanAutoId"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={(e) =>setLoanAutoId(e.target.value)} 

                />
                </FormControl>
                </Grid> */}
         
                <Grid item xs={12} sm={6} >
            <FormControl fullWidth>
           
            <InputLabel shrink>LoanId</InputLabel>
               <select name = "fnLoanId" 
               onChange={(e)=>{
                setPnLoanId(e.target.value)
                
               }}
               style={{ height: '50px' }}
              
               >
                <option value="">Select</option>
                   {

                      paymLoan.map((e)=><option>{e.pnLoanId}</option>)
                      
                   }
               </select>
            </FormControl >
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth >
                  <InputLabel shrink>loan Name</InputLabel>
               <select 
               name="loanName"
               onChange={(e)=>{
                setVLoanName(e.target.value)
              
               }}
               style={{ height: '50px' }}
               inputlabelprops={{ shrink: true }}
               >
                <option value="">Select</option>
                   {
                     
                        paymLoan.filter((e)=>(e.pnLoanId==pnLoanId)).map((e)=><option>{e.vLoanName}</option>)
                   }
               </select>
               </FormControl>
                </Grid>


               
                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <TextField
                                            label="San Date"
                                            type="datetime-local"
                                            fullWidth
                                            required
                                            value={sanDate}
                                            onChange={(e) => handleDateChange(new Date(e.target.value), setSanDate)}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </FormControl>
                                </Grid>
                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <TextField
                                            label="Effective Date"
                                            type="datetime-local"
                                            fullWidth
                                            required
                                            value={dEffdate}
                                            onChange={(e) => handleDateChange(new Date(e.target.value), setDeffDate)}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </FormControl>
                                </Grid>


                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="loanAmt"
                 
                  label="loanAmt"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>  setLoanAmt(e.target.value)} 
                  InputLabelProps={{ shrink: true }} 
                />
                </FormControl>
                </Grid>


                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="instalmentAmt"
                 
                  label="instalmentAmt"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={(e) => setInstalmentAmt(e.target.value)} 

                />
                </FormControl>
                </Grid>


                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="instalmentcount"
                 
                  label="instalmentcount"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={(e) => setInstalmentCount(e.target.value)} 

                />
                </FormControl>
                </Grid>



                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="balanceAmt"
                 
                  label="balanceAmt"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={(e) =>setBalanceAmt(e.target.value)} 

                />
                </FormControl>
                </Grid>



                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="cStatus"
                 
                  label="cStatus"
                  variant="outlined"
                 
                  fullWidth
                  required
                  onChange={(e) => setCstatus(e.target.value)} 
                  
                />
                </FormControl>
                </Grid>
               
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name= "loanProcess"
                 
                  label="loanProcess"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={(e) =>setLoanProcess(e.target.value)} 

                />
                </FormControl>
                </Grid>

                
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name= "loanCalculation"
                 
                  label="loanCalculation"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={(e) =>setLoanCalculation(e.target.value)} 

                />
                </FormControl>
                </Grid>

                
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name= "comments"
                 
                  label="comments"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={(e) =>setComments(e.target.value)} 

                />
                </FormControl>
                </Grid>

                
              
                
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name= "loanAppid"
                 
                  label="loanAppid"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={(e) =>setLoanAppId(e.target.value)} 

                />
                </FormControl>
                </Grid>

                
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name= "interest"
                 
                  label="interest"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={(e) =>setInterest(e.target.value)} 

                />
                </FormControl>
                </Grid>

                
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name= "totInterestAmt"
                 
                  label="totInterestAmt"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={(e) =>setTotInterestAmt(e.target.value)} 

                />
                </FormControl>
                </Grid>

                
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name= "loanStatus"
                 
                  label="loanStatus"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={(e) =>setLoanStatus(e.target.value)} 

                />
                </FormControl>
                </Grid>

                
                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <TextField
                                            label="Last Transaction From"
                                            type="datetime-local"
                                            fullWidth
                                            required
                                            value={lasttransactionFrom}
                                            onChange={(e) => handleDateChange(new Date(e.target.value), setLastTransactionFrom)}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </FormControl>
                                </Grid>      <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name= "lasttransactionTo"
                 
                  label="lasttransactionTo"
                  variant="outlined"
                  type='datetime-local'
                  fullWidth
                  required
                  onChange={(e) =>setLastTransactionTo(e.target.value)} 
                  InputLabelProps={{ shrink: true }} 

                />
                </FormControl>
                </Grid>

              
        </Grid>
        <Grid container spacing={1} paddingTop={'10px'}>
            
            <Grid item xs ={12} align="right" >
              <Button style={margin} type="reset" variant='outlined' color='primary' >RESET</Button>
              <Button onClick={()=>{
const formData = {
  pnCompanyId: company,
  pnBranchId: branch,
  pnEmployeeId: pnEmployeeId,
  empcode: employeeCode,
  empName: employeeName,
  loanAutoId:'223AAA33434',
  fnLoanId: pnLoanId,
  
  sanDate: sanDate+":00.000",
  dEffdate: dEffdate+":00.000",
  loanAmt: loanAmt,
  instalmentAmt: instalmentAmt,
  instalmentcount: instalmentcount,
  balanceAmt: balanceAmt,
  cStatus : cStatus,
  loanName: vLoanName,
  loanProcess: loanProcess,
  loanCalculation: loanCalculation,
  comments: comments,
  loanAppid: loanAppid,
  interest: interest,
  totInterestAmt: totInterestAmt,
  loanStatus: loanStatus,
  lasttransactionFrom: lasttransactionFrom+":00.000",
  lasttransactionTo: lasttransactionTo+":00.000",
 PaymLoan:{
    "PnCompany": {
      pnCompanyId:company
    }
  },
  PaymBranch:{
    "PnCompany":{
      pnCompanyId:company
    } 
  }
  
};
var sampleobj={
  "pnCompanyId": 1,
  "pnBranchId": 1,
  "pnEmployeeId": 17,
  "loanAutoId": "",
  "fnLoanId": 1,
  "sanDate": sanDate,
  "dEffdate": "2024-10-05T13:33:00",
  "loanAmt": 10000,
  "instalmentAmt": 1000,
  "instalmentcount": 10,
  "balanceAmt": 0,
  "cStatus": "A",
  "loanName": "Personal Loan",
  "loanProcess": "online",
  "loanCalculation": "simple",
  "comments": "ok",
  "loanAppid": "APPO100",
  "interest": 7.5,
  "totInterestAmt": 45.5,
  "empName": "John Doe Smith",
  "loanStatus": "active              ",
  "lasttransactionFrom": "2024-09-05T13:35:00",
  "lasttransactionTo": "2024-08-05T13:35:00",
  PaymLoan:{
    "PnCompany": {
      pnCompanyId:1
    }
  },
  PaymBranch:{
    "PnCompany":{
      pnCompanyId:1
    } 
  }
 
}
console.log(sampleobj)
postRequest(ServerConfig.url,LOANENTRY,sampleobj).then((e)=>{
console.log(e)
navigate('/LoanEntryTable')
}).catch((e)=>console.log(e));

                
              }}  
      variant='contained' color='primary' >SAVE</Button>
            </Grid>
            </Grid>

      </form>
      </CardContent>
      </Card>
      </Grid>
    </div>
  );
}

