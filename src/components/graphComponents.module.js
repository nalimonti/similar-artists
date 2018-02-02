import angular from 'angular';
import GraphComponent from './graph.component';

export default angular.module('app.graphComponents', [])
    .component('graph', GraphComponent)
    .name;

