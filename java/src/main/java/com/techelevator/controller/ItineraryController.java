package com.techelevator.controller;

import com.techelevator.model.Itinerary;
import com.techelevator.dao.ItineraryDao;
import com.techelevator.dao.UserDao;
import com.techelevator.dao.LandmarkDao;

import com.techelevator.model.Landmark;
import com.techelevator.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.Date;
import javax.validation.Valid;

@RestController
@PreAuthorize("isAuthenticated()")
@CrossOrigin
public class ItineraryController {
    @Autowired
    ItineraryDao itineraryDao;
    @Autowired
    UserDao userDao;
    @Autowired
    LandmarkDao landmarkDao;

    public ItineraryController(ItineraryDao itineraryDao) {
        this.itineraryDao = itineraryDao;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "users/{id}/itinerary", method = RequestMethod.POST)
    public void createItinerary(@Valid @RequestBody Itinerary itinerary, User user, Landmark landmark, @PathVariable int id) {
        int itineraryId = itinerary.getItineraryId();
        String itineraryName = itinerary.getItineraryName();
        String startingPoint = itinerary.getStartingPoint();
        Date itineraryDate = itinerary.getItineraryDate();
        long userId = user.getId();
        int landmarkId = landmark.getLandmarkId();
        itineraryDao.createItinerary(itinerary, user, landmark);
    }
}
