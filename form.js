class Form {

    constructor() {
      this.input = createInput("Name");
      this.input1 = createInput("Age");
      this.input2 = createInput("Weight");
      this.input3 = createInput("Emergency Number (eg. 999)");
      this.input4 = createInput("Phone Number (eg. +44 07683 673389");
      this.input5 = createInput("Next of Kin");
      this.input6 = createInput("Next of Kin's Phone No");
      this.input7 = createInput("Medical Conditions");
      this.input8 = createInput("Allergies");
      this.input9 = createInput("Medication");
      this.input10 = createInput("1 or 2?")
      this.button = createButton('Login');
      this.button1 = createButton('Continue')
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.input1.hide();
      this.input2.hide();
      this.input3.hide();
      this.input4.hide();
      this.input5.hide();
      this.input6.hide();
      this.input7.hide();
      this.input8.hide();
      this.input9.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Snake & Spider BitIfy");
      title.position(displayWidth/2-50, 0);
  
      this.input.position(displayWidth/2, displayHeight/2-300);
      this.input1.position(displayWidth/2, displayHeight/2-250);
      this.input2.position(displayWidth/2, displayHeight/2-200);
      this.input3.position(displayWidth/2, displayHeight/2-150);
      this.input4.position(displayWidth/2, displayHeight/2-100);
      this.input5.position(displayWidth/2, displayHeight/2-50);
      this.input6.position(displayWidth/2, displayHeight/2);
      this.input7.position(displayWidth/2, displayHeight/2+50);
      this.input8.position(displayWidth/2, displayHeight/2+100);
      this.input9.position(displayWidth/2, displayHeight/2+150);


      this.button.position(displayWidth/2-250, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        user.name = this.input.value();
        user.age = this.input1.value();
        user.weight = this.input2.value();
        user.emergencyNumber = this.input3.value();
        user.phoneNumber = this.input4.value();
        user.nextofkin = this.input5.value();
        user.nextofkinnumber = this.input6.value();
        user.medicalCondition = this.input7.value();
        user.allergies = this.input8.value();
        user.medication = this.input9.value();
        user.userCount+=1;
        user.index+=1;
        user.update();
        user.updateCount(userCount);
        this.greeting.html("Hello " + user.name)
        this.greeting.position(displayWidth/2-70, displayHeight/4);
      });
  
    }
  }
  
