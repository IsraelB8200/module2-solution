(function () {
  'use strict';

  var toBuyArray = [
    {
      name: "Milks",
      quantity : "4"
    },
    {
      name: "Breads",
      quantity : "2"
    },
    {
      name: "Cookies",
      quantity : "10"
    },
    {
      name: "Chocolates",
      quantity : "5"
    },
    {
      name: "Suger",
      quantity : "2"
    },
    {
      name: "Salt",
      quantity : "1"
    },
  ];

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyCtrl = this;

    buyCtrl.buyList = ShoppingListCheckOffService.getBuyItems();

    buyCtrl.buy = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;

    boughtCtrl.boughtList = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = toBuyArray;
    var boughtItems = [];

    service.getBuyItems = function () {
      return toBuyItems;
    }

    service.getBoughtItems = function () {
      return boughtItems;
    }

    service.buyItem = function (itemIndex) {
      console.log(itemIndex);
      if (itemIndex != -1) {
        var itemToBuy = toBuyItems.splice(itemIndex, 1);
        boughtItems.push(itemToBuy[0]);
      }
    }
  }

})();
