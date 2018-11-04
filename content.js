chrome.storage.local.get('googleFitDate', function(data) {
    console.log(data.googleFitDate);
    var date = data.googleFitDate
    setTimeout(function(){
        document.getElementsByClassName("U26fgb XHsn7e dURtfb Qr6azb ghznDf")[0].click();
        setTimeout(function(){
            //do what you need here
            document.getElementsByClassName("whsOnd zHQkBf")[0].value= "Jan " + date.toString() +", 2018";
            document.getElementsByClassName("whsOnd zHQkBf")[2].value=240;
            document.getElementsByClassName("whsOnd zHQkBf")[3].value=20000;
            document.getElementsByClassName("U26fgb O0WRkf oG5Srb HQ8yf C0oVfc kHssdc HvOprf")[0].click();
            date += 1;
            chrome.storage.local.set({googleFitDate: date});
        }, 500);
    }, 500);
});


