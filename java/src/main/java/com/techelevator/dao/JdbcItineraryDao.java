package com.techelevator.dao;

import com.techelevator.model.Itinerary;
import com.techelevator.model.ItineraryLandmark;
import com.techelevator.model.Landmark;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class JdbcItineraryDao implements ItineraryDao{

    @Autowired
    private final JdbcTemplate jdbcTemplate;

    public JdbcItineraryDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Itinerary> findAll() {
        List<Itinerary> itineraries = new ArrayList<>();
        String sql = "select * from itinerary";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()) {
            Itinerary itinerary = mapRowToItinerary(results);
            itineraries.add(itinerary);
        }
        return itineraries;
    }

    @Override
    public List<Itinerary> getItinerariesByUserId(Long userId) {
        List<Itinerary> itineraries = new ArrayList<>();
        String sql = "SELECT * FROM itinerary WHERE user_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, userId);
        while(results.next()) {
            Itinerary itinerary = mapRowToItinerary(results);
            itineraries.add(itinerary);
        }
        return itineraries;
    }

    @Override
    public Itinerary getItineraryByItineraryId(int itineraryId) {
        String sql = "SELECT * FROM itinerary WHERE itinerary_id = ?";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, itineraryId);
        if(results.next()) {
            return mapRowToItinerary(results);
        } else {
            throw new RuntimeException("itineraryId " +
                    " was not found.");
        }
    }

    @Override
    public Itinerary getByItineraryName(String itineraryName) {
        return jdbcTemplate.queryForObject("SELECT itinerary_id FROM " +
                "itinerary WHERE itinerary_name = ?", Itinerary.class, itineraryName);
    }

    @Override
    public int getItineraryIdByItineraryName(String itineraryName) {
        return jdbcTemplate.queryForObject("SELECT itinerary_id FROM " +
                "itinerary WHERE itinerary_name = ?", int.class,itineraryName);
    }

    @Override
    public List<Landmark> getLandmarksByItineraryId(int itineraryId) {
        List<Landmark> landmarks = new ArrayList<>();
        String sql = "SELECT * FROM landmark AS l " +
                     "JOIN itinerary_landmarks AS il ON l.landmark_id = il.landmark_id " +
                     "WHERE il.itinerary_id = ?";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, itineraryId);
        while(results.next()) {
            Landmark landmark = mapRowToLandmark(results);
            landmarks.add(landmark);
        }
        return landmarks;
    }

    @Override
    public void createItinerary(Itinerary itinerary) {

        String sql = "INSERT INTO itinerary " +
                     "(itinerary_name, starting_point, itinerary_date, user_id) " +
                     "VALUES (?, ?, ?, ?)";

        jdbcTemplate.update(sql, itinerary.getItineraryName(), itinerary.getStartingPoint(),
                            itinerary.getItineraryDate(), itinerary.getUserId()
                            );
    }

    @Override
    public void addLandmark(int itineraryId, int landmarkId) {

        String sql =  "INSERT INTO itinerary_landmarks " +
                      "(itinerary_id, landmark_id) " +
                      "VALUES (?, ?)";

        jdbcTemplate.update(sql, itineraryId, landmarkId);
    }


    public void removeLandmark(int itineraryId, int landmarkId) {

        String sql = "DELETE from itinerary_landmarks " +
                     "WHERE itinerary_id = ? AND landmark_id = ?";

        jdbcTemplate.update(sql, itineraryId, landmarkId);
    }

    public void updateStartLocation(String startLocation, int itineraryId) {

        String sql = "UPDATE itinerary SET starting_point = ? WHERE itinerary_id = ?";

        jdbcTemplate.update(sql, startLocation, itineraryId);
    }

    public String getStartLocation(int itineraryId) {

        String sql = "SELECT starting_point\n" +
                     "FROM itinerary \n" +
                     "WHERE itinerary_id = ?";

        return jdbcTemplate.queryForObject(sql, String.class, itineraryId);
    }

    public void deleteItinerary(int itineraryId) {
        String sql = "DELETE FROM itinerary_landmarks WHERE itinerary_id = ?";
        String sql1 = "DELETE FROM itinerary WHERE itinerary_id = ? ";


        jdbcTemplate.update(sql, itineraryId);
        jdbcTemplate.update(sql1, itineraryId);
    }



    private Itinerary mapRowToItinerary(SqlRowSet rs) {
        Itinerary itinerary = new Itinerary();
        itinerary.setItineraryId(rs.getInt("itinerary_id"));
        itinerary.setItineraryName(rs.getString("itinerary_name"));
        itinerary.setStartingPoint(rs.getString("starting_point"));
        itinerary.setItineraryDate(rs.getDate("itinerary_date").toLocalDate());
        itinerary.setUserId(rs.getLong("user_id"));
        return itinerary;
    }

    private ItineraryLandmark mapRowToItineraryLandmark(SqlRowSet rs) {
        ItineraryLandmark il  = new ItineraryLandmark();

        il.setItineraryId(rs.getInt("itinerary_id"));
        il.setLandmarkId(rs.getInt("landmark_id"));
        return il;
    }

    private Landmark mapRowToLandmark(SqlRowSet rs) {
        Landmark landmark = new Landmark();
        landmark.setLandmarkId(rs.getInt("landmark_id"));
        landmark.setLandmarkName(rs.getString("landmark_name"));
        landmark.setAddress(rs.getString("address"));
        landmark.setCity(rs.getString("city"));
        landmark.setState(rs.getString("state"));
        landmark.setPostalCode(rs.getString("postal_code"));
        landmark.setCategory(rs.getString("category"));
        landmark.setDescription(rs.getString("description"));
        landmark.setImgUrl(rs.getString("image_url"));
        landmark.setMapUrl(rs.getString("map_url"));
        return landmark;
    }

}
