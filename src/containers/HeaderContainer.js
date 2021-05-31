import Header from '../components/Header'
import {connect} from 'react-redux'
import { removeToCart} from '../service/actions/actions' 

const mapStateToProps=state=>({
     data:state.cardItems
})

const mapDispatchToProps= dispatch => ({
     removeToCartHandler:eachData => dispatch(removeToCart(eachData))
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home;

