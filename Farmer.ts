import PetOwning from "./PetOwning";
import SheepDog from "./SheepDog";

export default class Farmer implements PetOwning {
    sheepDog: SheepDog;
    name: string;
    constructor(name = '', sheepDog: SheepDog) {
        this.name = name;
        this.sheepDog = sheepDog;
    }
    feedTheDog = () => {console.log("Feeding the dog! :)")}
}