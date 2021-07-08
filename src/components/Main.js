import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import Show from '../pages/Show';
import Index from '../pages/Index';
import ColdBrews from '../pages/Coldbrews';


function Main(props){
    const [ products, setProducts ] = useState(null);

    const URL = "https://dry-savannah-59356.herokuapp.com/products/";

    const getProducts = async () => {
        const response = await fetch (URL);
        const data = await response.json();
        setProducts(data);
    };

    const createProducts = async (item) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(item),
        });
        getProducts();
    };

    const updateProducts = async (item, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(item),
        });
        getProducts();
    };

    const deleteProducts = async id => {
        await fetch(URL + id, {
            method: "delete",
        });
        getProducts();
    };

    useEffect(() => getProducts(), []);

    return (
    <div>
        <Switch>
            <Route exact path="/">
                <Index/>
            </Route>
            <Route path="/products/coldbrews">
                <ColdBrews products={products} createProducts={createProducts} />
            </Route>
            <Route
                path="/products/:id"
                render={(rp) => (<Show 
                    {...rp}
                    products={products}
                    updateProducts={updateProducts}
                    deleteProducts={deleteProducts}
                    /> )}        
            >
            </Route>
        </Switch>
    </div>
    );
}

export default Main;