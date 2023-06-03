
import Http from "./Http";
import Config from "../config/Config"

export default class ApiClient {
    static url = "";
    static API_BASE = `${Config.BASE_URL}/api/`;

    static getBaseUrl() {
        return location.origin + "";
    }

    static setUrl(url) {
        this.url = this.API_BASE + url;
        return ApiClient;
    }

    static post(data, options = {}) {
        let http = new Http();
        return http.post(this.url, data, options);
    }

    static put(data, options = {}) {
        let http = new Http();
        return http.put(this.url, data, options);
    }

    static delete(data, options = {}) {
        let http = new Http();
        return http.delete(this.url, data, options);
    }

    static get(params, options = {}) {
        let http = new Http();
        return http.get(this.url, params, options);
    }
}
