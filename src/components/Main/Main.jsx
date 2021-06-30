import React from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'
import Form from './Form/Form'
import List from './List/List'
import {useContext} from 'react'
import useStyles from './styles'
import {ExpenseTrackerContext} from '../../context/context'
import InforCard from '../InfoCard'


const Main = () => {

    const classes= useStyles()

    const {balance} = useContext(ExpenseTrackerContext)
    return (
       <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly" align="center"/>
        <CardContent>
            <Typography align="center" variant="h5"> Total Balance ${balance}</Typography>
            <Typography variant="subtitle1" style={{lineHeight: '1.5em',marginTop: '20px', textAlign: 'center'}}>
               Try saying :<br/>
                Add Income 
                for $100 
                in Category Salary
                for Monday
            </Typography>
            <Divider className={classes.divider}/>
            <Form/>
        </CardContent>
        <CardContent className={classes.CardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                   <List/>
                </Grid>
            </Grid>
        </CardContent>
       </Card>
    )
}

export default Main
