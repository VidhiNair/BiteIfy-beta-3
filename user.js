class User {
    constructor(){
        this.index = null;
        this.name = null;
        this.weight = 0;
        this.allergies = null;
        this.emergancyNumber = 0;
        this.medicalCondition = null;
        this.medication = null;
        this.nextofkin = null;
        this.nextofkinnumber = 0;
        this.phoneNumber = 0;

    }
  
    getCount(){
      var userCountRef = database.ref('userCount');
      userCountRef.on("value",(data)=>{
        userCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        userCount: count
      });
    }
  
    update(){
      var userIndex = "users/users" + this.index;
      database.ref(userIndex).set({
        name:this.name,
        age: this.age,
        address:this.address,
        allergies:this.allergies,
        emergancyNumber:this.emergancyNumber,
        weight:this.weight,
        medicalCondition:this.medicalCondition,
        medication:this.medication,
        nextofkin:this.nextofkin,
        nextofkinnumber:this.nextofkinnumber,
        phoneNumber:this.phoneNumber

      });
    }
  
    static getUserInfo(){
      var userInfoRef = database.ref('users');
      userInfoRef.on("value",(data)=>{
        allUsers = data.val();
      })
    
    }
  }
  