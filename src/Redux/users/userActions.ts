import type { AppDispatch } from "../store";
import { setUsers } from "./usersSlice";
import { getUsers } from "../../Utils/services/userService";
import { getApiErrorKey } from "../../Utils/api/getApiErrorKey";

export async function fetchUsers(dispatch: AppDispatch) {
  dispatch(setUsers({ items: [], loading: true, error: null }));

  try {
    const users = await getUsers();
    const items = users.map((user) => ({
      id: user.id,
      name: { firstname: user.name.firstname, lastname: user.name.lastname },
      username: user.username,
      email: user.email,
      phone: user.phone,
    }));
    dispatch(setUsers({ items, loading: false, error: null }));
  } catch (error) {
    dispatch(
      setUsers({ items: [], loading: false, error: getApiErrorKey(error) }),
    );
  }
}
