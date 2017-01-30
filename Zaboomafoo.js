
'using strict';

function refreshList() {
    var imagesList = document.getElementsByTagName('img');

    if (imagesList) {
        Array.from(imagesList).forEach(function (element) {
            element.src = chrome.extension.getURL("/res/Zaboomafoo.jpg");
        })
    }
}


var target = document.querySelector('body');
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        refreshList();
    })
});

var config = { attributes: true, childList: true, characterData: true };

observer.observe(target, config);