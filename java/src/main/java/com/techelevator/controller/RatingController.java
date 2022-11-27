package com.techelevator.controller;

import com.techelevator.dao.RatingDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/landmark/rating")
@CrossOrigin
public class RatingController {
    @Autowired
    RatingDao ratingDao;

    public RatingController(RatingDao ratingDao) {
        this.ratingDao = ratingDao;
    }

    @RequestMapping(value = "/likes/{landmarkId}", method = RequestMethod.PUT)
    public void addLikes(@PathVariable int landmarkId) {
        ratingDao.addLikes(landmarkId);
    }

    @RequestMapping(value = "/dislikes/{landmarkId}", method = RequestMethod.PUT)
    public void addDislikes(@PathVariable int landmarkId) {
        ratingDao.addDislikes(landmarkId);
    }

    @RequestMapping(value = "/like-count/{landmarkId}", method = RequestMethod.GET)
    public int getLikeCount(@PathVariable int landmarkId) {
        return ratingDao.getLikeCount(landmarkId);
    }

    @RequestMapping(value = "/dislike-count/{landmarkId}", method = RequestMethod.GET)
    public int getDislikeCount(@PathVariable int landmarkId) {
        return ratingDao.getDislikeCount(landmarkId);
    }

}
