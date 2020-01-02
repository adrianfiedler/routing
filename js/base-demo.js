define(['uicomponents', 'canvas-drawer'], function (uicomponents, CanvasDrawer) {
  let config = {
    initData: 40,
    values: [],
    // set in concrete sorter
    router: null,
    canvasDrawer: new CanvasDrawer('sketch-canvas', 'canvas-parent'),

    init: function () {
      let sortSizeInput = document.querySelector('#size-input');
      sortSizeInput.addEventListener('change', () => {
        this.generateData(sortSizeInput.value);
        this.canvasDrawer.draw(this.values);
      });

      let sortMsInput = document.querySelector('#ms-input');
      sortMsInput.addEventListener('change', () => {
        if (this.router) {
          this.router.delay = sortMsInput.value;
        }
      });

      document.querySelector('#sort-start').addEventListener('click', () => {
        document.querySelector('#sort-start').disabled = true;
        if (this.router) {

          const iterationObserver = function (data) {
            this.values = data;
            this.canvasDrawer.draw(data);
          };
          this.router.route().then((sortedList) => {
            this.values = sortedList;
            document.querySelector('#sort-start').disabled = false;
          });
        }
      });

      this.generateData(this.initData);
      this.canvasDrawer.draw(this.values);
    },

    generateData: function (size) {
      this.values = [];
      for (let i = 0; i < size; i++) {
        this.values.push(Math.random() * 400);
      }
    }
  };
  return config;
});