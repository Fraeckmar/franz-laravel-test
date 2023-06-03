import BaseService from "./BaseService";

class ResourceService extends BaseService {
    static endpoint = "";

    static get(targetResource, getParams = {}) {
        return this.client
            .setUrl(`${this.endpoint}${targetResource}`)
            .get(getParams)
            .then(({ data }) => data)
            .catch((e) => {
                throw e.response;
            });
    }

    static post(targetResource, request) {
        return this.client
            .setUrl(`${this.endpoint}${targetResource}`)
            .post(request)
            .then(({ data }) => data)
            .catch((e) => {
                throw e.response;
            });
    }

    static update(targetResource, id, request) {
        return this.client
            .setUrl(`${this.endpoint}${targetResource}/${id}`)
            .put(request)
            .then(({ data }) => data)
            .catch((e) => {
                throw e.response;
            });
    }
    static delete(targetResource, id, request) {
        return this.client
            .setUrl(`${this.endpoint}${targetResource}/${id}`)
            .delete(request)
            .then(({ data }) => data)
            .catch((e) => {
                throw e.response;
            });
    }
}

export default ResourceService;
