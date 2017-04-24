angular.module('userControllers', [])

.controller('regCtrl', function ($http, $location) {
    
    var app = this;

    this.regUser = function (regData) {

        //console.log(this.regData);
        app.errorMessage = false;
        app.loading = true;

        $http.post('/api/users', this.regData).then(function (data) {
            console.log(data);
            if (data.data.success) {
                app.loading = false;
                app.successMessage = data.data.message;
                $location.path('/');

            } else {
                app.loading= false;
                app.errorMessage  = data.data.message;
            }
        });
    };

});