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
    console.log('draw');
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
        rowDiv.appendChild(newDiv);
      }
      this.parent.appendChild(rowDiv);
    }
  }

  clickHandler(newDiv) {
    if (this.startSelect) {
      if (this.startDiv) {
        this.startDiv.classList.remove("start");
      }
      newDiv.classList.toggle('start');
      this.startDiv = newDiv;
    } else {
      if (this.endDiv) {
        this.endDiv.classList.remove("end");
      }
      newDiv.classList.toggle('end');
      this.endDiv = newDiv;
    }
    this.startSelect = !this.startSelect;
    console.log('startId: ' + this.startDiv.id + ', endId: ' + (this.endDiv ? this.endDiv.id : ''));
  }
}
module.exports = CanvasDrawer;