import products from "./ListProduct"

const ProductFilter = () => {

    return (
    <div>
        <p>List of Available Product Are on Sale.</p>
        {
            products.filter(item => item.onSale != false).map(({id, name, price}) => 
            <li key={id} className = "bg-blue-700 text-white">The {name} is on sale and costs ${price}</li>)
        }
    </div>
    )
}

export default ProductFilter;