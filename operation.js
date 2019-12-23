function makeCard(cur)
{
    var gender = "Gender : "+cur.gender;
    var fname = "First Name : "+cur.name.first;
    var lname = "Last Name : "+cur.name.last;
    var img = cur.picture.large;
    var phn = "Phone No : "+cur.phone;
    var eml = "E-mail : "+cur.email;
    var i = addImage(img);
    var g =addGender(gender);
    var f =addFirst(fname);
    var l =addLast(lname);
    var p =addPhone(phn);
    var e =addEmail(eml);
    var k =compose(i,g,f,l,p,e);

}


function compose(i,g,f,l,p,e)
{
    var headDiv = document.createElement('div');
    headDiv.setAttribute('class','tdiv');
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute('class','main');
    mainDiv.appendChild(i);
    headDiv.appendChild(g);
    headDiv.appendChild(f);
    headDiv.appendChild(l);
    headDiv.appendChild(p);
    headDiv.appendChild(e);
    mainDiv.appendChild(headDiv);
    document.body.appendChild(mainDiv);
    return mainDiv;
}

function addGender(gender) {

    var g = document.createElement('h5');
    g.setAttribute('id','gender');
    g.textContent = gender;
    return g;

}

function addPhone(phone) {  
    var g = document.createElement('h5');
    g.textContent = phone;
    return g;

}

function addFirst(first) {

    var g = document.createElement('h5');
    g.textContent = first;
    return g;

}

function addLast(last) {

    var g = document.createElement('h5');
    g.textContent = last;
    return g;
}

function addEmail(email) {

    var g = document.createElement('h5');
    g.textContent = email;
    return g;

}

function addImage(image) {


    var idiv = document.createElement('div');
    idiv.setAttribute('class','imgDiv');
    var img = document.createElement('img');
        img.setAttribute('src',image);
        img.setAttribute('class',"image");
        idiv.appendChild(img);
        return idiv;

}


module.exports = {addGender,addPhone,addFirst,addLast,addEmail,addImage,compose}