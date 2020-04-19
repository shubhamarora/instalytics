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
      listData[username] = {
        username,
        displayName
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
  chrome.storage.local.get("lastRunKeysFollowing", function (data) {
    const now = new Date();
    let lastRunKeysFollowing = [];
    if (
      data.lastRunKeysFollowing &&
      Array.isArray(data.lastRunKeysFollowing) &&
      data.lastRunKeysFollowing.length
    ) {
      lastRunKeysFollowing = data.lastRunKeysFollowing;
    }
    lastRunKeys.push(now.getTime());
    chrome.storage.local.set(
      {
        lastRunKeysFollowing: lastRunKeysFollowing,
        [now.getTime()]: listData,
      },
      function () {
        console.log("stored");
      }
    );
  });
}
generateData();