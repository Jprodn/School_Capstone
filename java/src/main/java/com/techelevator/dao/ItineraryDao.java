package com.techelevator.dao;

import com.techelevator.model.Itinerary;
import com.techelevator.model.ItineraryLandmark;
import com.techelevator.model.Landmark;

import java.util.List;


public interface ItineraryDao {

    List<Itinerary> findAll();

    List<Itinerary> getItinerariesByUserId(Long userId);

    Itinerary getItineraryByItineraryId(int itineraryId);

    Itinerary getByItineraryName(String itineraryName);

    int getItineraryIdByItineraryName(String itineraryName);


    List<ItineraryLandmark> getLandmarksByItineraryId(int itineraryId);

    void createItinerary(Itinerary itinerary);

    void addLandmark(Itinerary itinerary);

    void removeLandmark(Landmark landmark);

    void updateStartLocation(Itinerary itinerary);

    void deleteItinerary(Itinerary itinerary);
}
