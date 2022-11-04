package com.techelevator.dao;

import com.techelevator.model.Landmark;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class JdbcLandmarkDao implements LandmarkDao {

    private final JdbcTemplate jdbcTemplate;

    public JdbcLandmarkDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Landmark> allLandmarks() {
        List<Landmark> landmarks = new ArrayList<>();
        String sql = "SELECT landmark_id, landmark_name, category, description FROM landmark";
        SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql);

        while (rowSet.next())
        {
            landmarks.add(mapRowToLandmark(rowSet));
        }
        return landmarks;
    }

    @Override
    public Landmark getLandmarkById(int landmarkId) {
        Landmark landmark = new Landmark();
        String sql = "SELECT landmark_id, landmark_name, category, description FROM landmark WHERE landmark_id = ?;";
        SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql, landmarkId);

        if (rowSet.next())
        {
            return mapRowToLandmark(rowSet);
        }

        return landmark;
    }

//    @Override
//    public Landmark findByLandmarkName(String landmarkName) {
//        Landmark landmark = new Landmark();
//        String sql = "SELECT landmark_id, landmark_name, category, description FROM landmark WHERE landmark_name ILIKE ?;";
//        SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql, landmarkName);
//
//        if (rowSet.next())
//        {
//            return mapRowToLandmark(rowSet);
//        }
//
//        return landmark;
//    }

    private Landmark mapRowToLandmark(SqlRowSet rs) {
        Landmark landmark = new Landmark();
        landmark.setLandmarkId(rs.getInt("landmark_id"));
        landmark.setLandmarkName(rs.getString("landmark_name"));
        landmark.setCategory(rs.getString("category"));
        landmark.setDescription(rs.getString("description"));
        return landmark;
    }
}
