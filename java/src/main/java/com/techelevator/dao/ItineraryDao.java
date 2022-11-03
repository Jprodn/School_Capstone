package com.techelevator.dao;

import com.techelevator.model.Itinerary;

import java.util.Date;
import java.util.List;


public interface ItineraryDao {

    List<Itinerary> findAll();

    Itinerary getItineraryByItineraryId(int itineraryId);

    Itinerary findByItineraryName(String itineraryName);

    int findItineraryIdByItineraryName(String itineraryName);

    boolean createItinerary(int itineraryId, String itineraryName, String startingPoint, Date itineraryDate);

}
