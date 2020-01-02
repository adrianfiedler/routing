require(['base-demo', 'routers/dijkstra'], function (base, Dijkstra) {
  base.router = new Dijkstra(100);
  base.init();
});