package com.techelevator.controller;

import com.techelevator.dao.HoursDao;

import com.techelevator.model.Hours;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class HoursController {
    @Autowired
    private final HoursDao hoursDao;

    public HoursController(HoursDao hoursDao) {
        this.hoursDao = hoursDao;
    }

    @GetMapping(path = "/hours/{landmarkId}")
    public List<Hours> getHoursByLandmarkId(@PathVariable int landmarkId){
        return hoursDao.getHoursByLandmarkId(landmarkId);
    }
}
