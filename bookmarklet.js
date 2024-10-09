javascript:(() => {

if (typeof menu === 'undefined') {
  var menu = document.getElementsByClassName("vjs-menu-item-checkable");
};

function handleHotkey(event) {
  for (let key = 0; key < 7; key++) {
    if (event.altKey && event.shiftKey && event.code == "Digit" + (key + 1)) {
      event.preventDefault();
      menu[key].click();
      break;
    }
  }
  document.getElementById("ember190_html5_api").focus();
};
document.addEventListener('keydown', handleHotkey);
})();