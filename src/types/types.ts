export interface Bookmark {
  id: string;
  url: string;
  name?: string;
}

export interface BookmarksState {
  bookmarks: Bookmark[];
  currentPage: number;
  bookmarksPerPage: number;
}
