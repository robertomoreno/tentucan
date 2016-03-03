package com.tentucan.web.controller;


import com.tentucan.web.model.Customer;
import com.tentucan.web.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;


@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @RequestMapping
    List<Customer> getCustomerList() {
        return customerService.getAllCustomers();
    }

    @RequestMapping("/{name}")
    Customer getCustomer(@PathVariable String name) {
        return customerService.getCustomer(name);
    }

    @RequestMapping(method = POST)
    boolean createCustomer(@RequestBody Customer customer) {
        return customerService.createCustomer(customer);
    }

    @RequestMapping(method = PUT)
    boolean editCustomer(@RequestBody Customer customer) {
        return customerService.modifyCustomer(customer);
    }

    @RequestMapping(value="/{name}",method = DELETE)
    boolean deleteCustomer(@PathVariable String name) {
        return customerService.deleteCustomer(name);
    }

    @RequestMapping("/hey")
    String hey(){
        return "hey";
    }

}
