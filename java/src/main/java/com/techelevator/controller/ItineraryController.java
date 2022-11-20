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
    public List<Landmark> getLandmarks(@PathVariable int itineraryId, Principal principal) {
        return itineraryDao.getLandmarksByItineraryId(itineraryId);
    }

    @RequestMapping(value = "/addLandmark", method = RequestMethod.POST)
    public void addLandmark(@RequestBody ItineraryIdDTO itineraryIdDTO, Principal principal) {
        itineraryDao.addLandmark(itineraryIdDTO.getItineraryId(), itineraryIdDTO.getLandmarkId());
    }

    @RequestMapping(value = "/removeLandmark/{itineraryId}/{landmarkId}", method = RequestMethod.DELETE)
    public void removeLandmark(@PathVariable int itineraryId, @PathVariable int landmarkId, Principal principal) {
        itineraryDao.removeLandmark(itineraryId, landmarkId);
    }

    @RequestMapping(value = "/updateStart/{itineraryId}", method = RequestMethod.PUT)
    public void updateStartLocation(@Valid  @RequestBody String startLocation, @PathVariable int itineraryId, Principal principal) {
        itineraryDao.updateStartLocation(startLocation, itineraryId);
    }

    @RequestMapping(value = "/deleteItinerary/{itineraryId}", method = RequestMethod.DELETE)
    public void deleteItinerary(@Valid @PathVariable int itineraryId, Principal principal) {
        itineraryDao.deleteItinerary(itineraryId);
    }

    public static class ItineraryIdDTO {
        private int itineraryId;

        public int getItineraryId() {
            return itineraryId;
        }

        public void setItineraryId(int itineraryId) {
            this.itineraryId = itineraryId;
        }

        public int getLandmarkId() {
            return landmarkId;
        }

        public void setLandmarkId(int landmarkId) {
            this.landmarkId = landmarkId;
        }

        private int landmarkId;
    }

}
