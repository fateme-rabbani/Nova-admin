import type { AppDispatch } from "../store";
import { clearAuth } from "./authSlice";
import { setProducts } from "../products/productsSlice";
import { setUsers } from "../users/usersSlice";
import { clearAuthSession } from "../../Storage/auth";

export function logoutUser(dispatch: AppDispatch) {
  clearAuthSession();
  dispatch(clearAuth());
  dispatch(setProducts({ items: [], loading: false, error: null }));
  dispatch(setUsers({ items: [], loading: false, error: null }));
}
