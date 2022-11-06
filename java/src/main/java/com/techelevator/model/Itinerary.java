package com.techelevator.model;

import java.time.LocalDate;
import java.util.Date;

public class Itinerary {

    private int itineraryId;
    private String itineraryName;
    private String startingPoint;
    private LocalDate itineraryDate;

    private Long userId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Itinerary(){};

    public int getItineraryId() {
        return itineraryId;
    }

    public void setItineraryId(int itineraryId) {
        this.itineraryId = itineraryId;
    }

    public String getItineraryName() {
        return itineraryName;
    }

    public void setItineraryName(String itineraryName) {
        this.itineraryName = itineraryName;
    }

    public String getStartingPoint() {
        return startingPoint;
    }

    public void setStartingPoint(String startingPoint) {
        this.startingPoint = startingPoint;
    }

    public LocalDate getItineraryDate() {
        return itineraryDate;
    }
//userId

    public void setItineraryDate(LocalDate itineraryDate) {
        this.itineraryDate = itineraryDate;
    }

    @Override
    public String toString() {
        return "Itinerary{" +
                "itineraryId=" + itineraryId +
                ", itineraryName='" + itineraryName + '\'' +
                ", startingPoint=" + startingPoint +
                ", itineraryDate=" + itineraryDate +
                '}';
    }
}
