import axios from "axios";

export default class HttpService{
  static Get(url,params){
    return axios({
      method:"GET",
      url: `https://api.coinlore.net/${url}`,
			params: params,
    })
  }  
}