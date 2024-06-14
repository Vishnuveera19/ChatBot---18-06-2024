import { Grid,Card,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  CardContent
} from '@mui/material';

import { useState, useEffect } from 'react';
import { PAYMCOMPANIES, PAYMLOAN } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import {InputLabel} from '@mui/material';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';



export default function DesignationForm() {
  const navigate = useNavigate();

  const [PaymLoan,setPaymLoan]=useState([])
  const [company,setCompany]=useState([])
  const [pnCompanyid,setPnCompanyid]=useState("")
  const [pnBranchId,setPnBranchId]=useState("")
  const [vLoanName,setVLoanName]=useState("")
  const [vLoanCode,setVLoanCode]=useState("")
  const [status,setStatus]=useState("")


  
useEffect(() => {
async function getData() {
  const data = await getRequest(ServerConfig.url, PAYMCOMPANIES);
  setCompany(data.data);
  const data1=await getRequest(ServerConfig.url,PAYMLOAN);
    setPaymLoan(data1.data)
}
getData();
}, []);

const handleSubmit = async (e) => {
e.preventDefault();
const formData = {
  pnCompanyid: pnCompanyid,
  pnBranchId: pnBranchId,
  vLoanName: vLoanName,
  vLoanCode: vLoanCode,
  status: status,
  pnCompany:{
    "pnCompanyId":pnCompanyid 
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
      <Typography variant='h5' color='S- Light' align='center'>Loan Post</Typography>
      <form>
     
      <Grid container spacing={2} inputlabelprops={{shrink:true}}>
      <Grid item xs={12} sm={6} >
            <FormControl fullWidth>
           
            <InputLabel shrink>Company</InputLabel>
               <select name = "pnCompanyid" 
               onChange={(e)=>{
                setPnCompanyid(e.target.value)
                
               

                
               }}
               style={{ height: '50px' }}

               >
                <option value="">Select</option>
                   {

                      company.map((e)=><option>{e.pnCompanyId}</option>)
                   }
               </select>
            </FormControl >
                </Grid>

                <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth> 
              <TextField
            name="pnBranchId"
                label="pnBranchId"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setPnBranchId(e.target.value)} 
                InputLabelProps={{ shrink: true }} 
              />
              </FormControl>
              </Grid>
              <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth> 
              <TextField
            name="vLoanName"
                label="vLoanName"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setVLoanName(e.target.value)} 
                InputLabelProps={{ shrink: true }} 
              />
              </FormControl>
              </Grid>

              <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth> 
              <TextField
            name="vLoanCode"
                label="vLoanCode"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setVLoanCode(e.target.value)} 
                InputLabelProps={{ shrink: true }} 
              />
              </FormControl>
              </Grid>

              <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth> 
              <TextField
            name="status"
                label="status"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setStatus(e.target.value)} 
                InputLabelProps={{ shrink: true }} 
              />
              </FormControl>
              </Grid>
              <Grid container spacing={1} paddingTop={'10px'}>
          
          <Grid item xs ={12} align="right" >
            <Button style={margin} type="reset" variant='outlined' color='primary' >RESET</Button>
            <Button onClick={()=>{
const formData = {
pnCompanyid: pnCompanyid,
pnBranchId: pnBranchId,
vLoanName: vLoanName,
vLoanCode: vLoanCode,
status: status,
pnCompany:{
  "pnCompanyId":pnCompanyid 
}
};
console.log(formData)
postRequest(ServerConfig.url,PAYMLOAN, formData).then((e)=>{
console.log(e)
navigate('/PaymLoanTable')
}).catch((e)=>console.log(e));

              
            }}  
    variant='contained' color='primary' >SAVE</Button>
          </Grid>
          </Grid>
              </Grid>
              </form>
              </CardContent>
              </Card>
              </Grid>
              </div>
  )   
  
}
