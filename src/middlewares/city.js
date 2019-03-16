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

City.authenticate = async function (token) {
    let endpoint = process.env.VUE_APP_API_SERVER + 'app/authentication'
    let res = null;
    try {
        res = await axios.get(endpoint, {
            headers: { 'Authorization': token }
        });
        return true;
    } catch (e) {
        if (process.env.NODE_ENV === 'development') {
            console.log(e.message);
        }
        return false;
    }    
};

City.changeUserCity = async function (cityId, token) {
    let endpoint = process.env.VUE_APP_API_SERVER + 'app/usercity'
    try {
        await axios.post(endpoint, cityId, {
            headers: { 'Authorization': token }
        });
        return true;
    } catch (e) {
        if (process.env.NODE_ENV === 'development') {
            console.log(e.message);
        }
        return false;
    }
};