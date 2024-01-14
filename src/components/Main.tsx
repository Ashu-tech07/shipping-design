import { Avatar, Box, Button, Container, Grid, Icon, InputAdornment, Paper, TextField, Typography } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import React, { Component } from 'react';
import image from '../images/pic.jpg';

export default class Main extends Component {
    render() {
        return (
            <>
                <Container maxWidth='lg'>
                    <Grid container >
                        <Grid item xs={5} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                            <Grid container direction='column' spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant='h4' style={{ lineHeight: '3rem' }} >Quick & Reliable <span style={{ color: '#F67366' }}> Warehousing and Logistics </span> Solution.</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='caption' > ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2} style={{ backgroundColor: '#FFFFFF', height: 'max-content', alignItems: 'center' }}>
                                        <Grid item >
                                            <Button size='large' style={Styles.btnJoin}>
                                                Join Now
                                            </Button>
                                        </Grid>
                                        <Grid item >
                                            <Avatar style={{ backgroundColor: '#FFFFFF', boxShadow: '0 0 10px grey' }}> <VideocamIcon style={{ color: '#2C2D5B' }} /></Avatar>
                                        </Grid>
                                        <Grid item >
                                            <Button variant='text' size='large' style={{ color: 'black', textTransform: 'capitalize', fontWeight: 'bold' }} >
                                                Play Demo
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={7}>
                            <img src={image} style={Styles.img} />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='center' style={{marginBottom:'5rem'}}>
                        <Grid item xs={8}>
                            <Paper elevation={4} style={{borderRadius:'17px'}} >
                                <Box style={{ display: 'inline-flex', justifyContent: 'space-between',
                                 paddingLeft:'25px' , paddingRight:'25px'}}>

                                    <TextField variant='outlined' size='small' label='Origin'
                                    placeholder='Enter location' style={Styles.textField}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LocationOnIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <TextField variant='outlined' size='small' label='Destination'
                                    placeholder='Enter location' style={Styles.textField}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LocationOnIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <TextField variant='outlined' size='small' label='Weight' 
                                    placeholder='Enter   ' style={Styles.textField}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LocationOnIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <Button variant='contained' size='small' style={Styles.btnCheckPrice}> Check Price</Button>

                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
}

const Styles = {
    leftContainer: {

    },
    rightContainer: {

    },
    btnJoin: {
        textTransform: 'capitalize' as 'capitalize',
        fontWeight: 500,
        color: '#FFFFFF',
        fontSize: '12px',
        padding: '10px  15px 10px 15px',
        borderRadius: '12px',
        backgroundColor: '#2C2D5B',
    },
    btnCheckPrice: {
        padding: '10px  15px 10px 15px',
        borderRadius: '12px',
        color: '#FFFFFF',
        fontSize: '12px',
        backgroundColor: '#2C2D5B',
        margin: '28px 10px 22px 10px',
        textTransform: 'capitalize' as 'capitalize',
        width:'150px'
    },
    textField:{
        borderRadius: '15px', 
        margin: '30px 15px 25px 15px'
    },
    img: {
        width: '100%',
        height: 'auto',
    }
}