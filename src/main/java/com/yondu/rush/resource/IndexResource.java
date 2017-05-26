package com.yondu.rush.resource;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by aomine on 5/25/17.
 */
@RestController
public class IndexResource {

    @RequestMapping(value = "/apis/index", method = RequestMethod.GET)
    public String index() {
        return "index";
    }

}
