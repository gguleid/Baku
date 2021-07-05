import { Route, Swtich } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props){
    return (
    <div>
        <Swtich>
            <Route exact path="/">
                <Index />
            </Route>
            <Route 
                path="/products/:id"
                render={(rp) => (
                    <Show
                        {...rp}
                    />
                )}
            />
        </Swtich> 
    </div>)
}

export default Main;