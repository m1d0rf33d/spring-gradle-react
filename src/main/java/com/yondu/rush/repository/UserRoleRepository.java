package com.yondu.rush.repository;

import com.yondu.rush.model.User;
import com.yondu.rush.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by aomine on 5/26/17.
 */
public interface UserRoleRepository extends JpaRepository<UserRole, Long>{

    List<UserRole> findByUser(User user);
}
