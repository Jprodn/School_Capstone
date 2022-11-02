package com.techelevator.dao;

import com.techelevator.model.Itinerary;
import com.techelevator.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.rowset.SqlRowSet;

import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

public class JdbcItineraryDao implements ItineraryDao{
    private JdbcTemplate jdbcTemplate;

    public JdbcItineraryDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Itinerary> findAll() {
        List<Itinerary> itineraries = new ArrayList<>();
        String sql = "select * from itinerary";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()) {
            Itinerary itinerary = mapRowToUser(results);
            itineraries.add(itinerary);
        }
        return itineraries;
    }

    @Override
    public Itinerary getItineraryByItineraryId(int itineraryId) {
        String sql = "SELECT * FROM itinerary WHERE itinerary_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, itineraryId);
        if(results.next()) {
            return mapRowToUser(results);
        } else {
            throw new RuntimeException("itineraryId " + itineraryId +
                    " was not found.");
        }
    }

    @Override
    public Itinerary findByItineraryName(String itineraryName) {
        return jdbcTemplate.queryForObject("SELECT itinerary_id FROM " +
                "itinerary WHERE itinerary_name = ?", Itinerary.class, itineraryName);
    }

    @Override
    public int findItineraryIdByItineraryName(String itineraryName) {
        return jdbcTemplate.queryForObject("SELECT itinerary_id FROM " +
                "itinerary WHERE itinerary_name = ?", int.class,itineraryName);
    }

    @Override
    public boolean create(String itineraryName, String startingPoint, String itineraryDate) {
        boolean itineraryCreated = false;

        //create itinerary
        String insertItinerary = "INSERT INTO itinerary" +
                "(itinerary_name, starting_point, itinerary_date VALUES (?, ?, ?)";
        String itinerary_id_column = "itinerary_id";

        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        itineraryCreated = jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(
                    insertItinerary, new String[]{itinerary_id_column});
            ps.setString(1, itineraryName);
            ps.setString(2, startingPoint);
            ps.setString(3, itineraryDate);
            return ps;
        }, keyHolder) == 1;
        int newItineraryId = (int) keyHolder.getKeys().get(itinerary_id_column);

        return itineraryCreated;
    }

    private Itinerary mapRowToUser(SqlRowSet rs) {
        Itinerary itinerary = new Itinerary();
        itinerary.setItineraryId(rs.getInt("itinerary_id"));
        itinerary.setItineraryName(rs.getString("itinerary_name"));
        itinerary.setStartingPoint(rs.getString("starting_point"));
        itinerary.setItineraryDate(rs.getString("itinerary_date"));
        return itinerary;
    }
}
