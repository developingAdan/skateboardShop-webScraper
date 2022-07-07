const {Builder, Browser, By, Key, until} = require('selenium-webdriver')

async function example() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();


    // load page 
    await driver.get("https://www.skatewarehouse.com/")


    // get Daily Dose product Title

    // const dailyDoseProduct = document.querySelector('.daily_dose').textContent

    // const links = dailyDoseProduct.querySelectorAll('a')

    // console.log(dailyDoseProduct)
    
    // dailyDoseProduct.includes("deck") ? true : false;

    // get price value from Daily Dose
    let dailyDosePrice = document.querySelector('.price').textContent
    let converted = dailyDosePrice.slice(1)
    console.log(converted)

    converted < 35 ? alert(true) : alert(false);

    // if (converted > 35) {
    //     alert("true")
    // } else {
    //     alert("false")
    // }
    


}


example();