package com.tentucan.web.service.implement;

import com.tentucan.web.model.Customer;
import com.tentucan.web.repository.CustomerRepository;
import com.tentucan.web.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer getCustomer(String name) {
        return customerRepository.findByName(name);
    }

    @Override
    public boolean createCustomer(Customer customer) {
        return customerRepository.save(customer) != null;
    }

    @Override
    public boolean modifyCustomer(Customer customer) {
        return customerRepository.save(customer) != null;
    }

    @Override
    public boolean deleteCustomer(String name) {

        try {
            customerRepository.delete(name);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
