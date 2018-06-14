import axios from 'axios-jsonp-pro';

export class requestServices {
    static getRequest = (url) => {
        return axios.jsonp(url).then(response => response)
    }

}


