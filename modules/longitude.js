export default class longitudeConversion{
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
            'm':1,
            'km':1000,
            'milla':1609.34,
            'yarda':0.9144,
            'codo':0.445
        }
        this.#final_values = {
            'm':1,
            'km':0.001,
            'milla':0.000621371,
            'yarda':1.09361,
            'codo':2.247
        }
    }

    calculate(){
        this.#valueRes = this.#value * this.#initial_values[this.#toConvert] * this.#final_values[this.#convertTo]
    }

    get valueRes(){
        return this.#valueRes
    }
}