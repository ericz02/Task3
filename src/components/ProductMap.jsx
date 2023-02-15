import products from "./ListProduct";

const ProductMap = () => {

    return <div className="product text-center">

        <p> List of products:</p>

        {products.map((product, id) => {
            const {name} = product;
            return <div key={`${id}`} className="text-center">
                <div>
                    <p>{name}</p>
                </div>
            </div>
        })}
    </div>
}

export default ProductMap;