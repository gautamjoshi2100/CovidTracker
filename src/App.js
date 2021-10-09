import React, {setState} from 'react'
import { Cards, Chart, CountryPicker} from './components';
import './App.module.css';
import {fetchData} from './api'
class App extends React.Component {
    state = {
        data: {}
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
       // console.log("Now i'm here")
        //console.log(typeof(fetchedData));
        this.setState({data: fetchedData});
        
    }
    render() {
        const {data} = this.state;
        return (
            <div className = "container">
                <Cards data = {data}></Cards>
                <CountryPicker></CountryPicker>
                <Chart></Chart>
            </div>
        )
    }
}
export default App;