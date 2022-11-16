package com.techelevator.dao;

import com.techelevator.model.Hours;
import com.techelevator.model.Landmark;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class JdbcHoursDao implements HoursDao {

    private final JdbcTemplate jdbcTemplate;

    public JdbcHoursDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Hours> getHoursByLandmarkId(int landmarkId) {
        List<Hours> hours = new ArrayList<>();
        String sql = "SELECT landmark_id, weekday, open_hour, close_hour FROM hours WHERE landmark_id = ?";
        SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql, landmarkId);

        while (rowSet.next())
        {
            hours.add(mapRowToHours(rowSet));
        }
        return hours;
    }

    private Hours mapRowToHours(SqlRowSet rs) {
        Hours hours = new Hours();
        hours.setLandmarkId(rs.getInt("landmark_id"));
        hours.setWeekday(rs.getInt("weekday"));
        hours.setOpenHour(rs.getString("open_hour"));
        hours.setCloseHour(rs.getString("close_hour"));
        return hours;
    }
}
