class Dijkstra {

  constructor(delay = 0) {
    this.delay = delay;
  }
  route (list, startId, endId, iterationObserver) {
    this.list = list;
    this.iterationObserver = iterationObserver;
    return new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      if (!list || startId === undefined || endId === undefined) {
        return reject('not all parameters set');
      }
      this.calculateDistances(startId, endId);
    });
  }

  calculateDistances (startId, endId) {
    let toVisitIds = [startId];
    let visitedIds = [];
    this.list.forEach(element => {
      element.distance = Number.MAX_VALUE;
      element.via = null;
      if (element.id != startId) {
        toVisitIds.push(element.id);
      }
    });
    this.list[startId].distance = 0;
    this.list[startId].via = 0;

    while (toVisitIds.length > 0) {
      let curr = this.list[toVisitIds.shift()];
      visitedIds[curr.id] = curr.id;
      for (let i = 0; i < curr.children.length; i++) {
        let childRef = curr.children[i];
        if (visitedIds[childRef.childId] === undefined) {
          let childNode = this.list[childRef.childId];
          let alt = curr.distance + childRef.weight;
          if (alt < childNode.distance) {
            childNode.distance = alt;
            childNode.via = curr.id;
          }
        }
      }
      if (this.iterationObserver) {
        this.iterationObserver(this.list);
      }
    }
    this.resolve(this.list);
  }
}

module.exports = Dijkstra;