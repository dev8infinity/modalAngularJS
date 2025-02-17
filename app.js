const app = angular.module("myApp", ["ui.bootstrap"]);

app.controller("MainCtrl", function ($scope, $uibModal) {
    $scope.openModal = function () {
        var modalInstance = $uibModal.open({
            templateUrl: "modal-template.html",
            controller: "ModalInstanceCtrl",

            resolve: {
                modalData: function () {
                    return {
                        items: [
                            { text: "Item 1", status: "success" },
                            { text: "Item 2", status: "warning" },
                            { text: "Item 3", status: "error" },
                            { text: "Item 4", status: "success" }
                        ]
                    };
                }
            }
        });

        modalInstance.result.then(
            function () {
                console.log("Modal closed with OK");
            },
            function () {
                console.log("Modal dismissed");
            }
        );
    };
});


app.controller("ModalInstanceCtrl", function($scope, $uibModalInstance, modalData) {
    $scope.modalData = modalData;
    
    $scope.hasError = function() {
        return $scope.modalData.items.some(function(item) {
            return item.status == 'error';
        });
    };
    
    $scope.closeModal = function () {
        $uibModalInstance.close();
    };

});
