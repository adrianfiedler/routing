class CanvasDrawer {
  constructor(canvasParentID) {
    this.parent = document.getElementById(canvasParentID);
    this.parentWidth = this.parent.clientWidth;
    this.parentHeight = this.parent.clientHeight;
  }

  draw (values) {
    console.log('draw');
    const divSize = this.parentWidth / values[0].length;
    let id = 0;
    for (let row = 0; row < values.length; row++) {
      let rowDiv = document.createElement('div');
      for (let col = 0; col < values[0].length; col++) {
        let newDiv = document.createElement('div');
        newDiv.id = id++;
        newDiv.setAttribute('class', 'square');
        newDiv.style.width = divSize;
        newDiv.style.height = divSize;
        newDiv.addEventListener('click', function () {
          newDiv.classList.toggle('clicked');
        });
        rowDiv.appendChild(newDiv);
      }
      this.parent.appendChild(rowDiv);
    }
  }
}
module.exports = CanvasDrawer;