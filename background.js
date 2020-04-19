// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   // make sure the status is 'complete' and it's the right tab
//   if (
//     tab.url === "https://www.instagram.com/ishubhamarora/following/" &&
//     changeInfo.status == "complete"
//   ) {
//     chrome.tabs.executeScript(tabId, {
//       file: "src/generateData.js",
//     });
//   }
//   if (
//     tab.url == "https://www.instagram.com/ishubhamarora/" &&
//     changeInfo.status == "complete"
//   ) {
//     chrome.tabs.executeScript(tabId, {
//       code: "var els = document.querySelectorAll(\"a[href='/ishubhamarora/following/']\")[0].click(); ",
//     });
//   }
// });
