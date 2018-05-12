import axios from 'axios';

export class requestServices {

    

    static getRequest = (url) => {
        return axios.get(url).then(response => response.data)
    }

}


