package com.techelevator.dao;

import com.techelevator.model.Landmark;

import java.util.List;

public interface LandmarkDao {

    List<Landmark> allLandmarks();

    Landmark getLandmarkById(int landmarkId);

    List<Landmark> getLandmarkByStateCity(String landmarkState, String landmarkCity);

}
