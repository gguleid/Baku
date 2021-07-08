import { Link } from "react-router-dom";

function Index(props) {
return (
<div className="container">
    <div className="about" >
        <h2>What is Baku?</h2>
        <p>Baku was created with one goal in mind; to create a healthy, organic, ready to drink beverage using a wide variety of tea leaves. This goal has led us to create a flavor line of cold brew teas infused with organic juices, packed with nitrogen and canned at a local cannery.</p>
    </div>
    <div className="products">
        <div className="product-header">
        <h2>Products</h2> <br></br>
        </div>
        <Link to="/products/coldbrews">
            <div className="cold-brews">
                <h4>Cold Brews</h4>
                <img src="./Products.PNG" alt="Cold Brew" />
            </div>
        </Link>
    </div>
</div>
)
}
export default Index;