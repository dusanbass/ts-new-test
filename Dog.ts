export default class Dog {

    color: string;

    eyeColor: string;

    height: number;

    length: number;

    weight: number;

    constructor(color: string = "", eyeColor: string = "", height: number = 0, length: number = 0, weight: number = 0) {

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