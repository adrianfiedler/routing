import uicomponents from './uicomponents.js';
import CanvasDrawer from './canvas-drawer.js';
export default {
  initData: 40,
  values: [],
  // set in concrete sorter
  router: null,
  canvasDrawer: new CanvasDrawer('canvas-parent'),

  init: function () {
    let sortSizeInput = document.querySelector('#size-input');
    sortSizeInput.addEventListener('change', () => {
      this.generateData();
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

    this.generateData();
    this.canvasDrawer.draw(this.values);
  },

  generateData: function () {
    let cols = 60;
    let rows = 40;
    this.values = [];
    let id = 0;
    for (let row = 0; row < rows; row++) {
      let rowArr = [];
      for (let col = 0; col < cols; col++) {
        let val = {
          id: id++
        };
        let children = [];
        // right
        if (col < cols - 1) {
          children.push({ weight: 1, childId: val.id + 1 });
        }
        // left
        if (col > 0) {
          children.push({ weight: 1, childId: val.id - 1 });
        }
        // bottom
        if (row < rows - 1) {
          children.push({ weight: 1, childId: val.id + cols });
        }
        // top
        if (row > 0) {
          children.push({ weight: 1, childId: val.id - cols });
        }
        val.children = children;
        rowArr.push(val);
      }
      this.values.push(rowArr);
    }
    console.table(this.values);
  }
};
