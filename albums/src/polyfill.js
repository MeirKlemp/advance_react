if (!Array.prototype.toSorted) {
  Array.prototype.toSorted = function (compareFn) {
    if (compareFn !== undefined && typeof compareFn !== "function") {
      throw new TypeError("toSorted: compareFn is not a function");
    }
    const A = Array.from(this);
    return A.sort(compareFn);
  };
}
