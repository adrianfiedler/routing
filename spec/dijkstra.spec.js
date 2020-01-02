const Dijkstra = require('../js/routers/dijkstra');

describe('Dijkstra suite', function () {
  beforeEach(function () {
    this.router = new Dijkstra(0);
  });

  it('routes empty input', async function () {
    try {
      let routedList = await this.router.route();
    } catch (e) {
      expect(e).toBe('not all parameters set');
    }
  });

  it('routes empty input array', async function () {
    try {
      let routedList = await this.router.route([]);
    } catch (e) {
      expect(e).toBe('not all parameters set');
    }
  });

  it('routes simple 2 value array', async function () {
    let n0 = { id: 0, children: [{ weight: 1, childId: 1 }] };
    let n1 = { id: 1, children: [{ weight: 1, childId: 0 }] };
    let routedList = await this.router.route([n0, n1], 0, 1);
    expect(routedList.length).toBe(2);
    expect(routedList[0].distance).toBe(0);
    expect(routedList[0].via).toBe(0);
    expect(routedList[1].distance).toBe(1);
    expect(routedList[1].via).toBe(0);
  });

  it('routes simple 2 way array with 1 weight and 3 weight', async function () {
    let n0 = { id: 0, children: [{ weight: 1, childId: 1 }, { weight: 1, childId: 2 }] };
    let n1 = { id: 1, children: [{ weight: 1, childId: 3 }] };
    let n2 = { id: 2, children: [{ weight: 3, childId: 3 }] };
    let n3 = { id: 3, children: [] };
    let routedList = await this.router.route([n0, n1, n2, n3], 0, 3);
    expect(routedList.length).toBe(4);
    expect(routedList[3].distance).toBe(2);
    expect(routedList[3].via).toBe(1);
  });

});