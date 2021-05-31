import Header from '../components/Header'
import {connect} from 'react-redux'
import { removeToCart} from '../service/actions/actions' 

const mapStateToProps=state=>({
     data:state.cardItems
})

const mapDispatchToProps= dispatch => ({
     removeToCartHandler:data => dispatch(removeToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home;

