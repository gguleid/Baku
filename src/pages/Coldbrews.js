import { useState } from 'react';
import { Link } from 'react-router-dom';

function Coldbrews(props) {
    const [ newForm, setNewForm ] = useState({
        name:"",
        image:"",
        price:"",
        description:""
    });

    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createProducts(newForm);
        setNewForm({
            name:"",
            image:"",
            price:"",
            description:""
        });
    }


    const loaded = () => {
        return (
            <section>
                {props.products.map((item) => (
                    <div key={item._id} className="item">
                        <Link to={`/products/${item._id}`}>
                            <h1>{item.name}</h1>
                        </Link>
                        <div className='coldbrew-pics'>
                        { item.image && <img src={item.image} alt={item.name} width="400" height="520" /> }
                        </div>
                        { item.price > 0 && <h4>Price: ${item.price}</h4>}
                        <h3>{item.description}</h3>
                    </div>
                ))}
            </section>
        );
    };

    const loading = () => {
        return <h1>Loading ...</h1>
    };
    
    return (
        <section style={{ display: 'flex', justifyContent: 'space-evenly'}}>
            <form style={{marginTop: '5rem'}} onSubmit={handleSubmit}>
            <h4>New Drinks</h4>
                <input 
                    type="text"
                    onChange={handleChange}
                    value={newForm.name} 
                    name="name"
                    placeholder="Drink Name"
                 /><br /><br />
                <input 
                    type="text"
                    onChange={handleChange}
                    value={newForm.image} 
                    name="image"
                    placeholder="Image"
                 /><br /><br />
                <input 
                    type="text"
                    onChange={handleChange}
                    value={newForm.price} 
                    name="price"
                    placeholder="Price"
                 /><br /><br />
                <input 
                    type="text"
                    onChange={handleChange}
                    value={newForm.description} 
                    name="description"
                    placeholder="Description"
                 /><br /><br />
                <input 
                    type="submit"
                    value="Add Drink"
                 />
            </form>
            { props.products ? loaded() : loading() }
        </section>
    );
}

export default Coldbrews;