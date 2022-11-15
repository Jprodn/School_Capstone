package com.techelevator.dao;

import com.techelevator.model.Itinerary;
import com.techelevator.model.Landmark;

import java.util.List;


public interface ItineraryDao {

    List<Itinerary> findAll();

    Itinerary getItineraryByItineraryId(int itineraryId);
    List<Itinerary> getItineraryByUserId(Long userId);

    Itinerary findByItineraryName(String itineraryName);

    int findItineraryIdByItineraryName(String itineraryName);

    void createItinerary(Itinerary itinerary);

    void addLandmark(Itinerary itinerary);

    void removeLandmark(Landmark landmark);

    void updateStartLocation(Itinerary itinerary);

    void deleteItinerary(Itinerary itinerary);
}
