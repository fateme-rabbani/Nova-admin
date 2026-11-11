import { createSlice } from "@reduxjs/toolkit";

interface SettingsState {
  language: "fa" | "en";
  darkMode: boolean;
}

const initialState: SettingsState = {
  language: "fa",
  darkMode: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === "fa" ? "en" : "fa";
    },
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleLanguage, toggleTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
