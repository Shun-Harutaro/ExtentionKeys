window.onload = () => {
  const getKey = document.getElementById("btnAll").children;
  for(let i = 0; i < getKey.length; i++){
    getKey[i].onclick = 
      function(){
        inputKey(this.innerHTML)
    }
  }
}

var inputKey = (key) => {
  let result = document.getElementById("result");
  const valText = result.value;
  console.log(key);
  if(key == 'OK'){
    //Enter
    sendVal(valText);
  }else if(key == 'DEL'){
    //Delete
    result.value = valText.slice(0,-1);
  }else{
    //key of nums
    result.value = valText + key
  }
}

const sendVal = (val) => {
  chrome.extension.sendRequest({"action":"send", "nums":val})
}
