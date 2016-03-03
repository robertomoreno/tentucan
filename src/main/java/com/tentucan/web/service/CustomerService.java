package com.tentucan.web.service;

import com.tentucan.web.model.Customer;

import java.util.List;

/**
 * Created by roberto on 26/02/2016.
 */
public interface CustomerService {

    List<Customer> getAllCustomers();

    Customer getCustomer(String name);

    boolean createCustomer(Customer customer);

    boolean modifyCustomer(Customer customer);

    boolean deleteCustomer(String customer);
}
