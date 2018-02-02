import angular from 'angular';

const d3 = require('d3');

const GraphComponent = {
    template: '<span>I am graph</span>',
    bindings: {
        data: '<'
    },
    controllerAs: 'vm',
    controller: GraphComponentCtrl
};

GraphComponentCtrl.$inject = [
    '$element'
];

function GraphComponentCtrl(
    $element
) {

    const margins = {
        top: 50,
        bottom: 50,
        right: 400,
        left: 400
    };

    let svg;
    let tree, diagonal, root;
    let width, height;

    const vm = this;

    vm.$onInit = $onInit;
    vm.$postLink = $postLink;
    vm.$onChanges = $onChanges;

    function $onInit() {
        console.log('in on init');

        console.log(vm.data);

        //TODO: https://bl.ocks.org/mbostock/4339083
    }

    function $onChanges(changes) {
        console.log(changes);
        const { data } = changes;

        if (!data || !data.length) return;

        vm.data = data.currentValue;

        console.log(JSON.stringify(vm.data));

        // d3.json(JSON.stringify(vm.data), (error, artist) => {
        //     if (error) {
        //         console.log(error);
        //         throw error;
        //     }
        //
        //     console.log(artist);
        //
        //     root = artist;
        //     root.x0 = height / 2;
        //     root.y0 = 0;
        // });
    }

    function $postLink() {
        console.log(angular.element($element)[0].parentNode.offsetWidth);
        const graphContainer = angular.element($element)[0];

        if (!graphContainer) return;
        
        initializeGraph(graphContainer);
    }

    function initializeGraph(graphContainer) {
        const containerWidth = graphContainer.parentNode.offsetWidth;

        width = containerWidth - margins.left - margins.right;
        height = 800 - margins.top - margins.bottom;

        tree = d3.layout.tree()
            .size([height, width]);

        diagonal = d3.svg.diagonal()
            .projection((d) => [d.y, d.x]);

        svg = d3.select(graphContainer)
            .append('svg')
            .attr('width', width + margins.right + margins.left)
            .attr('height', height + margins.top + margins.bottom)
            .append('g')
            .attr('transform', `translate(${margins.left}, ${margins.top})`);
    }
}

export default GraphComponent;
