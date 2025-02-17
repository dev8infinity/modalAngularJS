
app.controller("MainCtrl", function ($scope, $uibModal) {
    $scope.openModal = function () {
        $uibModal.open({
            templateUrl: "modal-template.html",
            controller: "ModalController",

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
    };
});


app.controller("ModalController", function($scope, $uibModalInstance, modalData) {
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
