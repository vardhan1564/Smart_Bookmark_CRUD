package com.smartbooking.controller;

import com.smartbooking.entity.Bookmark;
import com.smartbooking.service.BookmarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*") 
@RestController
@RequestMapping("/api/bookmarks")
public class BookmarkController {

    @Autowired
    private BookmarkService bookmarkService;

    @GetMapping
    public List<Bookmark> getAllBookmarks() {
        return bookmarkService.getAllBookmarks();
    }

    //By id 
    @GetMapping("/{id}")
    public ResponseEntity<Bookmark> getBookmarkById(@PathVariable Long id) {
        return bookmarkService.getBookmarkById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    	// create bookmark
    @PostMapping
    public Bookmark createBookmark(@RequestBody Bookmark bookmark) {
        return bookmarkService.createBookmark(bookmark);
    }

    // update bookmark
    @PutMapping("/{id}")
    public ResponseEntity<Bookmark> updateBookmark(@PathVariable Long id, @RequestBody Bookmark bookmarkDetails) {
        try {
            Bookmark updatedBookmark = bookmarkService.updateBookmark(id, bookmarkDetails);
            return ResponseEntity.ok(updatedBookmark);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // delete bookmark
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBookmark(@PathVariable Long id) {
        bookmarkService.deleteBookmark(id);
        return ResponseEntity.noContent().build();
    }
}