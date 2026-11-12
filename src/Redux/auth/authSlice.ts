import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthSession } from "../../types/auth";
import { readAuthSession } from "../../Storage/auth";

interface AuthState {
  token: string | null;
  username: string;
}

const emptySession: AuthState = {
  token: null,
  username: "",
};

const initialState: AuthState = readAuthSession() ?? emptySession;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (_state, action: PayloadAction<AuthSession>) => action.payload,
    clearAuth: () => emptySession,
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;
