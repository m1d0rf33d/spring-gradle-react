package com.yondu.rush.resource;

import com.yondu.rush.model.dto.UserDTO;
import com.yondu.rush.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Optional;

/**
 * Created by aomine on 5/26/17.
 */
@Controller
public class BaseController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<UserDTO> login(@RequestBody UserDTO userDTO) {
        Optional<UserDTO> dto = userService.login(userDTO);
        if (dto.isPresent()) {
            return new ResponseEntity<>(userDTO, HttpStatus.OK);
        }
        return new ResponseEntity<>(userDTO, HttpStatus.UNAUTHORIZED);
    }
}
