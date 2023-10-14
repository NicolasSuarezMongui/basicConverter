export default class weightConversion{
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
            'kg':1,
            'lb':0.453592,
            '@':11.502,
            'gr':0.001,
            'onza':0.03
        }
        this.#final_values = {
            'kg':1,
            'lb':2.20462,
            '@':0.0869,
            'gr':1000,
            'onza':35.274
        }
    }

    calculate(){
        this.#valueRes = this.#value * this.#initial_values[this.#toConvert] * this.#final_values[this.#convertTo]
    }

    get valueRes(){
        return this.#valueRes
    }
}