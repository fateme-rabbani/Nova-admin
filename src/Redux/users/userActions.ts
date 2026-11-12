import type { AppDispatch } from "../store";
import { setUsers } from "./usersSlice";
import { getUsers } from "../../Utils/services/userService";
import { getApiErrorKey } from "../../Utils/api/getApiErrorKey";

export async function fetchUsers(dispatch: AppDispatch) {
  dispatch(setUsers({ items: [], loading: true, error: null }));

  try {
    const users = await getUsers();
    dispatch(setUsers({ items: users, loading: false, error: null }));
  } catch (error) {
    dispatch(
      setUsers({ items: [], loading: false, error: getApiErrorKey(error) }),
    );
  }
}
