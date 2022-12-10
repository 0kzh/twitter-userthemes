import "./assets/ace.js"
import "./assets/mode-css.js"
import "./assets/theme-dreamweaver.js"
import AceColorPicker from "./assets/ace-colorpicker.js"

var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'https://cdn.jsdelivr.net/npm/ace-colorpicker@0.0.12/addon/ace-colorpicker.css');
document.head.appendChild(link);

const applyStyle = (elem, style) => {
  Object.entries(style).forEach(([key, value]) => {
    elem.style[key] = value;
  });
};

const styles = {
  editUserThemeBtn: {
    fontFamily: "TwitterChirp",
    fontWeight: 700,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    border: "none",
    fontSize: "17px",
    marginRight: "8px",
  }
};

const editThemeIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>
`;

const editorWindow = `
  <div class="header title-bar">
    <div class="title-bar-text">CSS Editor</div>
    <div class="title-bar-controls">
      <button aria-label="Close">
        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H1H2V1H3V2H4H5V1H6V0H7H8V1H7V2H6V3H5V4H6V5H7V6H8V7H7H6V6H5V5H4H3V6H2V7H1H0V6H1V5H2V4H3V3H2V2H1V1H0V0Z" fill="black"/>
        </svg>
      </button>
    </div>
  </div>
  <div class="window-body">
    <div class="theme-selector">
      <div id="sakura" class="theme-preview status-bar-field">Sakura</div>
      <div id="pokemon" class="theme-preview status-bar-field">Pokémon</div>
      <div id="space" class="theme-preview status-bar-field">Space</div>
      <div id="oldskool" class="theme-preview status-bar-field">Oldskool</div>
    </div>
    <div class="editor-content field-row-stacked">
      <textarea id="css-editor" style="resize: none;"></textarea>
    </div>
    <div class="status-bar">
      <p class="status-bar-field position">Line 0, Col 0</p>
      <p class="status-bar-field char-count">0 characters</p>
      <p class="status-bar-field">Press F1 for help</p>
    </div>
    <section class="field-row actions">
      <button aria-label="Cancel">Cancel</button>
      <button aria-label="Publish">Publish</button>
    </section>
  </div>
`;

const alertModal = `
<div class="header title-bar">
  <div class="title-bar-text"></div>
  <div class="title-bar-controls">
    <button aria-label="Close"></button>
  </div>
</div>
<div class="window-body">
  <p class="message"></p>
  <section class="field-row" style="justify-content: flex-end">
    <button aria-label="OK">OK</button>
  </section>
</div>
`;

const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(window, args); }, timeout);
  };
};

document.addEventListener("mousedown", () => window.mousedown = true);
document.addEventListener("mouseup", () => window.mousedown = false);
document.addEventListener("mouseup", (e) => {
  window.dragTarget = null;
  window.offsetX = 0;
  window.offsetY = 0;
});

document.addEventListener("mousemove", (e) => {
  if (window.dragTarget) {
    const dx = e.clientX - window.offsetX;
    const dy = e.clientY - window.offsetY;
    window.dragTarget.style.left = dx + "px";
    window.dragTarget.style.top = dy + "px";
  }
});

const launchAlert = (title, contents) => {
  const newAlert = document.createElement('div');
  newAlert.classList.add('window');
  newAlert.style.width = "300px";
  newAlert.style.left = "calc(50% - 150px)";
  newAlert.style.top = "calc(50% - 150px)";

  newAlert.innerHTML = alertModal;

  const titleBar = newAlert.querySelector('.title-bar-text');
  titleBar.textContent = title;

  const message = newAlert.querySelector('.message');
  message.textContent = contents;

  const header = newAlert.querySelector(".header");
  header.addEventListener("mousedown", (e) => {
    window.dragTarget = newAlert;
    window.offsetX = e.offsetX;
    window.offsetY = e.offsetY;
  });

  const buttons = newAlert.querySelectorAll('button[aria-label="Close"], button[aria-label="OK"]');
  buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', () => {
      console.log("clicked");
      newAlert.remove();
    });
  });

  document.body.appendChild(newAlert);
};

const fetchUserFromURL = () => {
  const parser = document.createElement('a');
  parser.href = window.location.href;
  const pathname = parser.pathname;

  // Split the pathname into parts, and return the second part (the user)
  const pathnameParts = pathname.split('/');
  return pathnameParts[1];
};

const setStyleTagContents = (contents) => {
  const styleTag = document.querySelector("#user-style");
  styleTag.innerHTML = contents;
};

const launchEditor = () => {
  const editor = document.createElement("div");
  editor.id = "editor";
  editor.className = "window";
  editor.innerHTML = editorWindow.trim();
  editor.style.left = "50px";
  editor.style.top = "50px";

  // append to html
  document.querySelector("body").appendChild(editor);

  const closeBtn = editor.querySelector(`.title-bar-controls [aria-label="Close"]`);
  closeBtn.addEventListener("click" , () => {
    editor.remove();
  });
  closeBtn.addEventListener("mousedown", (e) => e.stopPropagation());

  const editorInstance = ace.edit("css-editor");
  editorInstance.setTheme("ace/theme/dreamweaver");
  editorInstance.session.setMode("ace/mode/css", () => {
    AceColorPicker.load(ace, editorInstance);
  });

  editorInstance.session.selection.on('changeCursor', () => {
    const { row, column } = editorInstance.getCursorPosition();
    const positionDiv = editor.querySelector("p.position");
    positionDiv.innerText = `Line ${row}, Col ${column}`;
  });
  
  const debouncedSave = debounce(setStyleTagContents, 1000);

  editorInstance.session.on('change', () => {
    const contents = editorInstance.getValue();
    const charCountDiv = editor.querySelector("p.char-count");
    charCountDiv.innerText = `${contents.length} characters`;

    // persist in localstorage
    localStorage.setItem("css-contents", contents);
    debouncedSave(contents);
  });
  editorInstance.setValue(localStorage.getItem("css-contents"), "");

  const cssEditor = editor.querySelector(".ace_editor");
  cssEditor.style.height = "300px";
  cssEditor.style.width = "400px";
  cssEditor.style.overscrollBehaviour = "none";

  let observer = new ResizeObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (window.mousedown) {
        const newHeight = mutation.contentRect.height;
        const newWidth = mutation.contentRect.width;

        cssEditor.style.height = newHeight - 162 + "px";
        cssEditor.style.width = newWidth - 32 + "px";
        editorInstance.resize();
      }
    });
  });

  observer.observe(editor, { attributes: true });

  const header = editor.querySelector(".header");
  header.addEventListener("mousedown", (e) => {
    window.dragTarget = editor;
    window.offsetX = e.offsetX;
    window.offsetY = e.offsetY;
  });

  const cancelButton = editor.querySelector(`[aria-label="Cancel"]`);
  cancelButton.addEventListener("click", () => {
    editor.remove();
  });

  const publishButton = editor.querySelector(`[aria-label="Publish"]`);
  publishButton.addEventListener("click", () => {
    const user = fetchUserFromURL();

    const contents = editorInstance.getValue();

    chrome.runtime.sendMessage({
      type: "publish",
      data: { user, contents }
    }, function (response) {
      if (response && response.status) {
        const { status } = response;
        if (status === "success") {
          launchAlert("Theme updated", "Theme published successfully! Anyone with the extension that visits your page will now see your custom theme. Huzzah!");
        } else {
          launchAlert("Failed to update theme", response.data);
        }
      }
    });
  });

  editor.querySelectorAll(".theme-preview").forEach(themeElem => {
    const name = themeElem.id
    themeElem.addEventListener("click", () => {
      chrome.runtime.sendMessage({
      type: "get_theme",
      data: { name }
    }, function (response) {
      if (response && response.status) {
        const { status } = response;
        if (status === "success") {
          editorInstance.setValue(response.data)
        } else {
          launchAlert("Failed to fetch theme", response.data);
        }
      }
    });
    })
  });
};

const initialize = () => {
    const user = fetchUserFromURL();

    // also accounts for dimmed mode
    const isDarkMode = document.querySelector("body").style["background-color"] !== "rgb(255, 255, 255)";

    if (!document.querySelector("#user-style")) {
      var styleTag = document.createElement('style');
      styleTag.id = "user-style";
      document.head.appendChild(styleTag);
    }

    chrome.runtime.sendMessage({
      type: "fetch",
      data: { user }
    }, function (response) {
      if (response && response.status) {
        const { status, data } = response;
        if (status === "success") {
          setStyleTagContents(data);
        } else {
          console.log(`Could not fetch CSS for user ${user}`);
        }
      }
    });

    // insert edit theme btn if it doesn't already exist
    if (!document.querySelector("#edit-theme")) {
      const settingsLink = document.querySelector('[href="/settings/profile"]');
      const editUserThemeBtn = document.createElement("a");
      editUserThemeBtn.id = "edit-theme";
      editUserThemeBtn.dir = "ltr"
      editUserThemeBtn.innerHTML = `${editThemeIcon} <span class="${settingsLink.querySelector("span").className}">Edit Theme</span>`;
      editUserThemeBtn.className = settingsLink.className;
      applyStyle(editUserThemeBtn, styles.editUserThemeBtn);

      editUserThemeBtn.addEventListener("click", () => {
        const curEditor = document.querySelector("#editor");
        if (curEditor) {
          curEditor.remove();
        } else {
          launchEditor();
        }
      });

      const parent = settingsLink.parentNode;
      parent.insertBefore(editUserThemeBtn, settingsLink);
    }

};

var oldHref = document.location.href;

window.onload = function() {
  var bodyList = document.querySelector("body");

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function() {
      if (oldHref != document.location.href) {
          oldHref = document.location.href;
          initialize();
      }
    });
  });
  
  var config = {
    childList: true,
    subtree: true
  };
  
  observer.observe(bodyList, config);
  waitForLoadFinish();
};

function waitForLoadFinish() {
  var loadingDiv = document.querySelector('[aria-label^="Loading"]');

  if (!loadingDiv) {
    initialize();
  } else {
    setTimeout(waitForLoadFinish, 100);
  }
}