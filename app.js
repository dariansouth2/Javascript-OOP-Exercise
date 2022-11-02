//Exercise 1
class Person{
    constructor(name,pets,residence,hobbies){
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
    }

    addHobby(hobby){
        this.hobbies.push(hobby);
    };

    removeHobby(hobby){
        this.hobbie = this.hobbie.filter((currHObby) => {
            console.log(currHobby);
            if (currHobby == hobby){
                return false;
            }
            return true;
        })
    };

    greeting(){
    console.log("Good Afternoon.")
    }

}
const myPerson = new Person("Darian", 0, "apartment", ["gaming", "sleep", "reading"])
console.log(myPerson);

//Exercise 2
class Coder extends Person{
    constructor(name, pets, residence, hobbies){
        super(name,pets,residence,hobbies);
        this.occupation = "Full Stack Web Developer";
    }

    getting(){
        console.log("I'm a coder!")
    }
}
const myCoder = new Coder("Mathieu", 1, "City", ["Watching shows", "Youtube", "Working out"]);
console.log (myCoder);


//Exercise 3
const Jeff = new Person();

const Matthew = new Coder();
    

//Exercise 4
class Calculator{
   
    constructor(){ 
        this.result = 0;
    }

       add (a,b){
        if (b){
            this.result = a + b;
            return this.result;
        }else {
            this.result = this.result + a;
            return this.result;
        }
       }

    subtract(a,b){
        if (b || b == 0){
        this.result = a - b;
        return this.result;
    }else {
        this.result = this.result - a;
        return this.result;
        }
    }

    multiply(a,b){
        if (b){
        this.result = a * b;
        return this.result;
    }
    }

    divide(a,b){
        if (b){
            this.result = a / b;
        return this.result;
    }
    }
    displayResult(){
        console.log(this.result);
    } 

}
const myCalc = new Calculator();

console.log (myCalc);

