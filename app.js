window.onload = () => {
  var getKey = document.getElementById("btnAll").children;
  for(var i = 0; i < getKey.length; i++){
    getKey[i].onclick = 
      function(){
        inputKey(this.innerHTML)
    }
  }
}

var inputKey = (key) => {
  var result = document.getElementById("result");
  var valText = result.value;
  console.log(key);
  if(key === 'OK'){
    //Enter
  }else if(key == 'DEL'){
    //Delete
    result.value = valText.slice(0,-1);
  }else{
    //key of nums
    result.value = valText + key
  }
}
