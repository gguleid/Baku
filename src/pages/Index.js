import { Link } from "react-router-dom";

function Index(props){
    const loaded = () => {
        return props.products.map((product) => (
        <div key={product._id} className="product">
        <Link to={'/products/${product._id}'}><h1>{product.name}</h1></Link>
        <img src={product.image} alt={product.image} />
        <h3>{product.description}</h3>
        </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };


    return props.products ? loaded() : loading();
}

export default Index;