export default class timeConversion{
    #value
    #toConvert
    #convertTo
    #valueRes
    #initial_values
    #final_values
    constructor(valueToConvert,unitTo,toUnit){
        this.#value = valueToConvert
        this.#toConvert = unitTo
        this.#convertTo = toUnit
        this.#valueRes = 0
        this.#initial_values = {
            'seg':1,
            'min':60,
            'hora':3600
        }
        this.#final_values = {
            'seg':1,
            'min': 1/60,
            'hora':1/3600
        }
    }

    calculate(){
        this.#valueRes = this.#value * this.#initial_values[this.#toConvert] * this.#final_values[this.#convertTo]
    }

    get valueRes(){
        return this.#valueRes
    }
}