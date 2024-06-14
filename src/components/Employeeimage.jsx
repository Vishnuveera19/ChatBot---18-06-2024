import React, { useState, useEffect } from 'react';
import { Grid, TextField, Typography, Button, Card, CardContent, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { postRequest, getRequest } from '../serverconfiguration/requestcomp';
import { ServerConfig } from '../serverconfiguration/serverconfig';
import { PAYMEMPLOYEE, REPORTS, SAVEBLOB } from '../serverconfiguration/controllers';
import { useNavigate } from 'react-router-dom';

const Form = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(6),
}));

const ImagePreview = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  maxHeight: '100px',         
  marginTop: theme.spacing(2),
}));

function EmployeeImageForm() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
  const [employeecode, setEmployeecode] = useState('');
  const [image, setImage] = useState({});
  const token = 'your-authentication-token-here'; 

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRequest(ServerConfig.url, PAYMEMPLOYEE, token);
        setEmployee(data.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    }
    fetchData();
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!employeecode || !image) {
      alert('Please select an employee and upload an image.');
      return;
    }

    const formData = new FormData();
    formData.append('employeecode', employeecode);
    formData.append('image', image);

    try {
      const response = await postRequest(ServerConfig.url, REPORTS, formData, token);
      console.log(response);
      navigate('/success');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" align="center">
              Employee Image Form
            </Typography>
            
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>Employee Code</InputLabel>
                    <select
                      value={employeecode}
                      onChange={(e) => setEmployeecode(e.target.value)}
                      style={{ height: '50px' }}
                      required
                    >
                      <option value="">Select</option>
                      {employee.map((e) => (
                        <option key={e.employeeCode} value={e.employeeCode}>
                          {e.employeeCode}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      label="Employee Image"
                      inputProps={{
                        accept: 'image/*',
                      }}
                      type="file"
                      InputLabelProps={{ shrink: true }} 
                      onChange={(event) => {
                      let file=event.target.files[0]
                      let reader=new FileReader()
                      reader.readAsDataURL(file)
                      reader.onload=()=>{
                      setImage(reader.result)  
                      }
                      }}
                      required
                    />
                  </FormControl>
                </Grid>
                {image && (
                  <Grid item xs={12}>
                    {/* <ImagePreview src={URL.createObjectURL(image)} alt="Employee Image" 
                    
                    
                    /> */}
                    <img src={image} width="100" height="100"/>
                  </Grid>
                )}
                <Grid item xs={12} style={{ textAlign: 'right' }}>
                  <Button type="reset" variant="outlined" color="primary" style={{ marginRight: '10px' }}>
                    RESET
                  </Button>
                  <Button type="submit" variant="contained" color="primary"
                    onClick={()=>{
                    //  console.log(image)
                     postRequest(ServerConfig.url,SAVEBLOB,{query:"insert into employeeimage values('"+employeecode+"','"+image+"')"}).then((e)=>{
                      alert('image uploaded successfully')
                     })
                    
                    
                     postRequest(ServerConfig.url,REPORTS,"select * from employeeimage where employeecode='"+employeecode+"").then((e)=>console.log(e))
                    }}
                     
                  >
                    SUBMIT
                  </Button>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'right' }}>
                        
                </Grid>
              </Grid>
            </Form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  
  )
}
export default EmployeeImageForm
