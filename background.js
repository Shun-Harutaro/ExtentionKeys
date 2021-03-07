let name,nums;
chrome.extension.onRequest.addListener(
  (req, sender, res) => {
    switch(req.action){
      case "get":
        name = req.name;
        console.log('corrent: '+name);
        break;
      case "send":
        nums = req.nums;
        console.log('Num: '+nums);
        sendVal(nums,name);
        break;
    }
  }
)
function sendVal(nums,name) {
  chrome.extension.sendRequest({"action":"input","nums":nums,"name":name});
  console.log(nums,name);
}
