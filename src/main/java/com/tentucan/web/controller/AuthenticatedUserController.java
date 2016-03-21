package com.tentucan.web.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/authenticated")
public class AuthenticatedUserController {

    @RequestMapping
    Principal getAuthenticatedUser(Principal principal) {
        return principal;
    }

}
