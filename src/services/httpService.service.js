import angular from 'angular';

HttpService.$inject = [
    '$http'
];

function HttpService($http) {
    const lastFMRoot = 'http://ws.audioscrobbler.com/2.0/';
    const apiKey = '146bddb6579585eb59ee35dc0ab4c618';

    const service = this;

    Object.assign(service, {
        makeHttpRequest
    });

    return service;

    function makeHttpRequest(method, params) {
        return new Promise((resolve, reject) => {
            const requestParams = {
                method,
                url: buildUrl(params)
            };

            $http(requestParams)
                .then((data) => {
                    resolve(data);
                }, (e) => {
                    console.error(e);
                    reject(e);
                })
        })
    }

    function buildUrl(params) {
        let url = `${lastFMRoot}?method=artist.getsimilar&`;

        Object.keys(params).forEach((key) => {
            url += `${key}=${params[key]}&`;
        });

        url += `api_key=${apiKey}&format=json`;
        return url;
    }
}

export default angular.module('services.httpService', [])
    .service('httpService', HttpService)
    .name;
