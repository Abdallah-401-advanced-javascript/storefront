let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics' ,description:'Pla Pla Pla'},
    { name: 'food', displayName: 'Food',description:'Pla Pla Pla' },
    { name: 'clothing', displayName: 'Clothing',description:'Pla Pla Pla' },
  ],
  activeCategory: '',
};

// reducer : switch case
export default (state = initialState, action) => {
  let {type, payload} = action; // destructuring
  // let type = action.type
  // let payload = action.payload
  let activeCategory; 
  let  categories;
  switch(type) {
  case 'activate':
    // let products = state.products.map(product=> {
    //   if (product.category === payload) {
    //     return { name: product.name, category: product.category, price: product.price, inStock: product.inStock };
    //   }
    //   return product;
    // });
    activeCategory = payload;
    categories = state.categories;  
    return {categories,activeCategory};

  default:
    return state;
  }
};

// Actions function
export const showCategory = (name) => {
  return {
    type: 'activate',
    payload: name,
  };
};

// export const reset = () => {
//   return {
//     type: 'RESET',
//   };
// };
