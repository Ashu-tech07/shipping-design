import React, { Component } from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import ContactsIcon from '@material-ui/icons/Contacts';
import { Avatar, Box, Button, Grid, IconButton, Modal, TextField, ThemeProvider, Typography, createTheme } from '@material-ui/core';


interface IStates {
    email?: string,
    password?: string,

}
interface IProps {
    status?: boolean,
    handleClose?: any
}



export default class LoginForm extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
           
            email: '',
            password: '',
            
        }
    }

    handleChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e: any) => {
        console.log(this.state);
        alert(JSON.stringify(this.state))
        e.preventDefault();
    }
  render() {
    return (
       
        <Modal
            open={this.props.status || false}
            onClose={this.props.handleClose}
        >
            <Grid container>

                <Box style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 340,
                    height: 280,
                    backgroundColor: 'whitesmoke',
                    boxShadow: '0 0 8px grey',
                    padding: 4,
                    paddingTop: 0,
                    borderRadius: '15px',
                }} >
                    <IconButton style={{ position: 'relative', left: '88%', top:'2%' }} onClick={this.props.handleClose}>
                                <CancelIcon />
                            </IconButton>
                            <Grid item  style={{display:'flex', justifyContent:'center', flexDirection:'column'}} >
                                <Avatar style={{ backgroundColor: 'red', alignSelf: 'center' }}>
                                    <ContactsIcon />
                                </Avatar>
                                <Typography variant='h4'  style={{ margin: 1,alignSelf:'center' }}>Login</Typography>
                            </Grid>
                    <Box style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>

                    <form onSubmit={(e) => { this.handleSubmit(e) }} >
                        
                        <TextField variant='outlined' size='small'  style={contact.textField} label='Email' type='email' placeholder="abc@gmail.com"
                            name='email' value={this.state.email} onChange={(e) => { this.handleChange(e) }} required />
                        <TextField variant='outlined' size='small' style={contact.textField} label='Password' type='password' placeholder="Enter your password"
                            name='password' value={this.state.password} onChange={(e) => { this.handleChange(e) }} required/>

                        
                        <Grid style={{display:'flex', margin:'auto', justifyContent:'center'}} >
                            <Button size="small" type='submit' variant='contained' style={{ textTransform: 'capitalize', backgroundColor: '#009688' }}>Login</Button>
                        </Grid>

                    </form>
                    </Box>
                </Box>
            </Grid>
        </Modal>
       
    )
  }
}


const contact={
    textField:{
        margin:'10px',
        width:'90%',
    }
}
