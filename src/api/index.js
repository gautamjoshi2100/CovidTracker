import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);
        //console.log("insider");
        console.log(confirmed.value);
        return {
            confirmed.value, 
        };
    } catch (error) {
        
    }
}