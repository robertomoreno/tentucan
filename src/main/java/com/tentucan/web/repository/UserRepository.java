package com.tentucan.web.repository;

import com.tentucan.web.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UserRepository extends MongoRepository<User, String> {

    User findByName(@Param("name") String name);

    void deleteByName(@Param("name") String name);
}
