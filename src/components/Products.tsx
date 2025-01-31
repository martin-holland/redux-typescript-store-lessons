import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/hooks";
import { fetchProducts } from "../store/productsSlice";
import { RootState } from "../store/store";

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useAppDispatch();
  console.log("Products: ", products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <div>Products will be here</div>;
};

export default Products;
