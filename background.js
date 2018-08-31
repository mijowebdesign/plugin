
  var urlList =[];
  var tabDiscount = '';

//primer poziva
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        ;
        // JSON.parse does not evaluate the attacker's scripts.
        var resp = JSON.parse(xhr.responseText);
    console.log(resp);
      }
    }
    xhr.send();


// dobijemo iz JSON-a ovakav niz
var urlDiscList = [
  {url:'https://www.google.com/*',
  discount:'%.01'},
  {url:'https://www.b92.net/*',
  discount:'Eur.02'},
  {url:'http://www.mijowebdesign.com/*',
  discount:'Eur.03'}

];


urlDiscList.forEach(function (e) {

chrome.tabs.onActivated.addListener(function (tabId){
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'status':"complete",'url':e.url  }, function (tabs) {
      chrome.browserAction.setBadgeText({text:"!", tabId: tabs[0].id}, function(){
        console.log("set badge txt");

        // stavi stavi urlDiscList u storage da bi ga uzeo u popup.js
          chrome.storage.sync.set({disc: e.discount}, function() {
          console.log("The storage value is:" + e.discount);
        });
      });
  });
});

chrome.tabs.onUpdated.addListener(function (tabId){
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'status':"complete",'url':e.url  }, function (tabs) {
      chrome.browserAction.setBadgeText({text:"!", tabId: tabs[0].id}, function(){
        console.log("set badge txt");

        // stavi stavi urlDiscList u storage da bi ga uzeo u popup.js
          chrome.storage.sync.set({disc: e.discount}, function() {
          console.log("The storage value is:" + e.discount);
        });
      });
  });
});

});
//forEach end
