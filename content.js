const elements = document.querySelectorAll('input');

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(event) {
        chrome.extension.sendRequest({"action":"get", "name": this.name});
    });
}

chrome.runtime.onMessage.addListener((req, sender, res) => {
    switch(req.action){
      case "input":
        const nums = req.nums;
        const name = req.name;
        console.log(nums,name);
        break;
    }
  }
)
