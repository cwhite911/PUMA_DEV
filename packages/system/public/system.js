'use strict';

angular.module('mean.system', [
    'ui.router',
    'mean-factory-interceptor',
    'autocomplete',
    'agsserver',
    'leaflet-directive',
    'angularFileUpload',
    'ngCookies'])
    .value('projectConstants', {
      version: 0.1,
      documentBaseUrl: 'http://gis.raleighnc.gov/asbuilts/PROJECT_TRACKING/'
    })
  .run(['$rootScope', function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      var toPath = toState.url;
      toPath = toPath.replace(new RegExp('/', 'g'), '');
      toPath = toPath.replace(new RegExp(':', 'g'),'-');
      $rootScope.state = toPath;
      if($rootScope.state === '' ) {
        $rootScope.state = 'firstPage';
      }
    });
  }])
;
