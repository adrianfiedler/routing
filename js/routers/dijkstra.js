if (typeof define !== 'function') {
  var define = require('amdefine')(module)
}
define(function () {

  class QuickSort {

    constructor(delay = 0) {
      this.delay = delay;
    }
    sort (list, iterationObserver) {
      this.list = list;
      this.iterationObserver = iterationObserver;
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
        if (!list) {
          reject('list is undefined');
        }
        if (list.length == 0 || list.length == 1) {
          resolve(list);
        }
        this.callStack = new Set();
        this.quicksort(0, this.list.length - 1);
      });
    }

    quicksort (left, right) {
      if (left < right) {
        const teiler = this.partition(left, right);
        if (this.iterationObserver) {
          this.iterationObserver(this.list);
        }
        let timerId = setTimeout(() => {
          this.quicksort(left, teiler - 1);
          this.quicksort(teiler + 1, right);
          this.callStack.delete(timerId);
          if (this.callStack.size == 0) {
            this.resolve(this.list);
          }
        }, this.delay);
        this.callStack.add(timerId);
      }
    }

    partition (left, right) {
      let i = left;
      let j = right - 1;
      let pivot = this.list[right];

      do {
        while (i < right && this.list[i] < pivot) {
          i++;
        }

        while (j > left && this.list[j] >= pivot) {
          j--;
        }
        if (i < j) {
          const temp = this.list[i];
          this.list[i] = this.list[j];
          this.list[j] = temp;
        }
      } while (i < j);
      let temp = this.list[i];
      this.list[i] = pivot;
      this.list[right] = temp;
      return i;
    }
  }

  return QuickSort;
});