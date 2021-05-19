
export class Point {
    is: boolean;
    constructor(is: boolean) {
        this.is = is;
    }

    exists(): void {
        console.log(`This point ${this.is ? 'exists.' : 'does not exist.'}`)
    }
}
