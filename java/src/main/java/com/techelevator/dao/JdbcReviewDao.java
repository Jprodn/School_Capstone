package com.techelevator.dao;

import com.techelevator.model.Itinerary;
import com.techelevator.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class JdbcReviewDao implements ReviewDao {

    @Autowired
    private final JdbcTemplate jdbcTemplate;

    public JdbcReviewDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void addReview(Review review) {
        String sql = "INSERT INTO review (landmark_id, title, name, review) " +
                     "VALUES(?, ?, ?, ?)";
        jdbcTemplate.update(sql, review.getLandmarkId(), review.getTitle(), review.getName(), review.getReview());
    }

    @Override
    public List<Review> getReviews(int landmarkId) {
        List<Review> reviews = new ArrayList<>();
        String sql = "SELECT * FROM review WHERE landmark_id = ? ORDER BY review_id DESC LIMIT 3";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, landmarkId);
        while(results.next()) {
            Review review = mapRowToReview(results);
            reviews.add(review);
        }
        return reviews;
    }

    private Review mapRowToReview(SqlRowSet rs) {
        Review review = new Review();
        review.setLandmarkId(rs.getInt("landmark_id"));
        review.setTitle(rs.getString("title"));
        review.setName(rs.getString("name"));
        review.setReview(rs.getString("review"));
        return review;
    }
}
