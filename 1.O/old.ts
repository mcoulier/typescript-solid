class Dog {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'dog';
    }

    get makeSound(){
        return 'Woef';
    }
}

class Bear {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'bear';
    }

    get makeSound(){
        return 'Roar';
    }
}

class Cat {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'cat';
    }

    get makeSound(){
        return 'Miauw';
    }
}

class Parrot {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'parrot';
    }

    get makeSound(){
        return 'I am a pirate';
    }
}

class Zoo {
    private _animals : Array<Object> = new Array<Object>();

    public addAnimal(animal: object) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }
}

let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Bear);

//don't put () after animal.makeSound!
zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound + "<br>");
});