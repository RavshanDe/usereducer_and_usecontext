const Product = ({ item }) => {
  console.log(item);
  return (
    <div>
          <img src={item.image} />
          <p>{item.name}</p>
          <p>{item.price}</p>
    </div>
  );
};

export default Product;
