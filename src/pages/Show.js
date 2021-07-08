import { useEffect, useState } from "react";



function Show({ match, history, products, updateProduct, deleteProduct }){
    const [ editForm, setEditForm ] = useState({
        name:"",
        image:"",
        price:"",
        description:""
    });

    const [ item, setProduct ] = useState(null)

    useEffect(() => {   
        if(products) {
            const id = match.params.id
            const foundItem = products.find(p => p._id === id);
            setProduct(foundItem);
            setEditForm(foundItem);
        }
    }, [ products, match ])

    const loading = () => {
        return <h1>Loading cold brews...</h1>
    }
    
    const loaded = () => {
        return (
            <div>
                <h1>{item.name}</h1>
                <div className="image">
                    <img src={item.image} alt={item.name} width="400" height="520" />
                </div>
                <button onClick={()=> handleDelete(item._id)}>Delete {item.name}</button>
                <h5>Price ${item.price}</h5>
                <h3>{item.description}</h3>
            </div>);
        }

    const handleChange = (event) => {
        setEditForm({...editForm, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { _id, name, image, price, description } = editForm;
        updateProduct({ name, image, price, description }, _id);
       
    }

    const handleDelete = (id) => {
        deleteProduct(id);
        history.push('/');
       
    }

    return  (
        <div>
            {item ? loaded() : loading()}
            <form onSubmit={handleSubmit}> 
                <input 
                    type="text" 
                    name="name" 
                    value={editForm.name} 
                    placeholder="name" 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="image" 
                    value={editForm.image} 
                    placeholder="image" 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="price" 
                    value={editForm.price} 
                    placeholder= "price" 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="description" 
                    value={editForm.description} 
                    placeholder= "description" 
                    onChange={handleChange}
                />
                <input 
                    type="submit" 
                    value="Edit Person"
                />
            </form>
        </div>
        )
}

export default Show;