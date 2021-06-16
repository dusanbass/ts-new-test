import Dog, { DogInterface } from "./Dog";

export interface SheepDogInterface extends DogInterface {
    bangsColor: string
    name: string;
}

export default class SheepDog extends Dog implements SheepDogInterface {
    bangsColor: string;
    name: string;

    constructor(sheepDogConfig: SheepDogInterface) {
        super(sheepDogConfig)
        this.bangsColor = sheepDogConfig.bangsColor;
        this.name = sheepDogConfig.name;
    }

    heardSheeps = () => {console.log(`I the dog, named ${this.name} am hearding sheeps!!! :D`)}
}