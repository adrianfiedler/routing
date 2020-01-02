const QuickSort = require('../js/sorters/quicksort');

describe('QuickSort suite', function () {
  beforeEach(function () {
    this.sorter = new QuickSort(0);
  });

  it('sorts empty input ', async function () {
    let sortedList = await this.sorter.sort();
    expect(sortedList.length).toBe(0);
  });

  it('sorts empty input array []', async function () {
    let sortedList = await this.sorter.sort([]);
    expect(sortedList.length).toBe(0);
  });

  it('sorts input array [5]', function () {
    return this.sorter.sort([5]).then((sortedList) => {
      expect(sortedList.length).toBe(1);
      expect(sortedList[0]).toBe(5);
    });
  });

  it('sorts input array [5,2,10,6,4,99]', function () {
    return this.sorter.sort([5, 2, 10, 6, 4, 99]).then((sortedList) => {
      const expectedArr = [2, 4, 5, 6, 10, 99];
      expect(sortedList.length).toBe(6);
      expect(compareArrays(sortedList, expectedArr)).toBe(true);
    });
  });

  function compareArrays (arr1, arr2) {
    if (arr1.length != arr2.length) {
      return false;
    }
    for (let index = 0; index < arr1.length; index++) {
      const el1 = arr1[index];
      const el2 = arr2[index];
      if (el1 !== el2) {
        return false;
      }
    }
    return true;
  }
});