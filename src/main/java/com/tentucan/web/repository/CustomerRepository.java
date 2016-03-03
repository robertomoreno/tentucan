package com.tentucan.web.repository;

import com.tentucan.web.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories
public interface CustomerRepository extends MongoRepository<Customer,String> {

    Customer findByName(String name);
}
