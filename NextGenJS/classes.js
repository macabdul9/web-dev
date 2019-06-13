class Vehicle{
    constructor(){
        this.vtype = "four wheelar"
    }

    show(){
        console.log("i am " + this.vtype + " vehicle")
    }
}

class Car extends Vehicle{
    constructor(){
        // we gotta execute parent class constructor first
        super()
        this.cname = "Lamborghini E3"
    }
    show(){
        console.log("I am " + this.vtype + " " + this.cname)
    }
}
const c = new Car()

c.show()
