import { Parrot, ParrotTypes } from "./parrot";

export class European extends Parrot {
    constructor(numberOfCoconuts: number,
                voltage: number,
                isNailed: boolean) {
            super(ParrotTypes.EUROPEAN, numberOfCoconuts, voltage, isNailed);
    }

    getSpeed (): number {
        return 12;
    }
}
