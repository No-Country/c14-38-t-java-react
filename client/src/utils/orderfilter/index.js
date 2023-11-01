function orderfilter(productsGlobal, setProductsLocal, selected) {
  let newProducts = [...productsGlobal];

  if (selected.order !== '') {
    newProducts.sort((a, b) => {
      if (selected.order === 'Menor cantidad') {
        return a.stock - b.stock;
      } else if (selected.order === 'Mayor cantidad') {
        return b.stock - a.stock;
      }
    });
  }

  newProducts = newProducts.filter((product) => {
    return selected.category === ''
      ? true
      : product.family.name == selected.category;
  });

  newProducts = newProducts.filter((product) => {
    return selected.supplier === ''
      ? true
      : product.supplier.name == selected.supplier;
  });

  setProductsLocal(newProducts);
}

export default orderfilter;
