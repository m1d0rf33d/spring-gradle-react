package com.yondu.rush.repository;

import com.yondu.rush.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Created by aomine on 5/26/17.
 */
public interface UserRepository extends JpaRepository<User, Long>{


    Optional<User> findOneByUsername(String username);
}
