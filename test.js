const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
var assert = require('assert');

var buttonClick = 5;

async function example(){
   
    let driver = await new Builder().forBrowser("chrome").build();

    try
    {
        // Visit the website
        await driver.get("https://the-internet.herokuapp.com/add_remove_elements/");
    
        // Get button object
        let addbutton =  await driver.findElement(By.css("button"));

        // Click the button n number of times
        for(let count = 0;count < buttonClick;count++)
        {
            await addbutton.click();
        }
        // get all delete element
        let alldelete = await driver.findElements(By.css(".added-manually"));
        assert.strictEqual(buttonClick,alldelete.length);
        console.log("Test Passed")
    }
    catch{
        //It is always a safe practice to quit the browser after execution
        console.log("Exception found")
    }
    await driver.quit()
}

example();