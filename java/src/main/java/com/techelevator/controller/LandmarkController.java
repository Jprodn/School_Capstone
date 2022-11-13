package com.techelevator.controller;

import com.techelevator.dao.LandmarkDao;
import com.techelevator.model.Landmark;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
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

    @GetMapping(path = "/landmark/{landmarkState}/{landmarkCity}")
    public List<Landmark> getLandmarkByStateCity(@PathVariable String landmarkState, @PathVariable String landmarkCity){
        return landmarkDao.getLandmarkByStateCity(landmarkState, landmarkCity);
    }

    @GetMapping(path = "/landmark/states")
    public List<String> getStates(){
        return landmarkDao.getStates();
    }

    @GetMapping(path = "/landmark/cities")
    public List<String> getCities(){
        return landmarkDao.getCities();
    }

    @GetMapping(path = "/landmark/city/{state}")
    public List<String> getCityInState(@PathVariable String state){
        return landmarkDao.getCityInState(state);
    }



}
