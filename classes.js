// const dog = {
//     name:"bauty",
//     age:10
// }

class Animal{
    constructor(Name, Age){
            this.Name = Name;
            this.Age = Age;
    }
   static myType(){
    console.log("iam animal");
   }
     printAge() {
        console.log(this.Name+"Age"+this.Age);
    } 
    
}

const dog = new Animal("beauty", 21);
dog.printAge();
Animal.myType();
