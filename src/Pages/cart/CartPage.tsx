import { Product } from "../../Types/Products";

export const CartPage = (props: Product) => {
  const { nameProduct, img, stock, price } = props;

  return (
    <div>
      <h2>{nameProduct}</h2>
      <img src={img} alt={nameProduct} />
      <p>Stock: {stock ? "Disponible" : "Agotado"}</p>
      <p>Precio: {price}</p>
    </div>
  );
};