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
async function sendVal(nums,name) {
  const tabId = await getTab();
  chrome.tabs.sendMessage(tabId,{"action":"input","nums":nums,"name":name});
  console.log(nums,name,tabId);
}

function getTab() {
  return new Promise(resolve => {
    let tabId;
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
      tabId = tabs[0].id;
      console.log(tabId);
      resolve(tabId);
    });
  })
};
