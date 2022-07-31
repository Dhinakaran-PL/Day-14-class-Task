// var label=document.createElement("label");
// label.innerText="Email";
// label.setAttribute("for","email");
// var LB=document.createElement("br");

// var input=document.createElement("input");
// input.setAttribute("type","email");
// input.setAttribute("id","email");
// var LB1=document.createElement("br");

// document.body.append(label,LB,input,LB1);


var Fname=tolabel("label","for","firstname","First Name");  
var LB=tobreak("br");
var Finput=togetinput("input","type","text","id","firstname");
var LB1=tobreak("br");
var Lname=tolabel("label","for","lastname","Last Name");  
var LB2=tobreak("br");
var Linput=togetinput("input","type","text","id","lastname");
var LB3=tobreak("br");
var email=tolabel("label","for","email","Email");  
var LB4=tobreak("br");
var Einput=togetinput("input","type","email","id","email");
var LB5=tobreak("br");
var Pno=tolabel("label","for","phonenumber","Phone Number");  
var LB6=tobreak("br");
var Pinput=togetinput("input","type","number","id","phonenumber");
var LB7=tobreak("br");
var button=tolabel("button","for","button","click here");

document.body.append(Fname,LB,Finput,LB1,Lname,LB2,Linput,LB3,email,LB4,Einput,LB5,Pno,LB6,Pinput,LB7,button);

function tolabel(tname,Aname,Avalue,content){
    var htmlelement=document.createElement(tname);
    htmlelement.innerText=content;
    htmlelement.setAttribute(Aname,Avalue);
    return htmlelement;

}

function togetinput(tname,Aname,Avalue,Aname1,Avalue1){
    var input=document.createElement(tname);
    input.setAttribute(Aname,Avalue);
    input.setAttribute(Aname1,Avalue1);
    return input;
}

function tobreak(tname){
     var LB=document.createElement(tname);
     return LB;


}