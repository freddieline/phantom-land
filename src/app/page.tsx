"use client";
import "./page.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import {
  setCurrentPage,
} from "../store/slices/bookmarkSlice";
import { useRouter } from "next/navigation";
import { Bookmark } from "../types/types";

export default function Home() {
  const dispatch = useDispatch();
    const router = useRouter(); 
  const { bookmarks, currentPage, bookmarksPerPage } = useSelector(
    (state: RootState) => state.bookmarks,
  );

  const indexOfLastBookmark = currentPage * bookmarksPerPage;
  const indexOfFirstBookmark = indexOfLastBookmark - bookmarksPerPage;
  const currentBookmarks = bookmarks.slice(
    indexOfFirstBookmark,
    indexOfLastBookmark,
  );

  const totalPages = Math.ceil(bookmarks.length / bookmarksPerPage);

  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const navigateToSubmitBookmarkPage = () => {
    router.push("/submit-a-bookmark");
  }

  return (
    <div className="page">
      <a href="#" onClick={navigateToSubmitBookmarkPage}>Submit a new bookmark</a>
      <div className="list">
        {currentBookmarks.map((bookmark: Bookmark) => (
          <li key={bookmark.id}>
            <a href={bookmark.url} target="_blank">
              {bookmark.name || bookmark.url}
            </a>
          </li>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 ? (
          <a
            href="#"
            className="pagination-item"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            {`<`}
          </a>
        ) : (
          <span className="pagination-item">{`<`}</span>
        )}
        <span className="pagination-item">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages ? (
          <a
            href="#"
            className="pagination-item"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            {`>`}
          </a>
        ) : (
          <span className="pagination-item">{`>`}</span>
        )}
      </div>
    </div>
  );
}
