// export default class HomeController {
//   constructor(randomNames) {
//     this.random = randomNames;
//     this.name = 'World';
//   }
//
//   changeName() {
//     this.name = 'angular-tips';
//   }
//
//   randomName() {
//     this.name = this.random.getName();
//   }
// }

HomeController.$inject = ['randomNames', '$http', 'httpService', '$scope', 'DTOptionsBuilder'];

function HomeController(randomNames, $http, httpService, $scope, DTOptionsBuilder) {
    const vm = this;

    vm.search = '';
    vm.data = [];

    const lastFMRoot = 'http://ws.audioscrobbler.com/2.0/';
    const apiKey = '146bddb6579585eb59ee35dc0ab4c618';

    vm.getSimilar = getSimilar;

    activate();

    function activate() {
        console.log('activate');
        $('#foobar').html('<i>sdf</i>');
        console.log(DTOptionsBuilder);

        vm.dtOptions = DTOptionsBuilder
            .withSelect({
                style: 'os',
                selector: 'td:first-child'
            })
    }

    function getSimilar(artist) {
      if (!artist || !artist.length) {
        return;
      }

      console.log('getting similar: '+artist);
      // const url = `${lastFMRoot}?method=artist.getsimilar&artist=${artist}&api_key=${apiKey}&format=json`;


      // $http({
      //     method: 'GET',
      //     url
      // }).then((data) => {
      //   console.log(data);
      // }, (e) => {
      //   console.error(e);
      // })


        httpService.makeHttpRequest('GET', { artist }).then((response) => {
            const { data } = response;

            if (!data) return;

            const { similarartists } = data;
            const { artist } = similarartists;
            // vm.data = [...vm.data, artist];
            $scope.$apply(() => vm.data = [...vm.data, artist]);
        }).catch((e) => {
            console.log(e);
        });
    }
}

export default HomeController;