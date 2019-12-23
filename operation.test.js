
const {addGender,addPhone,addFirst,addLast,addEmail,addImage,compose} = require('./operation.js');

test('Check Gender Header',function(){
    var head = addGender('male');
    expect(head).toBeTruthy();
    //console.log(head.textContent);
});


test('Check  Phone Header',function(){
    var head = addPhone('123-45-6789');
    expect(head).toBeTruthy();
    //console.log(head.textContent);
});

test('Check First Name Header',function(){
    var head = addFirst('Rajini');
    expect(head).toBeTruthy();
    //console.log(head.textContent);
});

test('Check Last Name Header',function(){
    var head = addLast('Kanth');
    expect(head).toBeTruthy();
    //console.log(head.textContent);
});

test('Check Email Header',function(){
    var head = addEmail('ranjini.kanth@yahoo.com');
    expect(head).toBeTruthy();
    //console.log(head.textContent);
});

test('Check Image Header',function(){
    var head = addImage('https://randomuser.me/api/portraits/med/women/8.jpg');
    expect(head).toBeTruthy();
    //console.log(head);
});

test('Check Gender Content',function(){
    var head = addGender('male');
    expect(head.textContent).toEqual('male');
    //console.log(head.textContent);
});


test('Check  Phone Content',function(){
    var head = addPhone('123-45-6789');
    expect(head.textContent).toEqual('123-45-6789');
   // console.log(head.textContent);
});

test('Check First Name Header',function(){
    var head = addFirst('Rajini');
    expect(head.textContent).toEqual('Rajini');
   //console.log(head.textContent);
});

test('Check Last Name Content',function(){
    var head = addLast('Kanth');
    expect(head.textContent).toEqual('Kanth');
    //console.log(head.textContent);
});

test('Check Email Content',function(){
    var head = addEmail('ranjini.kanth@yahoo.com');
    expect(head.textContent).toEqual('ranjini.kanth@yahoo.com');
    //console.log(head.textContent);
});

test('Check Compose Function',function(){
    var i = addImage('abc');
    var g =addGender('male');
    var f =addFirst('rajini');
    var l =addLast('kanth');
    var p =addPhone('123');
    var e =addEmail('email');
    var cdiv = compose(i,g,f,l,p,e);
    expect(cdiv).toBeTruthy
});