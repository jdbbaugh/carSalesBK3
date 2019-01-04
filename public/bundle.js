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

    _carData.default.forEach(sale => {
      console.log(sale);
      const saleContainer = document.createElement("article");
      saleContainer.classList.add("sales-container");
      targetContainer.appendChild(saleContainer);
      const salesPerson = document.createElement("h2");
      salesPerson.classList.add("salesPerson");
      salesPerson.textContent = `${sale.sales_agent.first_name} ${sale.sales_agent.last_name}`;
      saleContainer.appendChild(salesPerson);

      for (const entry of Object.entries(sale.vehicle)) {
        // console.log(entry);
        const saleInfo = document.createElement("p");
        saleInfo.textContent = `${entry[0]}: ${entry[1]}`;
        saleContainer.appendChild(saleInfo);
      }

      ;
      const profit = document.createElement("h2");
      profit.classList.add("profit-container");
      profit.textContent = `Profit: $${sale.gross_profit}`;
      saleContainer.appendChild(profit);
      saleContainer.appendChild(document.createElement("hr"));
    });
  },

  searchForSalesman() {
    const targetContainer = document.querySelector(".output");
    const inputElement = document.createElement("input");
    inputElement.setAttribute("id", "searchInput");
    targetContainer.appendChild(inputElement);
  }

};
var _default = carToDom;
exports.default = _default;

},{"./carData":1}],3:[function(require,module,exports){
"use strict";

var _carToDom = _interopRequireDefault(require("./carToDom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_carToDom.default.searchForSalesman();

const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("keypress", event => {
  console.log(event.target.value);

  if (event.charCode === 13) {
    const searchTerm = event.target.value;
    salesByWeek.forEach(sale => {});
  }
});

},{"./carToDom":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NhckRhdGEuanMiLCIuLi9zY3JpcHRzL2NhclRvRG9tLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsTUFBTSxXQUFXLEdBQUcsQ0FDbEI7QUFDSSxhQUFXO0FBQ1AsWUFBUSxJQUREO0FBRVAsYUFBUyxPQUZGO0FBR1AsWUFBUSxVQUhEO0FBSVAsYUFBUztBQUpGLEdBRGY7QUFPSSxjQUFZLHNDQVBoQjtBQVFJLGlCQUFlO0FBQ1gsY0FBVSxnQkFEQztBQUVYLGlCQUFhLFFBRkY7QUFHWCxrQkFBYyxPQUhIO0FBSVgsYUFBUztBQUpFLEdBUm5CO0FBY0ksbUJBQWlCLFlBZHJCO0FBZUksa0JBQWdCLEdBZnBCO0FBZ0JJLFlBQVU7QUFDTix1QkFBbUIsbUNBRGI7QUFFTixlQUFXO0FBRkw7QUFoQmQsQ0FEa0IsRUFzQmxCO0FBQ0ksYUFBVztBQUNQLFlBQVEsSUFERDtBQUVQLGFBQVMsY0FGRjtBQUdQLFlBQVEsVUFIRDtBQUlQLGFBQVM7QUFKRixHQURmO0FBT0ksY0FBWSxzQ0FQaEI7QUFRSSxpQkFBZTtBQUNYLGNBQVUsZ0JBREM7QUFFWCxpQkFBYSxVQUZGO0FBR1gsa0JBQWMsTUFISDtBQUlYLGFBQVM7QUFKRSxHQVJuQjtBQWNJLG1CQUFpQixZQWRyQjtBQWVJLGtCQUFnQixPQWZwQjtBQWdCSSxZQUFVO0FBQ04sdUJBQW1CLHFCQURiO0FBRU4sZUFBVztBQUZMO0FBaEJkLENBdEJrQixFQTJDbEI7QUFDSSxhQUFXO0FBQ1AsWUFBUSxJQUREO0FBRVAsYUFBUyxVQUZGO0FBR1AsWUFBUSxVQUhEO0FBSVAsYUFBUztBQUpGLEdBRGY7QUFPSSxjQUFZLHNDQVBoQjtBQVFJLGlCQUFlO0FBQ1gsY0FBVSxnQkFEQztBQUVYLGlCQUFhLFNBRkY7QUFHWCxrQkFBYyxVQUhIO0FBSVgsYUFBUztB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VUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBeEI7QUFDQSxVQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFyQjtBQUNBLElBQUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsSUFBMUIsRUFBZ0MsYUFBaEM7QUFDQSxJQUFBLGVBQWUsQ0FBQyxXQUFoQixDQUE0QixZQUE1QjtBQUNEOztBQS9CYyxDQUFqQjtlQWtDZSxROzs7Ozs7QUNwQ2Y7Ozs7QUFFQSxrQkFBUyxpQkFBVDs7QUFFQSxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUFwQjtBQUNBLFdBQVcsQ0FBQyxnQkFBWixDQUE2QixVQUE3QixFQUEyQyxLQUFELElBQVc7QUFDbkQsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBekI7O0FBQ0EsTUFBSSxLQUFLLENBQUMsUUFBTixLQUFtQixFQUF2QixFQUEyQjtBQUN6QixVQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWhDO0FBRUEsSUFBQSxXQUFXLENBQUMsT0FBWixDQUFvQixJQUFJLElBQUksQ0FFM0IsQ0FGRDtBQUdEO0FBQ0YsQ0FURCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IHNhbGVzQnlXZWVrID0gW1xuICB7XG4gICAgICBcInZlaGljbGVcIjoge1xuICAgICAgICAgIFwieWVhclwiOiAyMDEzLFxuICAgICAgICAgIFwibW9kZWxcIjogXCJUYW5leFwiLFxuICAgICAgICAgIFwibWFrZVwiOiBcIlRhbXAtZGF4XCIsXG4gICAgICAgICAgXCJjb2xvclwiOiBcInF1YXJ0elwiXG4gICAgICB9LFxuICAgICAgXCJzYWxlc19pZFwiOiBcIjc4MmEyM2ZkLThiODMtNDQ5Ny1iOWExLTQxZmQ5YjE1NjQ4ZVwiLFxuICAgICAgXCJzYWxlc19hZ2VudFwiOiB7XG4gICAgICAgICAgXCJtb2JpbGVcIjogXCIxLTU4NC0xNjItNzQ0NFwiLFxuICAgICAgICAgIFwibGFzdF9uYW1lXCI6IFwiTGFya2luXCIsXG4gICAgICAgICAgXCJmaXJzdF9uYW1lXCI6IFwiVGlhcmFcIixcbiAgICAgICAgICBcImVtYWlsXCI6IFwicmVhZHlAZ21haWwuY29tXCJcbiAgICAgIH0sXG4gICAgICBcInB1cmNoYXNlX2RhdGVcIjogXCIyMDE3LTA2LTA3XCIsXG4gICAgICBcImdyb3NzX3Byb2ZpdFwiOiAyMTAsXG4gICAgICBcImNyZWRpdFwiOiB7XG4gICAgICAgICAgXCJjcmVkaXRfcHJvdmlkZXJcIjogXCJVbml0ZWQgU2VydmljZXMgQXV0b21vYmlsZSBBc3NvYy5cIixcbiAgICAgICAgICBcImFjY291bnRcIjogXCI0OTE2OTcxOTM1NDA1NTlcIlxuICAgICAgfVxuICB9LFxuICB7XG4gICAgICBcInZlaGljbGVcIjoge1xuICAgICAgICAgIFwieWVhclwiOiAyMDEyLFxuICAgICAgICAgIFwibW9kZWxcIjogXCJWb2x0dGFucGhhc2VcIixcbiAgICAgICAgICBcIm1ha2VcIjogXCJUaW5sb3Rpc1wiLFxuICAgICAgICAgIFwiY29sb3JcIjogXCJmcmVuY2ggZnVjaHNpYVwiXG4gICAgICB9LFxuICAgICAgXCJzYWxlc19pZFwiOiBcImM2Nzc1ODE5LTVkMTctNDBkYi05NGY0LTAwNDI1ZGI1OTBlZVwiLFxuICAgICAgXCJzYWxlc19hZ2VudFwiOiB7XG4gICAgICAgICAgXCJtb2JpbGVcIjogXCIxLTU3My04MjAtMzc4MFwiLFxuICAgICAgICAgIFwibGFzdF9uYW1lXCI6IFwiU2NodWxpc3RcIixcbiAgICAgICAgICBcImZpcnN0X25hbWVcIjogXCJWYWRhXCIsXG4gICAgICAgICAgXCJlbWFpbFwiOiBcImRhdmluQG91dGxvb2suY29tXCJcbiAgICAgIH0sXG4gICAgICBcInB1cmNoYXNlX2RhdGVcIjogXCIyMDE3LTA4LTA2XCIsXG4gICAgICBcImdyb3NzX3Byb2ZpdFwiOiAxODg2LjYxLFxuICAgICAgXCJjcmVkaXRcIjoge1xuICAgICAgICAgIFwiY3JlZGl0X3Byb3ZpZGVyXCI6IFwiVEQgR3JvdXAgVVMgSG9sZGluZ1wiLFxuICAgICAgICAgIFwiYWNjb3VudFwiOiBcIjQ5NDc4MTY1NzU3MFwiXG4gICAgICB9XG4gIH0sXG4gIHtcbiAgICAgIFwidmVoaWNsZVwiOiB7XG4gICAgICAgICAgXCJ5ZWFyXCI6IDIwMTMsXG4gICAgICAgICAgXCJtb2RlbFwiOiBcIkxleGktdG9uXCIsXG4gICAgICAgICAgXCJtYWtlXCI6IFwiV2FyZS1jb21cIixcbiAgICAgICAgICBcImNvbG9yXCI6IFwibWV0YWxsaWMgYnJvd25cIlxuICAgICAgfSxcbiAgICAgIFwic2FsZXNfaWRcIjogXCJkMTA2MzFlNy0yNGNhLTQxNGItYWMwZi0zNGIyODZhMzBmMTRcIixcbiAgICAgIFwic2FsZXNfYWdlbnRcIjoge1xuICAgICAgICAgIFwibW9iaWxlXCI6IFwiMS0zNTYtODMxLTU3ODJcIixcbiAgICAgICAgICBcImxhc3RfbmFtZVwiOiBcIkxlYW5ub25cIixcbiAgICAgICAgICBcImZpcnN0X25hbWVcIjogXCJHZW92YW5uaVwiLFxuICAgICAgICAgIFwiZW1haWxcIjogXCJuZWVkQGhvdG1haWwuY29tXCJcbiAgICAgIH0sXG4gICAgICBcInB1cmNoYXNlX2RhdGVcIjogXCIyMDE3LTEyLTI3XCIsXG4gICAgICBcImdyb3NzX3Byb2ZpdFwiOiAxNTQuOTEsXG4gICAgICBcImNyZWRpdFwiOiB7XG4gICAgICAgICAgXCJjcmVkaXRfcHJvdmlkZXJcIjogXCJTdGF0ZSBTdHJlZXQgQ29ycG9yYXRpb25cIixcbiAgICAgICAgICBcImFjY291bnRcIjogXCI1NDY0MTczNjM1MDE4NTFcIlxuICAgICAgfVxuICB9LFxuICB7XG4gICAgICBcInZlaGljbGVcIjoge1xuICAgICAgICAgIFwieWVhclwiOiAyMDExLFxuICAgICAgICAgIFwibW9kZWxcIjogXCJPbnRvLXp1blwiLFxuICAgICAgICAgIFwibWFrZVwiOiBcIlN0cm9uZ3pvb21cIixcbiAgICAgICAgICBcImNvbG9yXCI6IFwibWVkaXVtIHNsYXRlIGJsdWVcIlxuICAgICAgfSxcbiAgICAgIFwic2FsZXNfaWRcIjogXCI1ODZiZjlkOS02N2MyLTQ2YzctYTZkMS1kZTg0ODRmNmM0NzRcIixcbiAgICAgIFwic2FsZXNfYWdlbnRcIjoge1xuICAgICAgICAgIFwibW9iaWxlXCI6IFwiNzc0LjAyMC4wMjQ3XCIsXG4gICAgICAgICAgXCJsYXN0X25hbWVcIjogXCJMYW5nXCIsXG4gICAgICAgICAgXCJmaXJzdF9uYW1lXCI6IFwiSm92YW5pXCIsXG4gICAgICAgICAgXCJlbWFpbFwiOiBcInNwZWxsNTVAeWFob28uY29tXCJcbiAgICAgIH0sXG4gICAgICBcInB1cmNoYXNlX2RhdGVcIjogXCIyMDE3LTAzLTA1XCIsXG4gICAgICBcImdyb3NzX3Byb2ZpdFwiOiA4MTQuNDksXG4gICAgICBcImNyZWRpdFwiOiB7XG4gICAgICAgICAgXCJjcmVkaXRfcHJvdmlkZXJcIjogXCJNJlQgQmFuayBDb3Jwb3JhdGlvblwiLFxuICAgICAgICAgIFwiYWNjb3VudFwiOiBcIjM0NzMwMDQ2OTc0MDIyXCJcbiAgICAgIH1cbiAgfSxcbiAge1xuICAgICAgXCJ2ZWhpY2xlXCI6IHtcbiAgICAgICAgICBcInllYXJcIjogMjAxNCxcbiAgICAgICAgICBcIm1vZGVsXCI6IFwiQmx1ZS1ydW5cIixcbiAgICAgICAgICBcIm1ha2VcIjogXCJLb24tZmxleFwiLFxuICAgICAgICAgIFwiY29sb3JcIjogXCJsdW1iZXJcIlxuICAgICAgfSxcbiAgICAgIFwic2FsZXNfaWRcIjogXCJhNTM1OGNiMy02ZDQ3LTRhZGItYTIzMi1kNWM1ZDkxZTI1ZWNcIixcbiAgICAgIFwic2FsZXNfYWdlbnRcIjoge1xuICAgICAgICAgIFwibW9iaWxlXCI6IFwiODg2LjM3NC4zODk4XCIsXG4gICAgICAgICAgXCJsYXN0X25hbWVcIjogXCJGZWlsXCIsXG4gICAgICAgICAgXCJmaXJzdF9uYW1lXCI6IFwiS29yeVwiLFxuICAgICAgICAgIFwiZW1haWxcIjogXCJkdWNpbXVzQG91dGxvb2suY29tXCJcbiAgICAgIH0sXG4gICAgICBcInB1cmNoYXNlX2RhdGVcIjogXCIyMDE3LTAyLTA4XCIsXG4gICAgICBcImdyb3NzX3Byb2ZpdFwiOiA1ODcuNTIsXG4gICAgICBcImNyZWRpdFwiOiB7XG4gICAgICAgICAgXCJjcmVkaXRfcHJvdmlkZXJcIjogXCJBdGxhbnRpYyBCYW5rXCIsXG4gICAgICAgICAgXCJhY2NvdW50XCI6IFwiNjAxMTQ5Mzc5ODkzMjMzXCJcbiAgICAgIH1cbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBzYWxlc0J5V2VlayIsImltcG9ydCBzYWxlc0J5V2VlayBmcm9tIFwiLi9jYXJEYXRhXCI7XG5cbmNvbnN0IGNhclRvRG9tID0ge1xuICBwcmludFRvRG9tICgpIHtcbiAgICBjb25zdCB0YXJnZXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcbiAgICBzYWxlc0J5V2Vlay5mb3JFYWNoKHNhbGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coc2FsZSk7XG4gICAgICBjb25zdCBzYWxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgICBzYWxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzYWxlcy1jb250YWluZXJcIik7XG4gICAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2FsZUNvbnRhaW5lcik7XG4gICAgICBjb25zdCBzYWxlc1BlcnNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgIHNhbGVzUGVyc29uLmNsYXNzTGlzdC5hZGQoXCJzYWxlc1BlcnNvblwiKVxuICAgICAgc2FsZXNQZXJzb24udGV4dENvbnRlbnQgPSBgJHtzYWxlLnNhbGVzX2FnZW50LmZpcnN0X25hbWV9ICR7c2FsZS5zYWxlc19hZ2VudC5sYXN0X25hbWV9YFxuICAgICAgc2FsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzYWxlc1BlcnNvbik7XG5cbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgT2JqZWN0LmVudHJpZXMoc2FsZS52ZWhpY2xlKSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbnRyeSk7XG4gICAgICAgIGNvbnN0IHNhbGVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHNhbGVJbmZvLnRleHRDb250ZW50ID0gYCR7ZW50cnlbMF19OiAke2VudHJ5WzFdfWBcbiAgICAgICAgc2FsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzYWxlSW5mbyk7XG4gICAgICB9O1xuICAgICAgY29uc3QgcHJvZml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgcHJvZml0LmNsYXNzTGlzdC5hZGQoXCJwcm9maXQtY29udGFpbmVyXCIpXG4gICAgICBwcm9maXQudGV4dENvbnRlbnQ9IGBQcm9maXQ6ICQke3NhbGUuZ3Jvc3NfcHJvZml0fWA7XG4gICAgICBzYWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2ZpdCk7XG4gICAgICBzYWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKSk7XG4gICAgfSlcbiAgfSxcbiAgc2VhcmNoRm9yU2FsZXNtYW4gKCkge1xuICAgIGNvbnN0IHRhcmdldENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpO1xuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWFyY2hJbnB1dFwiKTtcbiAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyVG9Eb21cbiIsImltcG9ydCBjYXJUb0RvbSBmcm9tIFwiLi9jYXJUb0RvbVwiXG5cbmNhclRvRG9tLnNlYXJjaEZvclNhbGVzbWFuKCk7XG5cbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hJbnB1dFwiKTtcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAgKGV2ZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgaWYgKGV2ZW50LmNoYXJDb2RlID09PSAxMykge1xuICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBldmVudC50YXJnZXQudmFsdWVcblxuICAgIHNhbGVzQnlXZWVrLmZvckVhY2goc2FsZSA9PiB7XG5cbiAgICB9KTtcbiAgfVxufSkiXX0=
