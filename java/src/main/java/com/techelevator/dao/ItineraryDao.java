package com.techelevator.dao;

import com.techelevator.model.Itinerary;
import com.techelevator.model.Landmark;
import com.techelevator.model.User;

import java.util.Date;
import java.util.List;


public interface ItineraryDao {

    List<Itinerary> findAll();

    Itinerary getItineraryByItineraryId(int itineraryId);

    Itinerary findByItineraryName(String itineraryName);

    int findItineraryIdByItineraryName(String itineraryName);

    void createItinerary(Itinerary itinerary);

    //boolean updateItinerary(Itinerary itinerary);

    void addLandmark(Landmark landmark, Itinerary itinerary);
}
