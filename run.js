app
.run(['$rootScope', '$timeout', '$state',
    function($rootScope, $timeout, $state) {
      $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        e.preventDefault();
        console.info('start transition:', fromState.name, '->', toState.name);
        $timeout(function() {
          $state.go(toState, toParams, {notify: false})
          .then(function() {
            $rootScope.$broadcast('$stateChangeSuccess', toState, toParams, fromState, fromParams);
          })
        }, 2000);
      })
    }
  ]);