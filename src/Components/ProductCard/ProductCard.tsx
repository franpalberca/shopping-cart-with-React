import { CategoryProducts, Product } from "../../Types/Products";

export const ProductCard = (props: CategoryProducts) => {
  const { items } = props;

  return (
    <div>
      {items && items.map((item: Product) => (
        <div key={item.id}>
          <h2>{item.nameProduct}</h2>
          <img src={item.img} alt={item.nameProduct} />
          <p>Stock: {item.stock ? 'Disponible' : 'Agotado'}</p>
          <p>Precio: {item.price}</p>
        </div>
      ))}
    </div>
  );
};
