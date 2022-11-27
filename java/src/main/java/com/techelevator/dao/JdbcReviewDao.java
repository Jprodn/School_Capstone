package com.techelevator.dao;

import com.techelevator.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

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

}
