(function () {
  HTMLElement.prototype.jcsabfix = function () {
    const core = function() {
      let parentEl = this,
        parentElWidth = parentEl.offsetWidth,
        el = parentEl.firstElementChild,
        elWidth = Math.floor(el.clientWidth),
        elClass = el.getAttribute('class'),
        items = Math.floor(parentElWidth / elWidth);

      for (let i = 0; i < items - 1; i++) {
        let fixItem = document.createElement('div');
            fixItem.classList.add(elClass + '-jcsabfix');
            fixItem.style.cssText = `height:0;overflow:hidden;visibility:hidden;`;

        let fakeEl = document.querySelectorAll('div[class="' + elClass + '-jcsabfix"');

        if (fakeEl.length < items - 1)
          parentEl.append(fixItem)
      }

      document.querySelectorAll('div[class="' + elClass + '-jcsabfix"').forEach(item => {
        item.style.width = `${elWidth}px`;
      })
    }

    return core.apply(this);
  }
})();