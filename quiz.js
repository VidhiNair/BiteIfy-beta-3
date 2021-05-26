class Quiz{
    consturctor(){}

getState();

display(){

}

async start(){
    if(gameState === 0){
        var userCountRef = await database.ref('userCount').once("value");
        if(userCountRef.exists()){
            userCount = userCountRef.val();
            userCountRef.getCount();
        }
        
    }
}
}


