export const product = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  else {
    return arr.filter(prod => prod != null || prod != undefined).reduce((x, y) => x + y);
  }


};
