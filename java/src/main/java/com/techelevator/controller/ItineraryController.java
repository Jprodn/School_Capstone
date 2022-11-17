package com.techelevator.controller;

import com.techelevator.dao.UserDao;
import com.techelevator.model.Itinerary;
import com.techelevator.dao.ItineraryDao;

import com.techelevator.model.ItineraryLandmark;
import com.techelevator.model.Landmark;
import com.techelevator.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;

import java.security.Principal;
import java.util.List;
import javax.validation.Valid;

@RestController
@PreAuthorize("isAuthenticated()")
@RequestMapping(value = "/itinerary")
@CrossOrigin
public class ItineraryController {
    @Autowired
    ItineraryDao itineraryDao;

    @Autowired
    UserDao userDao;

    public ItineraryController(ItineraryDao itineraryDao, UserDao userDao) {
        this.itineraryDao = itineraryDao;
        this.userDao = userDao;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "/createItinerary", method = RequestMethod.POST)
    public void createItinerary(@Valid @RequestBody Itinerary itinerary, Principal principal) {
        User user = userDao.findByUsername(principal.getName());
        itinerary.setUserId(user.getId());
        itineraryDao.createItinerary(itinerary);
    }

    //get the whole list of user's itineraries
    @RequestMapping(value = "/getItineraries/user/{userId}", method = RequestMethod.GET)
    public List<Itinerary> getItineraries(@Valid @PathVariable Long userId, Principal principal) {
        return itineraryDao.getItinerariesByUserId(userId);
    }

    //get specific itinerary from user's itineraries
    @RequestMapping(value = "/getItinerary/user/{userId}/{itineraryId}", method = RequestMethod.GET)
    public Itinerary getItinerary(@PathVariable int itineraryId, Principal principal) {
        return itineraryDao.getItineraryByItineraryId(itineraryId);
    }

    //get Landmarks with itinerary ID
    @RequestMapping(value = "/getLandmarks/user/{userId}/{itineraryId}", method = RequestMethod.GET)
    public List<ItineraryLandmark> getLandmarks(@PathVariable int itineraryId, Principal principal) {
        return itineraryDao.getLandmarksByItineraryId(itineraryId);
    }

    @RequestMapping(value = "/addLandmark/{itineraryId}", method = RequestMethod.POST)
    public void addLandmark(@RequestBody Itinerary itinerary, Principal principal) {
        itineraryDao.addLandmark(itinerary);
    }

    @RequestMapping(value = "/remove", method = RequestMethod.DELETE)
    public void removeLandmark(@Valid @RequestBody Landmark landmark) {
        itineraryDao.removeLandmark(landmark);
    }

    @RequestMapping(value = "/updateStart", method = RequestMethod.PUT)
    public void updateStartLocation(@Valid @RequestBody Itinerary itinerary) {
        itineraryDao.updateStartLocation(itinerary);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void deleteItinerary(@Valid @RequestBody Itinerary itinerary) {
        itineraryDao.deleteItinerary(itinerary);
    }


}
