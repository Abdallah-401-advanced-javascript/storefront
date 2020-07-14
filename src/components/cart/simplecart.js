import React from 'react';
import { connect } from 'react-redux';
import { showCart} from '../../store/categories';

const CartCounter = props => {

  return (
    <section className="counter">
      <ul id='categories'>
        {props.Category.cart.map( item=> 
          <li onClick={()=> props.showCart(item.name)} key={item.name}> |{item.name.toUpperCase()}|</li>,
        )}
      </ul>
    </section>
  );

};

const mapStateToProps = state => ({
  Category: state.Category,
});

const mapDispatchToProps = {showCart};

// const mapDispatchToProps = ({
//     showCategory: dispatch(showCategory()),
//     reset: dispatch(reset())
// })

// instead of exporting the component we export it after it's been connected the redux store
export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);