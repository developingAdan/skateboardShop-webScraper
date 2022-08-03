const {Builder, Browser, By, Key, until} = require('selenium-webdriver')

async function example() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();


    // load page 
    await driver.get("https://www.skatewarehouse.com/")


    // get Daily Dose product Title & check if includes "deck" 

    // let dailyDoseProduct = document.querySelector('.daily_dose').textContent.toLowerCase();
    // console.log(dailyDoseProduct)

    // // try to extract all the values that read like "/n" and that other one (/t) I believe
    // dailyDoseProduct.includes("deck") ? console.log(`it's a deck! it's a ${dailyDoseProduct}`) : console.log(`it is not a deck :( ${dailyDoseProduct[0]}`);

    // // get price value from Daily Dose
    // let dailyDosePrice = document.querySelector('.price').textContent
    // let converted = dailyDosePrice.slice(1)
    // // console.log(` Daily dose item price is ${converted}`)

    // converted < 35 ? console.log(`Daily Dose item price is good -- ${converted}`) : console.log(`Daily Dose item price TOO HIGH -- ${converted}`); // wrote shorthand way

    await driver.findElement(By.linkText('Clearance Shoes')).sendKeys("", Key.RETURN)

    await driver.findElement(By.linkText('See More')).sendKeys("", Key.RETURN)
    // await driver.findElement(By.id('ui-id-120').className('cf')).sendKeys("", Key.RETURN)
    // await driver.findElement(By.className('checkpop_submit')).sendKeys("", Key.RETURN)
    // trying to find a way to get these two lines to work. They are not clicking the elements
}


example();


// async function openingTactics() {

//         let driver = await new Builder().forBrowser(Browser.CHROME).build();
//         await driver.get('https://www.tactics.com/')

//         driver.findElement(By.className('header'))

//         const el1 = document.querySelector('a[href="/decks/sale"]');
//         console.log(el1); // 👉️ a



// }



// does it make sense putting an await here?
// openingTactics()