import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props){
    const [ products, setProducts ] = useState(null);

    const URL ="https://dry-savannah-59356.herokuapp.com/";

    const getProducts = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setProducts(data);
    };

    const createProducts = async (product) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(product),
        });
        getProducts();
    };
    
    useEffect(() => getProducts(), []);

    return (
    <div>
        <Switch>
            <Route exact path="/">
                <Index products={products} createProducts={createProducts} />
            </Route>
            <Route 
                path="/products/:id"
                render={(rp) => (
                    <Show
                        {...rp}
                    />
                )}
            />
        </Switch> 
    </div>)
}

export default Main;