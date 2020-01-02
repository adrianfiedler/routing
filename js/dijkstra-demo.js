require(['base-demo', 'routers/dijkstra'], function (base, QuickSort) {
  base.sorter = new QuickSort(100);
  base.init();
});