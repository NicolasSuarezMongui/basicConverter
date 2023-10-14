import timeConversion from "./modules/timeConversion.js"
import weightConversion from "./modules/weight.js"
import longitudeConversion from "./modules/longitude.js"
import temperatureConversion from "./modules/temperature.js"

localStorage.setItem("color-theme","dark")

window.addEventListener("load",()=>{
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
})

const selectUnits = document.getElementById('underline_select')

const weightUnits = ["kg","lb","@","gr","oz"]
const longitudeUnits = ["m","km","milla","yarda","codo"]
const temperatureUnits = ["°K","°C","°F"]
const timeUnits = ["seg","min","hora"]

function elementOption(dataValue){
    const newElement = document.createElement("option")
    newElement.setAttribute("value",dataValue)
    newElement.textContent = dataValue
    return newElement
}

const toConvert = document.getElementById("to_convert")
const convertTo = document.getElementById("convert_to")
const dataToConvert = document.getElementById("valueToConvert")
const dataResult = document.getElementById("valueResult")

function convertions(){
    switch (selectUnits.value) {
        case 'time':
            const controllerTime = new timeConversion(dataToConvert.value, toConvert.value, convertTo.value)
            controllerTime.calculate()
            dataResult.value = controllerTime.valueRes
            break;
        case 'weight':
            const controllerWeight = new weightConversion(dataToConvert.value, toConvert.value, convertTo.value)
            controllerWeight.calculate()
            dataResult.value = controllerWeight.valueRes
            break;
        case 'longitude':
            const controllerLongitude = new longitudeConversion(dataToConvert.value, toConvert.value, convertTo.value)
            controllerLongitude.calculate()
            dataResult.value = controllerLongitude.valueRes
            break;
        case 'temperature':
            const controllerTemperature = new temperatureConversion(dataToConvert.value, toConvert.value, convertTo.value)
            controllerTemperature.calculate()
            dataResult.value = controllerTemperature.valueRes
            break;
        default:
            break;
    }
}

dataToConvert.addEventListener("input",convertions)
toConvert.onchange = convertions
convertTo.onchange = convertions

function clearOptions(){
    const optionsElements = document.querySelectorAll(".btns option")
    if(optionsElements.length>2){
        optionsElements.forEach((element)=>{
            if(element.value!="text_"){
                element.remove()
            }
        })
    }
}

function fillOptions(unitList){
    unitList.forEach((unit)=>{
        toConvert.append(elementOption(unit))
        convertTo.append(elementOption(unit))
    })
}

selectUnits.addEventListener("change",()=>{
    clearOptions()
    if (selectUnits.value!="text_"){
        dataToConvert.disabled = false
    }else {
        dataToConvert.disabled = true
    }
    switch (selectUnits.value) {
        case 'weight':
            fillOptions(weightUnits)
            break;
        case 'longitude':
            fillOptions(longitudeUnits)
            break;
        case 'temperature':
            fillOptions(temperatureUnits)
            break;
        case 'time':
            fillOptions(timeUnits)
            break;
    }    
})