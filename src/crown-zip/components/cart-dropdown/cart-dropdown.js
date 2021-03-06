import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { createStructuredSelector} from 'reselect';

import Scroll from '../scroll/scroll.component.jsx'
import {toggelCart} from '../../redux/cart/cart.ations'
import {selectItems} from '../../redux/cart/cart.reselectors'
import DropDownItem from '../dropdown-item/dropdown-item.jsx'
import CustomeButton from '../../components/custom-button/custom-button.component.jsx'
import styles from './crat-dropdown.module.css';

const CartDropDown = ({items,history,match,toggelCart})=>{

    const handleClick = ()=> {
        history.push(`${match.url}/cart_table`);
        toggelCart()
    }

    return(
        <div className={styles.container} >
            <Scroll height={`350px`}>
            {
                items.length===0?(<div className={styles.empty} >Empty Cart !!</div>):(items.map((item,index)=>(<DropDownItem key={index} item={item} />)))
            }
            </Scroll>
            <div className={styles.footer} >
                <CustomeButton onClick={handleClick} >Check Out</CustomeButton>
            </div>
        </div>
        );
}             
const mapStateToProps=createStructuredSelector({
  items:selectItems  
})
const mapDispatchTpProps=(dispatch)=>({
    toggelCart:()=>dispatch(toggelCart())
})

export default withRouter(connect(mapStateToProps,mapDispatchTpProps)( CartDropDown));