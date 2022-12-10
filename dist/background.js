const ENDPOINT = "https://2ralpbz3ie.execute-api.us-east-1.amazonaws.com/prod";

chrome.runtime.onMessage.addListener(function(message, _, sendResponse) {
  if (message.type === "fetch") {
    const { user } = message.data;
    fetch(`${ENDPOINT}/css/${user}`, {
      method: "GET"
    }).then(async response => {
      const css = await response.text()
      sendResponse({
        status: "success",
        data: css
      });
    }).catch(error => {
      console.log(error)
      sendResponse({
        status: "error",
        data: error.message
      });
    });

    // Return true to keep the sendResponse function valid
    return true;
  }

  if (message.type === "publish") {
    const { user, contents } = message.data;
    fetch(`${ENDPOINT}/css/${user}`, {
      method: "PUT",
      body: contents
    }).then(() => {
      sendResponse({
        status: "success",
      });
    }).catch(error => {
      console.log(error);
      sendResponse({
        status: "error",
        data: error.message
      });
    });

    // Return true to keep the sendResponse function valid
    return true;
  }

  if (message.type === "get_theme") {
    const { name } = message.data;

    fetch(`${ENDPOINT}/theme/${name}`, {
      method: "GET"
    }).then(async response => {
      const data = await response.text()
      sendResponse({
        status: response.status === 200 ? "success" : "error",
        data: data
      });
    }).catch(error => {
      console.log(error)
      sendResponse({
        status: "error",
        data: error.message
      });
    });

    // Return true to keep the sendResponse function valid
    return true
  }
});