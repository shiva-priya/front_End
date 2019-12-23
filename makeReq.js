var startIndex = 0;
var obj;
var r;

window.onload = doReq();


function doReq() {
    const container = document.createElement('div');
    container.setAttribute('class', 'contain');
    var url = "https://randomuser.me/api/?results=100";
    const req = new XMLHttpRequest();
    req.open("GET", url);
    req.onload = function () {
        obj = JSON.parse(this.response);
        r = obj["results"];
        process(r);
    }
    req.send();

}

window.onscroll=function()
{
    console.log(window.scrollY+" "+window.innerHeight+" "+document.body.scrollHeight);
    if((window.scrollY +1+ window.innerHeight) >= document.body.scrollHeight)
    {
        process(r);
        console.log('done');
    }
}



function process(r) {


    if(startIndex>83)
    {
        startIndex=0;
        process(r);
    }
    for (var i = startIndex; i < startIndex + 20; i++) {

        makeCard(r[i]);

    }
    startIndex = startIndex + 20;
    console.log(startIndex);

}