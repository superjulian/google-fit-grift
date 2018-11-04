chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({googleFitDate: 1});
});
