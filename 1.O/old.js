var Dog = /** @class */ (function () {
    function Dog() {
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "type", {
        get: function () {
            return 'dog';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "makeSound", {
        get: function () {
            return 'Woef';
        },
        enumerable: false,
        configurable: true
    });
    return Dog;
}());
var Bear = /** @class */ (function () {
    function Bear() {
    }
    Object.defineProperty(Bear.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bear.prototype, "type", {
        get: function () {
            return 'bear';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bear.prototype, "makeSound", {
        get: function () {
            return 'Roar';
        },
        enumerable: false,
        configurable: true
    });
    return Bear;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "type", {
        get: function () {
            return 'cat';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "makeSound", {
        get: function () {
            return 'Miauw';
        },
        enumerable: false,
        configurable: true
    });
    return Cat;
}());
var Parrot = /** @class */ (function () {
    function Parrot() {
    }
    Object.defineProperty(Parrot.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "type", {
        get: function () {
            return 'parrot';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "makeSound", {
        get: function () {
            return 'I am a pirate';
        },
        enumerable: false,
        configurable: true
    });
    return Parrot;
}());
var Zoo = /** @class */ (function () {
    function Zoo() {
        this._animals = new Array();
    }
    Zoo.prototype.addAnimal = function (animal) {
        this._animals.push(animal);
    };
    Object.defineProperty(Zoo.prototype, "animals", {
        get: function () {
            return this._animals;
        },
        enumerable: false,
        configurable: true
    });
    return Zoo;
}());
var zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Bear);
//don't put () after animal.makeSound!
zoo.animals.forEach(function (animal) {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound + "<br>");
});
