import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BookmarkService from '../services/BookmarkService';

const AddBookmark = () => {

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const navigate = useNavigate();

    const saveBookmark = (e) => {
        e.preventDefault();

        const bookmark = { title, url };

        
        BookmarkService.createBookmark(bookmark).then((response) => {
            console.log("Bookmark Added:", response.data);
            navigate('/bookmarks'); 
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="container">
            <br /><br />
            <div className="card col-md-6 offset-md-3">
                <h2 className="text-center">Add New Bookmark</h2>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label"> Title :</label>
                            <input
                                type="text"
                                placeholder="e.g. Google"
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
                                placeholder="e.g. https://google.com"
                                name="url"
                                className="form-control"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>

                        <button className="btn btn-success" onClick={(e) => saveBookmark(e)}> Save </button>
                        <Link to="/bookmarks" className="btn btn-danger" style={{ marginLeft: "10px" }}> Cancel </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBookmark;