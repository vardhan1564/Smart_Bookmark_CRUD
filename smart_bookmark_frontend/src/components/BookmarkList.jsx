
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookmarkService from '../services/BookmarkService';

const BookmarkList = () => {
    const [bookmarks, setBookmarks] = useState([]);

    
    useEffect(() => {
        getAllBookmarks();
    }, []);

    const getAllBookmarks = () => {
        BookmarkService.getAllBookmarks()
            .then((response) => {
                setBookmarks(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteBookmark = (bookmarkId) => {
        BookmarkService.deleteBookmark(bookmarkId)
            .then((response) => {
                getAllBookmarks()
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container">
            <h2 className="text-center">List of Bookmarks</h2>
            <Link to="/add-bookmark" className="btn btn-primary mb-2"> Add Bookmark </Link>
            <table className="bookmark-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>URL</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookmarks.map(
                            bookmark =>
                                <tr key={bookmark.id}>
                                    <td> {bookmark.title} </td>
                                    <td> <a href={bookmark.url} target="_blank" rel="noreferrer" className="link-url">{bookmark.url}</a> </td>
                                    <td>
                                        <Link className="btn btn-edit" to={`/edit-bookmark/${bookmark.id}`}>Update</Link>
                                        <button className="btn btn-danger" onClick={() => deleteBookmark(bookmark.id)}
                                            style={{ marginLeft: "10px" }}> Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BookmarkList;