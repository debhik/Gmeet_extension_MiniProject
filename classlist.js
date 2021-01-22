var btn = document.getElementById("download");
btn.addEventListener("click", function() {
    console.log("into the classlist js");
    sendData();
});
function sendData() {
    chrome.runtime.sendMessage({ dist: "classlist"}, res => {
        console.log(res);
    });
    console.log('classlist: data sent');
}
