package com.techelevator.dao;

import com.techelevator.model.Review;

import java.util.List;

public interface ReviewDao {
    void addReview(Review review);
    List<Review> getReviews(int landmarkId);
}
