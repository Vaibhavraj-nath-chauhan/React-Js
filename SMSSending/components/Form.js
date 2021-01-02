import React from 'react'
import "./Form.css"
var msg91 = require("msg91")("232419AT2rwRRUo5b77e616","TCHSIM",'4');

const MassageSize = () =>{
    var msg = document.getElementById("textbox").value;
    var msgNum = 200 - parseInt(msg.length)
    if(msgNum >= 0){
        var Alert = `${msgNum}`
        document.getElementById("messageText").innerHTML = Alert;
    }
    else{
        document.getElementById("textbox").value =msg.slice(0,200);
        alert("Text Limit Ends")
    } 
}

const NumberLen = () =>{
    var numbers = document.getElementById("number").value;
    numbers = numbers.split(",");
    var Total = 0;
    var correctNumber = [];
    for(var i=0;i<numbers.length;i++){
        var Num = numbers[i]
        if(Num.length===10){
            Total = Total + 1
        }
        if(Num.length>10){
            alert("Invalid Number(Number Should be less than 10)")
            Num = Num.slice(0,10);
        }
        correctNumber.push(Num)

    }
    var allNumber = ""
    for(i=0;i<correctNumber.length;i++){
        allNumber += correctNumber[i]
        if(correctNumber[i].length === 10){
            allNumber +=","
        }
    }
    document.getElementById("number").value = allNumber
    document.getElementById("count").innerText = Total
    

}


class Form extends React.Component{
    SendSms = () =>{
        var Number = document.getElementById("number").value;
        var Msg = document.getElementById("textbox").value;
        Number = Number.split(",")
        for(var i =0;i<Number.length;i++){
            msg91.send(Number[i],Msg,function(err,response){
                console.log(err);
                console.log(response);
            });
        }
        alert("Its Done")
    }


    render(){
        return(
            <div >
                <center>
                    <div className="division">
                        <h4 className="head">Messaging Service</h4>
                        <small className = "sub">Connect to anyone in seconds</small>
                        <br/><br/>
                        <input className="number" id="number" onKeyUp={() => NumberLen()} placeholder="Enter 10 digit number"/>
                        <span id="count">0</span>
                        <br/><br/>
                        <textarea className="textbox" id ="textbox" onKeyUp={() =>MassageSize()} placeholder="Enter Your message"></textarea>
                        <span id="messageText">200</span>
                        <br/>
                        <button className="but" onClick={this.SendSms.bind(this)}>Summit</button>
                    </div>
                </center>
            </div>
        )
    }

}

export default Form;