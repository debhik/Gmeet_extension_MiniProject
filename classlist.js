//let options = [];
chrome.storage.sync.get(['classarray'], function(result) {
  let obj=[];
  if(result.classarray===undefined){
    alert("Seems like vacation! No classes saved.");
  }
  else{
   let select = document.getElementById("classlist");
    obj=result.classarray;
    let i;
    for(i=0;i<obj.length;i++){
      let opt=obj[i].meetingId.substring(0,12)+'_'+obj[i].meetingname;
      console.log(opt);
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  }
});

let val;
document.getElementById('classlist').addEventListener('change', function() {
  val=this.value;
  console.log('You selected: ', val);
});
let btn = document.getElementById("download");
btn.addEventListener("click", function() {
    console.log("into the classlist js");
    sendData();
});
function sendData() {
    chrome.runtime.sendMessage({ dist: "classlist",text:val}, res => {
    });
    console.log('classlist: data sent');
}
