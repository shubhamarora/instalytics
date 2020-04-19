function generateFollowerData() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    if (tabs[0].url === "https://www.instagram.com/ishubhamarora/followers/") {
      chrome.tabs.executeScript(tabs[0].id, {
        file: "src/generateFollowerData.js",
      });
    } else {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "alert('open followers list');",
      });
    }
  });
}
function generateFollowingData() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    if (tabs[0].url === "https://www.instagram.com/ishubhamarora/following/") {
      chrome.tabs.executeScript(tabs[0].id, {
        file: "src/generateFollowingData.js",
      });
    } else {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "alert('open following list');",
      });
    }
  });
}

document
  .getElementById("sa-ia-follower")
  .addEventListener("click", generateFollowerData);
document
  .getElementById("sa-ia-following")
  .addEventListener("click", generateFollowingData);
