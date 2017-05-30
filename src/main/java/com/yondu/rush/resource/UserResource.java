package com.yondu.rush.resource;

import com.yondu.rush.model.User;
import com.yondu.rush.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by aomine on 5/30/17.
 */
@RestController
@RequestMapping(value = "/api")
public class UserResource {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public ResponseEntity<User> postUser(@RequestBody User user) {

        return new ResponseEntity(userService.createUser(user), HttpStatus.CREATED);
    }
}
