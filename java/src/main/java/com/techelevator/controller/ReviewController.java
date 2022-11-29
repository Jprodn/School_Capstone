package com.techelevator.controller;

import com.techelevator.dao.ReviewDao;
import com.techelevator.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/landmark/review")
@CrossOrigin
public class ReviewController {
    @Autowired
    ReviewDao reviewDao;

    public ReviewController(ReviewDao reviewDao) {
        this.reviewDao = reviewDao;
    }

    @RequestMapping(value = "/add-review", method = RequestMethod.POST)
    public void addReview(@RequestBody Review review) {
        reviewDao.addReview(review);
    }

    @RequestMapping(value = "/get-reviews/{landmarkId}", method = RequestMethod.GET)
    public List<Review> getReviews(@PathVariable int landmarkId) {
        return reviewDao.getReviews(landmarkId);
    }
}
