const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);

  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRODUCTQUANTITY%}/g, product.quantity);

  output = output.replace(/{%PRODUCTPRICE%}/g, product.price);
  output = output.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%PRODUCTNUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);

  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");

  return output;
};

module.exports = replaceTemplate;
