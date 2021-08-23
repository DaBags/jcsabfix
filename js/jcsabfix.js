(function () {
  HTMLElement.prototype.jcsabfix = function () {
    const core = function() {
      var parentEl = this,
        parentElWidth = parentEl.offsetWidth,
        el = parentEl.firstElementChild,
        elWidth = Math.floor(el.clientWidth),
        elClass = el.getAttribute('class'),
        items = Math.floor(parentElWidth / elWidth);

      for (var i = 0; i < items - 1; i++) {
        var fixItem = document.createElement('div');
            fixItem.classList.add(elClass + '-jcsabfix');
            fixItem.style.cssText = `height:0;overflow:hidden;visibility:hidden;`;

        var fakeEl = document.querySelectorAll('div[class="' + elClass + '-jcsabfix"');

        if (fakeEl.length < items - 1)
          parentEl.append(fixItem)
      }

      var fakeEls = document.querySelectorAll('div[class="' + elClass + '-jcsabfix"')
      for (var j = 0; j < fakeEls.length; j++) {
        fakeEls[j].style.width = elWidth + 'px';
      }
    }

    return core.bind(this)();
  }
})();