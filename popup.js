let infoTxt = document.getElementById('infoTxt');

chrome.storage.sync.get(['disc'], function(result) {
         infoTxt.innerHTML = "Earn with affiliateSite on this page!" +" "+ result.disc;
       });


  changeColor.style.backgroundColor = '#3aa757';
  changeColor.setAttribute('value', data.color);
