angular.module('userControllers', ['userServices'])

.controller('regCtrl', function ($http, $location, $timeout, User) {
    
    var app = this;

    this.regUser = function (regData) {

        //console.log(this.regData);
        app.errorMessage = false;
        app.loading = true;

         User.create(app.regData).then(function (data) {
            console.log(data);
            if (data.data.success) {
                app.loading = false;
                app.successMessage = data.data.message + ' . . . Redirecting';
                $timeout(function(){
                    $location.path('/');
                }, 2000);
                

            } else {
                app.loading= false;
                app.errorMessage  = data.data.message;
            }
        });
    };

});