javascript: (() => {
  if (typeof menu === 'undefined') {
    var menu = document.getElementsByClassName("vjs-menu-item-checkable");
  };


  function handleHotkey(event) {
    if (event.shiftKey && (event.key === ">" || event.key === "<")) {
      event.preventDefault();
      const minSpeed = 0;
      const maxSpeed = 6;
      let videoSpeed;

      for (let key in menu) {
        if (menu[key].ariaChecked === 'true') {
          videoSpeed = key;
          break;
        };
      };
      if (event.key === ">" && videoSpeed < maxSpeed) {
        videoSpeed++;
      } else if (event.key === "<" && videoSpeed > minSpeed) {
        videoSpeed--;
      }
      menu[videoSpeed].click();
      document.getElementsByClassName("vjs-tech")[0].focus();
    }

  };
  document.addEventListener('keydown', handleHotkey);
})();