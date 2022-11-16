package com.techelevator.dao;

import com.techelevator.model.Hours;

import java.util.List;

public interface HoursDao {

    List<Hours> getHoursByLandmarkId(int landmarkId);
}
