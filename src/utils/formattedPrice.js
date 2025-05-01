const convertIntoIndian = (price) => {
  const formattedPrice = price.toLocaleString("en-IN");
  return formattedPrice;
};
const finalProductPrice = (price, dis) => {
  let discount = price * (dis / 100);
  return price - discount;
};

export { convertIntoIndian, finalProductPrice };
