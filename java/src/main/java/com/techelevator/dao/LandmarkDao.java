package com.techelevator.dao;

import com.techelevator.model.Landmark;

import java.util.List;

public interface LandmarkDao {

    List<Landmark> allLandmarks();

//    Landmark getLandmarkById(int landmarkId);
//
//    Landmark findByLandmarkName(String landmarkName);
//
//    int findLandmarkIdByName(String landmarkName);
}
