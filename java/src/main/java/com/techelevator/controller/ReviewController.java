package com.techelevator.controller;

import com.techelevator.dao.ReviewDao;
import com.techelevator.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
