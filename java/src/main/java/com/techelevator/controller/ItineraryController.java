package com.techelevator.controller;

import com.techelevator.dao.UserDao;
import com.techelevator.model.Itinerary;
import com.techelevator.dao.ItineraryDao;

import com.techelevator.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;

import java.security.Principal;
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

    public ItineraryController(ItineraryDao itineraryDao, UserDao userDao) {
        this.itineraryDao = itineraryDao;
        this.userDao = userDao;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "/itinerary", method = RequestMethod.POST)
    public void createItinerary(@Valid @RequestBody Itinerary itinerary, Principal principal) {
//        int itineraryId = itinerary.getItineraryId();
//        String itineraryName = itinerary.getItineraryName();
//        String startingPoint = itinerary.getStartingPoint();
//        LocalDate itineraryDate = itinerary.getItineraryDate();

        //Query USer table to find row for username. You can gate username from Principal.
        User user = userDao.findByUsername(principal.getName());
        itinerary.setUserId(user.getId());
        itineraryDao.createItinerary(itinerary);
    }
}
