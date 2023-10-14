export default class temperatureConversion{
    #toConvert
    #convertTo
    #valueRes
    constructor(valueToConvert,unitTo,toUnit){
        this.value = valueToConvert
        this.#toConvert = unitTo
        this.#convertTo = toUnit
        this.#valueRes = 0
        let lFunctions = [
            ['°K',new Map([['°C',1],['°F',2]])],
            ['°C',new Map([['°K',3],['°F',4]])],
            ['°F',new Map([['°C',5],['°K',6]])]
        ]
        this.swtichFunction = new Map(lFunctions)
    }

    calculate(){
        if(this.#convertTo===this.#toConvert){
            this.#valueRes = this.value
        }else{
            let op = this.swtichFunction.get(this.#toConvert).get(this.#convertTo)
            switch (op) {
                case 1:
                    this.kelvinCelsius()
                    break;
                case 2:
                    this.kelvinFahrenheit()
                    break;
                case 3:
                    this.celsiusKelvin()
                    break;
                case 4:
                    this.celsiusFahrenheit()
                    break;
                case 5:
                    this.fahrenheitCelsius()
                    break;
                case 6:
                    this.fahrenheitKelvin()
                    break;
                default:
                    break;
            }
        }
    }

    kelvinCelsius(){
        this.#valueRes = this.value - 273.15
    }

    celsiusKelvin(){
        this.#valueRes = this.value + 273.15
    }

    fahrenheitCelsius(){
        this.#valueRes = (this.value-32)*(5/9) 
    }

    celsiusFahrenheit(){
        this.#valueRes = (this.value*(9/5))+32
    }

    fahrenheitKelvin(){
        this.fahrenheitCelsius()
        this.#valueRes = this.#valueRes + 273.15
    }

    kelvinFahrenheit(){
        this.kelvinCelsius()
        this.#valueRes = this.#valueRes*(9/5)+32
    }

    get valueRes(){
        return this.#valueRes
    }
}