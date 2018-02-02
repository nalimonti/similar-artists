import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNames from '../../services/randomNames.service';
import httpService from '../../services/httpService.service';
import greeting    from '../../directives/greeting.directive';
import graphComponents from '../../components/graphComponents.module';


export default angular.module('app.home', [
    uirouter,
    randomNames,
    greeting,
    httpService,
    graphComponents
])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
