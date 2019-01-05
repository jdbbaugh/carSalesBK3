(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const salesByWeek = [{
  "vehicle": {
    "year": 2013,
    "model": "Tanex",
    "make": "Tamp-dax",
    "color": "quartz"
  },
  "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
  "sales_agent": {
    "mobile": "1-584-162-7444",
    "last_name": "Larkin",
    "first_name": "Tiara",
    "email": "ready@gmail.com"
  },
  "purchase_date": "2017-06-07",
  "gross_profit": 210,
  "credit": {
    "credit_provider": "United Services Automobile Assoc.",
    "account": "491697193540559"
  }
}, {
  "vehicle": {
    "year": 2012,
    "model": "Volttanphase",
    "make": "Tinlotis",
    "color": "french fuchsia"
  },
  "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
  "sales_agent": {
    "mobile": "1-573-820-3780",
    "last_name": "Schulist",
    "first_name": "Vada",
    "email": "davin@outlook.com"
  },
  "purchase_date": "2017-08-06",
  "gross_profit": 1886.61,
  "credit": {
    "credit_provider": "TD Group US Holding",
    "account": "494781657570"
  }
}, {
  "vehicle": {
    "year": 2013,
    "model": "Lexi-ton",
    "make": "Ware-com",
    "color": "metallic brown"
  },
  "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
  "sales_agent": {
    "mobile": "1-356-831-5782",
    "last_name": "Leannon",
    "first_name": "Geovanni",
    "email": "need@hotmail.com"
  },
  "purchase_date": "2017-12-27",
  "gross_profit": 154.91,
  "credit": {
    "credit_provider": "State Street Corporation",
    "account": "546417363501851"
  }
}, {
  "vehicle": {
    "year": 2011,
    "model": "Onto-zun",
    "make": "Strongzoom",
    "color": "medium slate blue"
  },
  "sales_id": "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
  "sales_agent": {
    "mobile": "774.020.0247",
    "last_name": "Lang",
    "first_name": "Jovani",
    "email": "spell55@yahoo.com"
  },
  "purchase_date": "2017-03-05",
  "gross_profit": 814.49,
  "credit": {
    "credit_provider": "M&T Bank Corporation",
    "account": "34730046974022"
  }
}, {
  "vehicle": {
    "year": 2014,
    "model": "Blue-run",
    "make": "Kon-flex",
    "color": "lumber"
  },
  "sales_id": "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
  "sales_agent": {
    "mobile": "886.374.3898",
    "last_name": "Feil",
    "first_name": "Kory",
    "email": "ducimus@outlook.com"
  },
  "purchase_date": "2017-02-08",
  "gross_profit": 587.52,
  "credit": {
    "credit_provider": "Atlantic Bank",
    "account": "601149379893233"
  }
}];
var _default = salesByWeek;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _carData = _interopRequireDefault(require("./carData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const carToDom = {
  printToDom() {
    const targetContainer = document.querySelector(".output");
    const inputBox = document.createElement("input");
    inputBox.setAttribute("id", "searchInput");
    targetContainer.appendChild(inputBox);
    const searchInput = document.querySelector("#searchInput");
    searchInput.addEventListener("keypress", event => {
      if (event.charCode === 13) {
        const foundDealer = _carData.default.find(element => {
          console.log(element);
          return element.sales_agent.first_name.includes(event.target.value) || element.sales_agent.last_name.includes(event.target.value) || element.sales_agent.email.includes(event.target.value);
        });

        console.log(foundDealer); // console.log(sale);

        const saleContainer = document.createElement("article");
        saleContainer.classList.add("sales-container");
        targetContainer.appendChild(saleContainer);
        const salesPerson = document.createElement("h2");
        salesPerson.classList.add("salesPerson");
        salesPerson.textContent = `${foundDealer.sales_agent.first_name} ${foundDealer.sales_agent.last_name}`;
        saleContainer.appendChild(salesPerson);
        console.log(foundDealer);

        for (const entry of Object.entries(foundDealer.sales_agent)) {
          console.log(entry);
          const saleInfo = document.createElement("p");
          saleInfo.textContent = `${entry[0]}: ${entry[1]}`;
          saleContainer.appendChild(saleInfo);
        }
      }
    }); // salesByWeek.forEach(sale => {
    //   // console.log(sale);
    //   const saleContainer = document.createElement("article");
    //   saleContainer.classList.add("sales-container");
    //   targetContainer.appendChild(saleContainer);
    //   const salesPerson = document.createElement("h2");
    //   salesPerson.classList.add("salesPerson")
    //   salesPerson.textContent = `${sale.sales_agent.first_name} ${sale.sales_agent.last_name}`
    //   saleContainer.appendChild(salesPerson);
    //   for (const entry of Object.entries(sale.vehicle)) {
    //     // console.log(entry);
    //     const saleInfo = document.createElement("p");
    //     saleInfo.textContent = `${entry[0]}: ${entry[1]}`
    //     saleContainer.appendChild(saleInfo);
    //   };
    //   const profit = document.createElement("h2");
    //   profit.classList.add("profit-container")
    //   profit.textContent= `Profit: $${sale.gross_profit}`;
    //   saleContainer.appendChild(profit);
    //   saleContainer.appendChild(document.createElement("hr"));
    // })
  }

};
var _default = carToDom;
exports.default = _default;

},{"./carData":1}],3:[function(require,module,exports){
"use strict";

var _carToDom = _interopRequireDefault(require("./carToDom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_carToDom.default.printToDom();

},{"./carToDom":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NhckRhdGEuanMiLCIuLi9zY3JpcHRzL2NhclRvRG9tLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsTUFBTSxXQUFXLEdBQUcsQ0FDbEI7QUFDSSxhQUFXO0FBQ1AsWUFBUSxJQUREO0FBRVAsYUFBUyxPQUZGO0FBR1AsWUFBUSxVQUhEO0FBSVAsYUFBUztBQUpGLEdBRGY7QUFPSSxjQUFZLHNDQVBoQjtBQVFJLGlCQUFlO0FBQ1gsY0FBVSxnQkFEQztBQUVYLGlCQUFhLFFBRkY7QUFHWCxrQkFBYyxPQUhIO0FBSVgsYUFBUztBQUpFLEdBUm5CO0FBY0ksbUJBQWlCLFlBZHJCO0FBZUksa0JBQWdCLEdBZnBCO0FBZ0JJLFlBQVU7QUFDTix1QkFBbUIsbUNBRGI7QUFFTixlQUFXO0FBRkw7QUFoQmQsQ0FEa0IsRUFzQmxCO0FBQ0ksYUFBVztBQUNQLFlBQVEsSUFERDtBQUVQLGFBQVMsY0FGRjtBQUdQLFlBQVEsVUFIRDtBQUlQLGFBQVM7QUFKRixHQURmO0FBT0ksY0FBWSxzQ0FQaEI7QUFRSSxpQkFBZTtBQUNYLGNBQVUsZ0JBREM7QUFFWCxpQkFBYSxVQUZGO0FBR1gsa0JBQWMsTUFISDtBQUlYLGFBQVM7QUFKRSxHQVJuQjtBQWNJLG1CQUFpQixZQWRyQjtBQWVJLGtCQUFnQixPQWZwQjtBQWdCSSxZQUFVO0FBQ04sdUJBQW1CLHFCQURiO0FBRU4sZUFBVztBQUZMO0FBaEJkLENBdEJrQixFQTJDbEI7QUFDSSxhQUFXO0FBQ1AsWUFBUSxJQUREO0FBRVAsYUFBUyxVQUZGO0FBR1AsWUFBUSxVQUhEO0FBSVAsYUFBUztBQUpGLEdBRGY7QUFPSSxjQUFZLHNDQVBoQjtBQVFJLGlCQUFlO0FBQ1gsY0FBVSxnQkFEQztBQUVYLGlCQUFhLFNBRkY7QUFHWCxrQkFBYyxVQUhIO0FBSVgsYUFBUztB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O0FBQ0EsUUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixXQUExQjtBQUVBLFFBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaOztBQUNBLGFBQUssTUFBTSxLQUFYLElBQW9CLE1BQU0sQ0FBQyxPQUFQLENBQWUsV0FBVyxDQUFDLFdBQTNCLENBQXBCLEVBQTZEO0FBQzNELFVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsZ0JBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQWpCO0FBQ0EsVUFBQSxRQUFRLENBQUMsV0FBVCxHQUF3QixHQUFFLEtBQUssQ0FBQyxDQUFELENBQUksS0FBSSxLQUFLLENBQUMsQ0FBRCxDQUFJLEVBQWhEO0FBQ0EsVUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixRQUExQjtBQUVEO0FBQ0o7QUFDRixLQTFCRCxFQU5ZLENBbUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQTFEYyxDQUFqQjtlQTZEZSxROzs7Ozs7QUMvRGY7Ozs7QUFFQSxrQkFBUyxVQUFUIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3Qgc2FsZXNCeVdlZWsgPSBbXG4gIHtcbiAgICAgIFwidmVoaWNsZVwiOiB7XG4gICAgICAgICAgXCJ5ZWFyXCI6IDIwMTMsXG4gICAgICAgICAgXCJtb2RlbFwiOiBcIlRhbmV4XCIsXG4gICAgICAgICAgXCJtYWtlXCI6IFwiVGFtcC1kYXhcIixcbiAgICAgICAgICBcImNvbG9yXCI6IFwicXVhcnR6XCJcbiAgICAgIH0sXG4gICAgICBcInNhbGVzX2lkXCI6IFwiNzgyYTIzZmQtOGI4My00NDk3LWI5YTEtNDFmZDliMTU2NDhlXCIsXG4gICAgICBcInNhbGVzX2FnZW50XCI6IHtcbiAgICAgICAgICBcIm1vYmlsZVwiOiBcIjEtNTg0LTE2Mi03NDQ0XCIsXG4gICAgICAgICAgXCJsYXN0X25hbWVcIjogXCJMYXJraW5cIixcbiAgICAgICAgICBcImZpcnN0X25hbWVcIjogXCJUaWFyYVwiLFxuICAgICAgICAgIFwiZW1haWxcIjogXCJyZWFkeUBnbWFpbC5jb21cIlxuICAgICAgfSxcbiAgICAgIFwicHVyY2hhc2VfZGF0ZVwiOiBcIjIwMTctMDYtMDdcIixcbiAgICAgIFwiZ3Jvc3NfcHJvZml0XCI6IDIxMCxcbiAgICAgIFwiY3JlZGl0XCI6IHtcbiAgICAgICAgICBcImNyZWRpdF9wcm92aWRlclwiOiBcIlVuaXRlZCBTZXJ2aWNlcyBBdXRvbW9iaWxlIEFzc29jLlwiLFxuICAgICAgICAgIFwiYWNjb3VudFwiOiBcIjQ5MTY5NzE5MzU0MDU1OVwiXG4gICAgICB9XG4gIH0sXG4gIHtcbiAgICAgIFwidmVoaWNsZVwiOiB7XG4gICAgICAgICAgXCJ5ZWFyXCI6IDIwMTIsXG4gICAgICAgICAgXCJtb2RlbFwiOiBcIlZvbHR0YW5waGFzZVwiLFxuICAgICAgICAgIFwibWFrZVwiOiBcIlRpbmxvdGlzXCIsXG4gICAgICAgICAgXCJjb2xvclwiOiBcImZyZW5jaCBmdWNoc2lhXCJcbiAgICAgIH0sXG4gICAgICBcInNhbGVzX2lkXCI6IFwiYzY3NzU4MTktNWQxNy00MGRiLTk0ZjQtMDA0MjVkYjU5MGVlXCIsXG4gICAgICBcInNhbGVzX2FnZW50XCI6IHtcbiAgICAgICAgICBcIm1vYmlsZVwiOiBcIjEtNTczLTgyMC0zNzgwXCIsXG4gICAgICAgICAgXCJsYXN0X25hbWVcIjogXCJTY2h1bGlzdFwiLFxuICAgICAgICAgIFwiZmlyc3RfbmFtZVwiOiBcIlZhZGFcIixcbiAgICAgICAgICBcImVtYWlsXCI6IFwiZGF2aW5Ab3V0bG9vay5jb21cIlxuICAgICAgfSxcbiAgICAgIFwicHVyY2hhc2VfZGF0ZVwiOiBcIjIwMTctMDgtMDZcIixcbiAgICAgIFwiZ3Jvc3NfcHJvZml0XCI6IDE4ODYuNjEsXG4gICAgICBcImNyZWRpdFwiOiB7XG4gICAgICAgICAgXCJjcmVkaXRfcHJvdmlkZXJcIjogXCJURCBHcm91cCBVUyBIb2xkaW5nXCIsXG4gICAgICAgICAgXCJhY2NvdW50XCI6IFwiNDk0NzgxNjU3NTcwXCJcbiAgICAgIH1cbiAgfSxcbiAge1xuICAgICAgXCJ2ZWhpY2xlXCI6IHtcbiAgICAgICAgICBcInllYXJcIjogMjAxMyxcbiAgICAgICAgICBcIm1vZGVsXCI6IFwiTGV4aS10b25cIixcbiAgICAgICAgICBcIm1ha2VcIjogXCJXYXJlLWNvbVwiLFxuICAgICAgICAgIFwiY29sb3JcIjogXCJtZXRhbGxpYyBicm93blwiXG4gICAgICB9LFxuICAgICAgXCJzYWxlc19pZFwiOiBcImQxMDYzMWU3LTI0Y2EtNDE0Yi1hYzBmLTM0YjI4NmEzMGYxNFwiLFxuICAgICAgXCJzYWxlc19hZ2VudFwiOiB7XG4gICAgICAgICAgXCJtb2JpbGVcIjogXCIxLTM1Ni04MzEtNTc4MlwiLFxuICAgICAgICAgIFwibGFzdF9uYW1lXCI6IFwiTGVhbm5vblwiLFxuICAgICAgICAgIFwiZmlyc3RfbmFtZVwiOiBcIkdlb3Zhbm5pXCIsXG4gICAgICAgICAgXCJlbWFpbFwiOiBcIm5lZWRAaG90bWFpbC5jb21cIlxuICAgICAgfSxcbiAgICAgIFwicHVyY2hhc2VfZGF0ZVwiOiBcIjIwMTctMTItMjdcIixcbiAgICAgIFwiZ3Jvc3NfcHJvZml0XCI6IDE1NC45MSxcbiAgICAgIFwiY3JlZGl0XCI6IHtcbiAgICAgICAgICBcImNyZWRpdF9wcm92aWRlclwiOiBcIlN0YXRlIFN0cmVldCBDb3Jwb3JhdGlvblwiLFxuICAgICAgICAgIFwiYWNjb3VudFwiOiBcIjU0NjQxNzM2MzUwMTg1MVwiXG4gICAgICB9XG4gIH0sXG4gIHtcbiAgICAgIFwidmVoaWNsZVwiOiB7XG4gICAgICAgICAgXCJ5ZWFyXCI6IDIwMTEsXG4gICAgICAgICAgXCJtb2RlbFwiOiBcIk9udG8tenVuXCIsXG4gICAgICAgICAgXCJtYWtlXCI6IFwiU3Ryb25nem9vbVwiLFxuICAgICAgICAgIFwiY29sb3JcIjogXCJtZWRpdW0gc2xhdGUgYmx1ZVwiXG4gICAgICB9LFxuICAgICAgXCJzYWxlc19pZFwiOiBcIjU4NmJmOWQ5LTY3YzItNDZjNy1hNmQxLWRlODQ4NGY2YzQ3NFwiLFxuICAgICAgXCJzYWxlc19hZ2VudFwiOiB7XG4gICAgICAgICAgXCJtb2JpbGVcIjogXCI3NzQuMDIwLjAyNDdcIixcbiAgICAgICAgICBcImxhc3RfbmFtZVwiOiBcIkxhbmdcIixcbiAgICAgICAgICBcImZpcnN0X25hbWVcIjogXCJKb3ZhbmlcIixcbiAgICAgICAgICBcImVtYWlsXCI6IFwic3BlbGw1NUB5YWhvby5jb21cIlxuICAgICAgfSxcbiAgICAgIFwicHVyY2hhc2VfZGF0ZVwiOiBcIjIwMTctMDMtMDVcIixcbiAgICAgIFwiZ3Jvc3NfcHJvZml0XCI6IDgxNC40OSxcbiAgICAgIFwiY3JlZGl0XCI6IHtcbiAgICAgICAgICBcImNyZWRpdF9wcm92aWRlclwiOiBcIk0mVCBCYW5rIENvcnBvcmF0aW9uXCIsXG4gICAgICAgICAgXCJhY2NvdW50XCI6IFwiMzQ3MzAwNDY5NzQwMjJcIlxuICAgICAgfVxuICB9LFxuICB7XG4gICAgICBcInZlaGljbGVcIjoge1xuICAgICAgICAgIFwieWVhclwiOiAyMDE0LFxuICAgICAgICAgIFwibW9kZWxcIjogXCJCbHVlLXJ1blwiLFxuICAgICAgICAgIFwibWFrZVwiOiBcIktvbi1mbGV4XCIsXG4gICAgICAgICAgXCJjb2xvclwiOiBcImx1bWJlclwiXG4gICAgICB9LFxuICAgICAgXCJzYWxlc19pZFwiOiBcImE1MzU4Y2IzLTZkNDctNGFkYi1hMjMyLWQ1YzVkOTFlMjVlY1wiLFxuICAgICAgXCJzYWxlc19hZ2VudFwiOiB7XG4gICAgICAgICAgXCJtb2JpbGVcIjogXCI4ODYuMzc0LjM4OThcIixcbiAgICAgICAgICBcImxhc3RfbmFtZVwiOiBcIkZlaWxcIixcbiAgICAgICAgICBcImZpcnN0X25hbWVcIjogXCJLb3J5XCIsXG4gICAgICAgICAgXCJlbWFpbFwiOiBcImR1Y2ltdXNAb3V0bG9vay5jb21cIlxuICAgICAgfSxcbiAgICAgIFwicHVyY2hhc2VfZGF0ZVwiOiBcIjIwMTctMDItMDhcIixcbiAgICAgIFwiZ3Jvc3NfcHJvZml0XCI6IDU4Ny41MixcbiAgICAgIFwiY3JlZGl0XCI6IHtcbiAgICAgICAgICBcImNyZWRpdF9wcm92aWRlclwiOiBcIkF0bGFudGljIEJhbmtcIixcbiAgICAgICAgICBcImFjY291bnRcIjogXCI2MDExNDkzNzk4OTMyMzNcIlxuICAgICAgfVxuICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IHNhbGVzQnlXZWVrIiwiaW1wb3J0IHNhbGVzQnlXZWVrIGZyb20gXCIuL2NhckRhdGFcIjtcblxuY29uc3QgY2FyVG9Eb20gPSB7XG4gIHByaW50VG9Eb20gKCkge1xuICAgIGNvbnN0IHRhcmdldENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpO1xuICAgIGNvbnN0IGlucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0Qm94LnNldEF0dHJpYnV0ZShcImlkXCIsXCJzZWFyY2hJbnB1dFwiKTtcbiAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRCb3gpO1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hJbnB1dFwiKTtcbiAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmNoYXJDb2RlID09PSAxMykge1xuICAgICAgICBjb25zdCBmb3VuZERlYWxlciA9IHNhbGVzQnlXZWVrLmZpbmQoZWxlbWVudCA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQuc2FsZXNfYWdlbnQuZmlyc3RfbmFtZS5pbmNsdWRlcyhldmVudC50YXJnZXQudmFsdWUpIHx8IGVsZW1lbnQuc2FsZXNfYWdlbnQubGFzdF9uYW1lLmluY2x1ZGVzKGV2ZW50LnRhcmdldC52YWx1ZSkgfHwgZWxlbWVudC5zYWxlc19hZ2VudC5lbWFpbC5pbmNsdWRlcyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhmb3VuZERlYWxlcik7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNhbGUpO1xuICAgICAgICAgIGNvbnN0IHNhbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICAgICAgICBzYWxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzYWxlcy1jb250YWluZXJcIik7XG4gICAgICAgICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNhbGVDb250YWluZXIpO1xuICAgICAgICAgIGNvbnN0IHNhbGVzUGVyc29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICAgIHNhbGVzUGVyc29uLmNsYXNzTGlzdC5hZGQoXCJzYWxlc1BlcnNvblwiKVxuICAgICAgICAgIHNhbGVzUGVyc29uLnRleHRDb250ZW50ID0gYCR7Zm91bmREZWFsZXIuc2FsZXNfYWdlbnQuZmlyc3RfbmFtZX0gJHtmb3VuZERlYWxlci5zYWxlc19hZ2VudC5sYXN0X25hbWV9YFxuICAgICAgICAgIHNhbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2FsZXNQZXJzb24pO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coZm91bmREZWFsZXIpXG4gICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBPYmplY3QuZW50cmllcyhmb3VuZERlYWxlci5zYWxlc19hZ2VudCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVudHJ5KTtcbiAgICAgICAgICAgIGNvbnN0IHNhbGVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBzYWxlSW5mby50ZXh0Q29udGVudCA9IGAke2VudHJ5WzBdfTogJHtlbnRyeVsxXX1gXG4gICAgICAgICAgICBzYWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhbGVJbmZvKTtcblxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuICAgIC8vIHNhbGVzQnlXZWVrLmZvckVhY2goc2FsZSA9PiB7XG4gICAgLy8gICAvLyBjb25zb2xlLmxvZyhzYWxlKTtcbiAgICAvLyAgIGNvbnN0IHNhbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICAvLyAgIHNhbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNhbGVzLWNvbnRhaW5lclwiKTtcbiAgICAvLyAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZChzYWxlQ29udGFpbmVyKTtcbiAgICAvLyAgIGNvbnN0IHNhbGVzUGVyc29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIC8vICAgc2FsZXNQZXJzb24uY2xhc3NMaXN0LmFkZChcInNhbGVzUGVyc29uXCIpXG4gICAgLy8gICBzYWxlc1BlcnNvbi50ZXh0Q29udGVudCA9IGAke3NhbGUuc2FsZXNfYWdlbnQuZmlyc3RfbmFtZX0gJHtzYWxlLnNhbGVzX2FnZW50Lmxhc3RfbmFtZX1gXG4gICAgLy8gICBzYWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhbGVzUGVyc29uKTtcblxuICAgIC8vICAgZm9yIChjb25zdCBlbnRyeSBvZiBPYmplY3QuZW50cmllcyhzYWxlLnZlaGljbGUpKSB7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGVudHJ5KTtcbiAgICAvLyAgICAgY29uc3Qgc2FsZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAvLyAgICAgc2FsZUluZm8udGV4dENvbnRlbnQgPSBgJHtlbnRyeVswXX06ICR7ZW50cnlbMV19YFxuICAgIC8vICAgICBzYWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhbGVJbmZvKTtcbiAgICAvLyAgIH07XG4gICAgLy8gICBjb25zdCBwcm9maXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgLy8gICBwcm9maXQuY2xhc3NMaXN0LmFkZChcInByb2ZpdC1jb250YWluZXJcIilcbiAgICAvLyAgIHByb2ZpdC50ZXh0Q29udGVudD0gYFByb2ZpdDogJCR7c2FsZS5ncm9zc19wcm9maXR9YDtcbiAgICAvLyAgIHNhbGVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZml0KTtcbiAgICAvLyAgIHNhbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpKTtcbiAgICAvLyB9KVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyVG9Eb21cbiIsImltcG9ydCBjYXJUb0RvbSBmcm9tIFwiLi9jYXJUb0RvbVwiXG5cbmNhclRvRG9tLnByaW50VG9Eb20oKVxuXG4iXX0=
