import ExceptionFactory from "../factories/exception-factory";
import Client from "../utils/ApiClient";

export default class BaseService {
    static factory = ExceptionFactory;
    static client = Client;

    static createException(e) {
        return this.factory.make(e);
    }

    static get(params = {}) {
        return this.client
            .setUrl(this.endpoint)
            .get(params)
            .then(({ data }) => data)
            .catch((e) => {
                throw this.createException(e);
            });
    }

    static post(request) {
        return this.client
            .setUrl(`${this.endpoint}`)
            .post(request)
            .then(({ data }) => data)
            .catch((e) => {
                throw this.createException(e);
            });
    }

    static update(id, request) {
        return this.client
            .setUrl(`${this.endpoint}/${id}`)
            .put(request)
            .then(({ data }) => data)
            .catch((e) => {
                throw this.createException(e);
            });
    }

    static delete(id, request) {
        return this.client
            .setUrl(`${this.endpoint}/${id}`)
            .delete(request)
            .then(({ data }) => data)
            .catch((e) => {
                throw this.createException(e);
            });
    }
}
