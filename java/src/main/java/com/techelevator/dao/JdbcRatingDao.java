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
        String sql = "UPDATE Rating SET likes=likes+1 Where landmark_id = ?";
        jdbcTemplate.update(sql, landmarkId);
    }

    @Override
    public void addDislikes(int landmarkId) {
        String sql = "UPDATE Rating SET dislikes=dislikes+1 Where landmark_id = ?";
        jdbcTemplate.update(sql, landmarkId);
    }
}
