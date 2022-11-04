package com.techelevator.controller;

import com.techelevator.dao.LandmarkDao;
import com.techelevator.model.Landmark;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;
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

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(path = "/landmark/{landmarkId}")
    public Landmark getLandmarkById(@PathVariable int landmarkId){
        return landmarkDao.getLandmarkById(landmarkId);
    }

//    @ResponseStatus(HttpStatus.OK)
//    @GetMapping(path = "/landmark/{landmarkName}")
//    public Landmark findByLandmarkName(@PathVariable String landmarkName){
//        return landmarkDao.findByLandmarkName(landmarkName);
//    }
}
