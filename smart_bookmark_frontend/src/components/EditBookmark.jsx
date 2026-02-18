import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import BookmarkService from '../services/BookmarkService';

const EditBookmark = () => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const navigate = useNavigate();
    const { id } = useParams(); 

    
    useEffect(() => {
        BookmarkService.getBookmarkById(id)
            .then((response) => {
                setTitle(response.data.title);
                setUrl(response.data.url);
            })
            .catch((error) => {
                console.log("Error fetching bookmark:", error);
            });
    }, [id]);

    const updateBookmark = (e) => {
        e.preventDefault();

        const bookmark = { title, url };

        BookmarkService.updateBookmark(id, bookmark)
            .then((response) => {
                console.log("Bookmark updated:", response.data);
                navigate('/bookmarks'); 
            })
            .catch((error) => {
                console.log("Error updating bookmark:", error);
            });
    };

    return (
        <div className="container">
            <br /><br />
            <div className="card col-md-6 offset-md-3">
                <h2 className="text-center">Update Bookmark</h2>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label"> Title :</label>
                            <input
                                type="text"
                                placeholder="Enter title"
                                name="title"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <label className="form-label"> URL :</label>
                            <input
                                type="text"
                                placeholder="Enter URL"
                                name="url"
                                className="form-control"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>

                        <button className="btn btn-success" onClick={(e) => updateBookmark(e)}> Update </button>
                        <Link to="/bookmarks" className="btn btn-danger" style={{ marginLeft: "10px" }}> Cancel </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditBookmark;