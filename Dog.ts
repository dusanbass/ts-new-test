
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