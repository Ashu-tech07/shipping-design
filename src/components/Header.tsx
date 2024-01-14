import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React, { Component } from 'react'
import LoginForm from './LoginForm';

interface IProps {
}

interface IState {
    open: boolean;
}
  
export default class Header extends Component<IProps, IState > {
    constructor(props: IProps) {
        super(props);
        this.state = {
            open: false,
        }

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen = () => {
        this.setState({ open: true });
    }
    handleClose = (event: any, reason: any) => {
        if (reason !== 'backdropClick') {
            this.setState({ open: false });
        }
    }

  render() {
    return (
      <>    
            <AppBar position='static' style={Styles.appBar}>
                        <Toolbar style={{display:'inline-flex', justifyContent:'space-evenly' }} >
                            <Typography  style={Styles.title}>Ship<span style={Styles.span}>Up</span></Typography>
                            
                                <Button variant='text' style={Styles.btn}>Company</Button>
                                <Button variant='text' style={Styles.btn}>Services</Button>
                                <Button variant='text' style={Styles.btn}>Solutions</Button>
                                <Button variant='text' style={Styles.btn}>Industries</Button>
                                <Button variant='text' style={Styles.btn}>Insights</Button>
                                <Button variant='text' style={Styles.btn} >News And Media</Button>
                                <Button variant='outlined' size='large' style={Styles.btnRequest} 
                                >Request Quote</Button>
                
                            <Button variant='contained' size='large' style={Styles.btnJoin}
                              onClick={this.handleOpen}>Join Now </Button>
                           <LoginForm  status={this.state.open} handleClose={this.handleClose}/>
                        </Toolbar>
                    </AppBar>
            </>
    )
  }
}


const Styles = {
    appBar: {
        background: '#FFFFFF',
        boxShadow: 'none',
        height: '10vh',
    },
    title:{
        color: '#2C2D5B',
            fontWeight: 300,
            gutterBottom:true,
            fontSize:'24px',
    },
    btn:{
        textTransform: 'capitalize' as 'capitalize',
        fontWeight: 500,
        color:'#141414',
        fontSize:'14px',
        borderRadius:'12px', 
    },
    btnRequest:{
        textTransform: 'capitalize' as 'capitalize',
        fontWeight: 600,
        color:'#2C2D5B',
        fontSize:'14px',
        borderRadius:'12px',
        border:'1px solid #2C2D5B'
       
    },
    btnJoin:{
        textTransform: 'capitalize' as 'capitalize',
        fontWeight: 500,
        color:'#FFFFFF',
        fontSize:'12px',
        padding:'10px 20px 10px 20px',
        borderRadius:'12px',
        backgroundColor:'#2C2D5B',
    },
    span:{
        color:'#F67366',
        fontWeight: 900,
            fontSize:'24px',
    }
}