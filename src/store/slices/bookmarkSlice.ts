import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Bookmark, BookmarksState } from "../../types/types";

const initialBookmarks: Bookmark[] = [
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
  { id: uuidv4(), url: "https://www.google.com", name: "Google" },
  { id: uuidv4(), url: "https://www.youtube.com", name: "YouTube" },
  { id: uuidv4(), url: "https://www.facebook.com", name: "Facebook" },
];

const initialState: BookmarksState = {
  bookmarks: initialBookmarks,
  currentPage: 1,
  bookmarksPerPage: 20,
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    addBookmark: (state, action) => {
      const newBookmark = {
        id: uuidv4(),
        url: action.payload.url,
        name: action.payload.name,
      };
      state.bookmarks.push(newBookmark);
    },
    deleteBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark.id !== action.payload,
      );
    },
    editBookmark: (state, action) => {
      const { id, url, name } = action.payload;
      const bookmarkIndex = state.bookmarks.findIndex(
        (bookmark) => bookmark.id === id,
      );
      if (bookmarkIndex !== -1) {
        state.bookmarks[bookmarkIndex].url = url;
        state.bookmarks[bookmarkIndex].name = name;
      }
    },
  },
});

export const { addBookmark, deleteBookmark, editBookmark, setCurrentPage } =
  bookmarkSlice.actions;
export default bookmarkSlice.reducer;
