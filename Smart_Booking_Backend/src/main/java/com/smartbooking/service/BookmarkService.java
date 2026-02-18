package com.smartbooking.service;

import com.smartbooking.entity.Bookmark;
import java.util.List;
import java.util.Optional;

public interface BookmarkService {
    List<Bookmark> getAllBookmarks();
    Optional<Bookmark> getBookmarkById(Long id);
    Bookmark createBookmark(Bookmark bookmark);
    Bookmark updateBookmark(Long id, Bookmark bookmarkDetails);
    void deleteBookmark(Long id);
}