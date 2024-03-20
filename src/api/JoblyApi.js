// src/api/JoblyApi.js
//jobly-frontend/src/api/JoblyApi.js

import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

class JoblyApi {

  static token;

  static async request(endpoint, data = {}, method = 'get') {
    console.debug('API Call:', endpoint, data, method);
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === 'get' ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static setToken(token) {
    JoblyApi.token = token;
  }

  static async getCompanies() {
    let res = await this.request('companies');
    return res.companies;
    
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getJobs() {
    let res = await this.request('jobs');
    return res.jobs;
  }

  static async applyToJob(jobId) {
    let res = await this.request(`jobs/${jobId}/apply`, {}, 'post');
    return res.message; 
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, 'patch');
    return res.user;
  }

  static async login(data) {
    let res = await this.request(`login`, data, 'post');
    JoblyApi.setToken(res.token);
    return res.token;
  }

  static async signup(data) {
    let res = await this.request(`users`, data, 'post');
    JoblyApi.setToken(res.token);
    return res.token;
  }
}

export default JoblyApi;
