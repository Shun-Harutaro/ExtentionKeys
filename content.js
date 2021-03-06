var elements = document.querySelectorAll('input');

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(event) {
        chrome.extension.sendRequest({"name": this.name});
    });
}
