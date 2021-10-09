import React from 'react'
import {Card, Grid, CardContent, Typography} from "@material-ui/core"
import styles from './Cards.module.css'
import CountUp from "react-countup"
function Cards({data: { confirmed, recovered, deaths, lastUpdate}}) {
    return (
        <div className = {styles.container}>
            <Grid container spacing = {3} justify = "center">
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint = "h5">{confirmed}</Typography>
                        <Typography color = "textSecondary">REAL DATE</Typography>
                        <Typography varaint = "body2">Number of active cases of covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Recoverd</Typography>
                        <Typography varaint = "h5">REAL DATA</Typography>
                        <Typography color = "textSecondary">REAL DATE</Typography>
                        <Typography varaint = "body2">Number of recoveries from covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaint = "h5">REAL DATA</Typography>
                        <Typography color = "textSecondary">REAL DATE</Typography>
                        <Typography varaint = "body2">Number of deaths caused by covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
