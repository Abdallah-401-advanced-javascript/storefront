import React from 'react';
import { connect } from 'react-redux';
import { addToCart} from '../../store/cart';

const CartCounter = props => {

  return (
    <section className="counter">
      <ul id='categories'>
        {props.Cart.cartProducts.map( item=> 
          <li  key={item.name}> |{item.name.toUpperCase()}|</li>,
        )}
      </ul>
    </section>
  );

};

const mapStateToProps = state => ({
  Cart: state.Cart,
});

const mapDispatchToProps = {addToCart};

// const mapDispatchToProps = ({
//     showCategory: dispatch(showCategory()),
//     reset: dispatch(reset())
// })

// instead of exporting the component we export it after it's been connected the redux store
export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);