package com.techelevator.controller;

import com.techelevator.dao.LandmarkDao;
import com.techelevator.model.Landmark;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LandmarkController {
    @Autowired
    private final LandmarkDao landmarkDao;

    public LandmarkController(LandmarkDao landmarkDao) {
        this.landmarkDao = landmarkDao;
    }

    @GetMapping(path = "/landmarks")
    public List<Landmark> allLandmarks(){
        return landmarkDao.allLandmarks();
    }
}
