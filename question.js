class Question{


hide2(){
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
}

quest1(){
display1();
this.button1.mousePressed(()=> {
for(var plr in allUsers){
    var goodAns1 = "1"
    var badAns1 = "2"
    if(goodAns === allUsers[plr].answer)
    quest2();
    else
    quest3();

} 
}
}

quest2(){
    
}
}

function display1(){
    this.title.html("Please answer the following questions!")
    this.question.html("Question - Did you see what bit you?")
    this.option1.html("1: Yes")
    this.option2.html("2: No")
    this.title.position(windowWidth/2, windowHeight/2-100);
    this.question.position(windowWidth/2, windowHeight/2-50)
    this.option1.position(windowWidth/2, windowHeight/2)
    this.option2.position(windowWidth/2, windowHeight/2+50)
    this.input10.position(windowWidth/2, windowHeight/2+100)
    this.button1.position(windowWidth/2, windowHeight/2+150)
}
function display2(){
    this.question1.html("Question - What was it?")
    this.option3.html("1: Yes")
    this.option4.html("2: No")
    this.question1.position(windowWidth/2, windowHeight/2-50)
    this.option3.position(windowWidth/2, windowHeight/2)
    this.option4.position(windowWidth/2, windowHeight/2+50)
    this.input10.position(windowWidth/2, windowHeight/2+100)
    this.button1.position(windowWidth/2, windowHeight/2+150)
}
