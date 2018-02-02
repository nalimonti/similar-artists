import 'bootstrap/dist/css/bootstrap.css';
import 'datatables.net-bs/css/dataTables.bootstrap.css';
import 'datatables.net-buttons-bs/css/buttons.bootstrap.css';
import 'datatables.net-select-bs/css/select.bootstrap.css';

import angular from 'angular';

import 'datatables.net';
import 'datatables.net-bs';
import datatables from 'angular-datatables';

import 'datatables.net-buttons';
import 'datatables.net-buttons-bs';
import 'datatables.net-select';
import 'angular-datatables/dist/plugins/buttons/angular-datatables.buttons';
import uirouter from 'angular-ui-router';
import 'd3';

import routing from './app.config';
import home from './features/home';

angular.module('app', [
    datatables,
    // 'datatables',
    // 'datatables.bootstrap',
    // 'datatables.buttons',
    // 'datatables.select',
    uirouter,
    home
])
  .config(routing);
