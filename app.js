(function () {
  "use strict";
  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

  function ToBuyController(ShoppingListCheckOffService) {
    var ctrl1 = this;
    ctrl1.items = ShoppingListCheckOffService.toBuyItems();
    ctrl1.message = "Everything is bought!";

    ctrl1.itemBought = function (itemIndex) {
      ShoppingListCheckOffService.updateLists(itemIndex);
    };
  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var ctrl2 = this;
    ctrl2.items = ShoppingListCheckOffService.alreadyBoughtItems();
    ctrl2.message = "Nothing bought yet";
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuy = [
      {
        name: "mango",
        quantity: "2 kg"
      },
      {
        name: "banana",
        quantity: "1 dozen"
      },
      {
        name: "papaya",
        quantity: "1 kg"
      },
      {
        name: "potato",
        quantity: "1 kg"
      },
      {
        name: "onion",
        quantity: "3 kg"
      },
      {
        name: "orange",
        quantity: "1 kg"
      },
      {
        name: "sweet corn",
        quantity: "500 gm"
      }
    ];
    var alreadyBought = [
      // {
      //   name: "litchi",
      //   quantity: "1 kg"
      // }
    ];

    service.toBuyItems = function () {
      return toBuy;
    };

    service.alreadyBoughtItems = function () {
      return alreadyBought;
    };

    service.updateLists = function (index) {
      console.log("I am in : " + index);
      var item = toBuy[index];
      console.log("removed item is: " + item);
      toBuy.splice(index, 1);
      alreadyBought.push(item);
    };
  }
})();
