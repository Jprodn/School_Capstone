package com.techelevator.dao;


public interface RatingDao {
    void addLikes(int landmarkId);
    void addDislikes(int landmarkId);

    int getLikeCount(int landmarkId);

    int getDislikeCount(int landmarkId);
}

