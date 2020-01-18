class CanvasDrawer {
  constructor(canvasParentID) {
    this.parent = document.getElementById(canvasParentID);
    let width = this.parent.clientWidth;
    let height = this.parent.clientHeight;
    const divSize = 20;
    for (let i = 0; i < Math.floor((width * height) / (divSize * divSize)); i++) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("id", i);
      newDiv.setAttribute("class", "newDiv");
      this.parent.appendChild(newDiv);
    }
  }

  draw (values) {
    console.log('draw');
  }
}
module.exports = CanvasDrawer;