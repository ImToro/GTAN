API.onServerEventTrigger.connect((eventName, args) => {
    switch (eventName) {
        case 'testjs':
            TestHandler();
            break;
    }
});
function TestHandler() {
    var res = API.getScreenResolution(); // Gets screen res
    Browser = API.createCefBrowser(500, 499); // size of window
    API.waitUntilCefBrowserInit(browser); // Waits for client to load it
    API.serCefBrowserPosition(browser, (res.Width / 2) - (500 / 2), (res.height / 2) - (499 / 2)); //Sets the point of the browser
    API.loadPageCefBrowser(browser, "Designs/Blackbox.html");//Directs to the page to load, make sure full directory
    API.showCursor(true);//Shows curser
    API.setCanOpenChat(false);//hides chat box

}
function BtnClicked() {
    API.showCursor(false);
    API.setCanOpenChat(true);
    API.destroyCefBrowser(browser);//Closes the browser
    API.triggerServerEvent("BackToTheFuture");//Triggers cs script
}
var browser = null; // make sure this is outside function, defines browser
