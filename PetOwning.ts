import SheepDog from "./SheepDog";

export default interface PetOwning {
    sheepDog: SheepDog;
    feedTheDog: () => void;
}