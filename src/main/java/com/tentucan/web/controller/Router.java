package com.tentucan.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Router {
    @RequestMapping({
            "/public/home",
            "/admin/users",
            "/admin/users/form",
            "/application"
    })
    public String index() {
        return "forward:/index.html";

    }
}
