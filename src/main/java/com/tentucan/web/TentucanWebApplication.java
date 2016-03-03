package com.tentucan.web;

import com.tentucan.web.model.Customer;
import com.tentucan.web.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Controller;

@SpringBootApplication
public class TentucanWebApplication implements CommandLineRunner{

    @Autowired
    private CustomerRepository customerRepository;

	public static void main(String[] args) {
		SpringApplication.run(TentucanWebApplication.class, args);
	}


    @Override
    public void run(String... args) throws Exception {
        customerRepository.deleteAll();

        customerRepository.save(new Customer("Rober","mail.rober@tentucan.com"));
        customerRepository.save(new Customer("Maria","mail.maria@tentucan.com"));
        customerRepository.save(new Customer("Pepe","mail.pepe@tentucan.com"));
        customerRepository.save(new Customer("Alex","mail.alex@tentucan.com"));
    }
}
