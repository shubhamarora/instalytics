function generateData() {
  let listData = {};
  let rootElement = document.getElementsByClassName("PZuss")[0].children; // $0.children

  for (let i = 0; i < rootElement.length; i++) {
    const username = getElementByXpath(
      ".//div/div[1]/div[2]/div[1]/a",
      rootElement[i]
    ).innerHTML;
    const displayName = getElementByXpath(
      ".//div/div[1]/div[2]/div[2]",
      rootElement[i]
    ).innerHTML;
    const amIFollowingBack =
      getElementByXpath(".//div/div[2]/button", rootElement[i]).innerHTML ===
      "Following";
    listData[username] = {
      username,
      displayName,
      amIFollowingBack,
    };
  }
  updateStorage(listData);
}

function getElementByXpath(path, contextNode) {
  return document.evaluate(
    path,
    contextNode,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

function updateStorage(listData) {
  chrome.storage.local.get("lastRunKeysFollower", function (data) {
    const now = new Date();
    let lastRunKeysFollower = [];
    if (
      data.lastRunKeysFollower &&
      Array.isArray(data.lastRunKeys) &&
      data.lastRunKeysFollower.length
    ) {
      lastRunKeysFollower = data.lastRunKeysFollower;
    }
    lastRunKeysFollower.push(now.getTime());
    chrome.storage.local.set(
      {
        lastRunKeysFollower: lastRunKeysFollower,
        [now.getTime()]: listData,
      },
      function () {
        console.log("stored");
      }
    );
  });
}

generateData();
