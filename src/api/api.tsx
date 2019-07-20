
 /**
 * Author: Synsoft Global
 * date: 20-07-2019
 * Api class is to implement api calling methods like get and post 
 * importing top level dependencies
 */


import axios from 'axios';
import * as config from '../../AppConfig/index';

// creating a request object for eveny request
const requestObj =  axios.create({
  baseURL: config.apiCallBaseUrl,
  responseType: "json",
  headers : {"content-Type":"application/json"}
});

// get type api implementation 
export function getApiCall(apiName: string , parameters: string) {
 return requestObj.get(`${apiName}?${parameters}`)
  .then(res => {
     return res.data;
  })
}

// post type api implementation 
export function postApiCall(apiName: string , parameters: any) {
 return requestObj.post(`${apiName}`, parameters)
  .then(res => {
    return res.data;
  })
}
