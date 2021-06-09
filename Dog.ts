
export interface DogInterface {
    color: string;
    eyeColor: string;
    height: number;
    length: number;
    weight: number;
}
export default class Dog implements DogInterface {
    color: string;
    eyeColor: string;
    height: number;
    length: number;
    weight: number;
    private age: number;

    constructor(
        {
            color = "",
            eyeColor = "",
            height = 0,
            length = 0,
            weight = 0
        } = {}
    ) {
        this.color = color;
        this.eyeColor = eyeColor;
        this.height = height;
        this.length = length;
        this.weight = weight;
        this.age = 7;
    }
    
    public set setAge(age : number) {
        this.age = age;
    }

    public get value() : number {
        return this.age
    }

    sit() {
        return "Sit!";
    }

    layDown() {
        return "Lay Down";
    }

    shake() {
        return "Shake";
    }

    come() {
        return "Come";
    }

}