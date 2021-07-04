import React from 'react';
import Categories from './Categories';
import { Grid } from 'semantic-ui-react';
import { Route } from 'react-router';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>

                        <Categories />

                    </Grid.Column>
                    <Grid.Column width={12}>

                        <Route exact path="/" component={ProductList} />
                        <Route exact path="/products" component={ProductList} />
                        <Route exact path="/products/:name" component={ProductDetail} />
                        <Route exact path="/cart" component={CartDetail} />

                    </Grid.Column>

                </Grid.Row>


            </Grid>
        </div>
    )
}
