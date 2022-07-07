const {Builder, Browser, By, Key, until} = require('selenium-webdriver')

async function example() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();


    // load page 
    await driver.get("https://www.skatewarehouse.com/")


    // get Daily Dose product Title & check if includes "deck" 

    const dailyDoseProduct = document.querySelector('.daily_dose').textContent.toLowerCase();
    // console.log(dailyDoseProduct)

    // try to extract all the values that read like "/n" and that other one (/t) I believe
    dailyDoseProduct.includes("deck") ? console.log(`it's a deck! it's a ${dailyDoseProduct}`) : console.log(`it is not a deck :( ${dailyDoseProduct[0]}`);

    // get price value from Daily Dose
    let dailyDosePrice = document.querySelector('.price').textContent
    let converted = dailyDosePrice.slice(1)
    // console.log(` Daily dose item price is ${converted}`)

    converted < 35 ? console.log(`Daily Dose item price is good -- ${converted}`) : console.log(`Daily Dose item price TOO HIGH -- ${converted}`); // wrote shorthand way

    
    // if (converted > 35) {
    //     alert("true")
    // } else {
    //     alert("false")
    // }
    


}


example();