define([], function () {
  class CanvasDrawer {
    constructor(canvasId, canvasParentID) {
      this.canvas = document.getElementById(canvasId);
      this.canvasParent = document.getElementById(canvasParentID);

      this.canvas.width = this.canvasParent.offsetWidth;
      this.canvas.height = 600

      this.canvasWidth = this.canvas.offsetWidth;
      this.canvasHeight = 600;
    }

    draw (values) {
      console.log('draw');
      const canvasWidth = this.canvas.offsetWidth;
      const squareSize = canvasWidth / values.length;
      var ctx = this.canvas.getContext("2d");
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (let i = 0; i < values.length; i++) {
        const x = i * squareSize;
        const y = 0;

        ctx.fillStyle = "#018786";
        ctx.fillRect(x, y, squareSize - 1, values[i]);
      }
    }
  }
  return CanvasDrawer;
});