package com.techelevator.controller;

import com.techelevator.model.Itinerary;
import com.techelevator.dao.ItineraryDao;

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

    public ItineraryController(ItineraryDao itineraryDao) {
        this.itineraryDao = itineraryDao;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "users/{id}/itinerary", method = RequestMethod.POST)
    public void createItinerary(@Valid @RequestBody Itinerary itinerary, @PathVariable int id) {
        int itineraryId = itinerary.getItineraryId();
        String itineraryName = itinerary.getItineraryName();
        String startingPoint = itinerary.getStartingPoint();
        Date itineraryDate = itinerary.getItineraryDate();
        itineraryDao.createItinerary(itineraryId, itineraryName, startingPoint, itineraryDate);
    }
}
