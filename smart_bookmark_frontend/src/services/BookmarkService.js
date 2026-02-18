import axios from 'axios';

const API_URL = "http://localhost:8080/api/bookmarks";

class BookmarkService {
    
    
    getAllBookmarks() {
        return axios.get(API_URL);
    }

    
    createBookmark(bookmark) {
        return axios.post(API_URL, bookmark);
    }

    
    getBookmarkById(bookmarkId) {
        return axios.get(API_URL + '/' + bookmarkId);
    }

    
    updateBookmark(bookmarkId, bookmark) {
        return axios.put(API_URL + '/' + bookmarkId, bookmark);
    }

    
    deleteBookmark(bookmarkId) {
        return axios.delete(API_URL + '/' + bookmarkId);
    }
}

export default new BookmarkService();