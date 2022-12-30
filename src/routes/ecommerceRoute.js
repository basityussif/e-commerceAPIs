import {loginRequired, register, login} from "../controllers/userControler";
import {addNewProduct, getAllProduct, updateProduct, deleteProduct} from "../controllers/productControler";
import {addNewOrder, getAllOrder, updateOrder, deleteOrder} from '../controllers/orderControler';
import {addNewCart, getAllCart, updateCart, deleteCart} from '../controllers/cartConroler';

const route = (app) => {
    app.route('/auth/register')
    .post(register);

    app.route('/auth/login')
    .post(login);


  // Product route
    app.route('/product')
    .get(loginRequired, getAllProduct)

    .post(loginRequired, addNewProduct);

    app.route('/product/:productID')
    .put(loginRequired, updateProduct)

    .delete(loginRequired, deleteProduct);

    //orders route
    app.route('/order')
    .get(loginRequired, getAllOrder)

    .post(loginRequired, addNewOrder);

    app.route('/order/:orderID')
    .put(loginRequired, updateOrder)

    .delete(loginRequired, deleteOrder);


    //cart route
    app.route('/cart')
    .get(loginRequired, getAllCart)

    .post(loginRequired, addNewCart);

    app.route('/cart:/cartID')
    .put(loginRequired, updateCart)

    .delete(loginRequired, deleteCart);

}

export default route;