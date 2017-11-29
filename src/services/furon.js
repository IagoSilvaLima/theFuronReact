import axios from 'axios';

const FURON_ENDPOINT = 'http://localhost:5000';

class FuronService {
    async listPlaces(){
        const url = `${FURON_ENDPOINT}/places`;
        const response  = await axios.get(url); 
        return response.data;
    }

    async addPlace(place){
        const url = `${FURON_ENDPOINT}/places`;
        const response = await axios.post(url, place);
        return response.data;
    }
}


export default new FuronService();