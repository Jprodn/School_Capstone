package com.techelevator.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcRatingDao implements RatingDao {

    @Autowired
    private final JdbcTemplate jdbcTemplate;

    public JdbcRatingDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void addLikes(int landmarkId) {
        String sql = "UPDATE rating SET likes=likes+1 " +
                     "WHERE landmark_id = ?";
        jdbcTemplate.update(sql, landmarkId);
    }

    @Override
    public void addDislikes(int landmarkId) {
        String sql = "UPDATE rating SET dislikes=dislikes+1 WHERE landmark_id = ?";
        jdbcTemplate.update(sql, landmarkId);
    }
}
