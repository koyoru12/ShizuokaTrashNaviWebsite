import axios from 'axios'

export const City = {};

const sleep = async function (ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    });
}

City.fetchValidCities = async function () {
    let list = [
        {
            name: '静岡市',
            id: ''
        },
        {
            name: '浜松市',
            id: ''
        },
    ]
    let endpoint = process.env.VUE_APP_API_SERVER + 'app/city'
    let res = null;
    try {
        console.log(endpoint)
        res = await axios.get(endpoint);
        res = res.data;
    } catch (e) {
        if (process.env.NODE_ENV === 'development') {
            console.log(e.message);
        }        
    }    
    return res;
};

City.changeUserCity = async function (cityId, token) {
    await sleep(1000);
    return true;
};