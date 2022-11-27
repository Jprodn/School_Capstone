package com.techelevator.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcLikes implements LikesDao{

    @Autowired
    private final JdbcTemplate jdbcTemplate;

    public JdbcLikes(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void addLikes(int landmarkId) {

    }

    @Override
    public void addDislikes(int landmarkId) {

    }
}
