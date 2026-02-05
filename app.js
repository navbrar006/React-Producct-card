function ProductCard(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <p className="price">₹{props.price}</p>

            {props.inStock ? (
                <div className="stock in">In Stock</div>
            ) : (
                <div className="stock out">Out of Stock</div>
            )}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <ProductCard
                name="Wireless Headphones"
                price="2999"
                image="https://via.placeholder.com/300"
                inStock={true}
            />

            <ProductCard
                name="Smart Watch"
                price="4999"
                image="https://via.placeholder.com/300"
                inStock={false}
            />

            <ProductCard
                name="Bluetooth Speaker"
                price="1999"
                image="https://via.placeholder.com/300"
                inStock={true}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
