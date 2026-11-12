import type { AppDispatch } from "../store";
import { setProducts } from "./productsSlice";
import { getProducts } from "../../Utils/services/productService";
import { getApiErrorKey } from "../../Utils/api/getApiErrorKey";

export async function fetchProducts(dispatch: AppDispatch) {
  dispatch(
    setProducts({
      items: [],
      loading: true,
      error: null,
    }),
  );

  try {
    const products = await getProducts();

    dispatch(
      setProducts({
        items: products,
        loading: false,
        error: null,
      }),
    );
  } catch (error) {
    dispatch(
      setProducts({
        items: [],
        loading: false,
        error: getApiErrorKey(error),
      }),
    );
  }
}
