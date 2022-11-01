package com.techelevator.dao;

import com.techelevator.model.Itinerary;

import java.util.List;

public interface ItineraryDao {

    List<Itinerary> findAll();

    Itinerary getItineraryByItineraryId(int itineraryId);

    Itinerary findByItineraryName(String itineraryName);

    int findItineraryIdByItineraryName(String itineraryName);

    boolean create(String itineraryName, String startingPoint, String itineraryDate);

}
