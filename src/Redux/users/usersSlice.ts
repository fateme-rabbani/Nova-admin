import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types/user";
import type { getApiErrorKey } from "../../Utils/api/getApiErrorKey";

interface UsersState {
  items: User[];
  loading: boolean;
  error: ReturnType<typeof getApiErrorKey> | null;
}

const initialState: UsersState = {
  items: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UsersState>) => {
      state.items = action.payload.items;
      state.loading = action.payload.loading;
      state.error = action.payload.error;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.items.unshift(action.payload);
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((user) => user.id !== action.payload);
    },
  },
});

export const { setUsers, addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;
