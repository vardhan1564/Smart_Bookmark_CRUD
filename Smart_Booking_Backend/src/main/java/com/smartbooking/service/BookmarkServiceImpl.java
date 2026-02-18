package com.smartbooking.service;

import com.smartbooking.entity.Bookmark;
import com.smartbooking.repository.BookmarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookmarkServiceImpl implements BookmarkService {

    @Autowired
    private BookmarkRepository bookmarkRepository;

    @Override
    public List<Bookmark> getAllBookmarks() {
        return bookmarkRepository.findAll();
    }

    @Override
    public Optional<Bookmark> getBookmarkById(Long id) {
        return bookmarkRepository.findById(id);
    }

    @Override
    public Bookmark createBookmark(Bookmark bookmark) {
        return bookmarkRepository.save(bookmark);
    }

    @Override
    public Bookmark updateBookmark(Long id, Bookmark bookmarkDetails) {
        return bookmarkRepository.findById(id).map(bookmark -> {
            bookmark.setTitle(bookmarkDetails.getTitle());
            bookmark.setUrl(bookmarkDetails.getUrl());
            return bookmarkRepository.save(bookmark);
        }).orElseThrow(() -> new RuntimeException("Bookmark not found with id " + id));
    }

    @Override
    public void deleteBookmark(Long id) {
        bookmarkRepository.deleteById(id);
    }
}