class CanvasDrawer {
  constructor(canvasParentID, base) {
    this.parent = document.getElementById(canvasParentID);
    this.parentWidth = this.parent.clientWidth;
    this.parentHeight = this.parent.clientHeight;
    this.base = base;
    this.startSelect = true;
    this.startDiv = null;
    this.endDiv = null;

    document.querySelector('#sort-start').addEventListener('click', () => {
      document.querySelector('#sort-start').disabled = true;
      base.start(this.startDiv, this.endDiv);
    });
  }

  draw(values) {
    this.values = values;
    console.log('draw');
    while (this.parent.firstChild) {
      this.parent.removeChild(this.parent.firstChild);
    }
    const divSize = Math.floor(this.parentWidth / values[0].length);
    let id = 0;
    for (let row = 0; row < values.length; row++) {
      let rowDiv = document.createElement('div');
      for (let col = 0; col < values[0].length; col++) {
        let newDiv = document.createElement('div');
        newDiv.id = id++;
        newDiv.setAttribute('class', 'square');
        newDiv.style.width = divSize;
        newDiv.style.height = divSize;
        newDiv.addEventListener('click', () => this.clickHandler(newDiv));
        if (this.start == newDiv.id) {
          newDiv.classList.add('start');
        }
        if (this.end == newDiv.id) {
          newDiv.classList.add('end');
        }
        rowDiv.appendChild(newDiv);
      }
      this.parent.appendChild(rowDiv);
    }
  }

  clickHandler(newDiv) {
    if (this.startSelect) {
      this.start = newDiv.id;
    } else {
      this.end = newDiv.id;
    }
    this.startSelect = !this.startSelect;
    console.log('startId: ' + this.start + ', endId: ' + this.end);
    this.draw(this.values);
  }
}
module.exports = CanvasDrawer;