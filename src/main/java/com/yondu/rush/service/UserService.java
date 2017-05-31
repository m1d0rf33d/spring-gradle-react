package com.yondu.rush.service;

import com.yondu.rush.model.User;
import com.yondu.rush.model.dto.UserDTO;
import com.yondu.rush.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

/**
 * Created by aomine on 5/30/17.
 */
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User createUser(User user) {


        User u = new User();
        u.setUsername(user.getUsername());
        u.setDateCreated(new Date());
        u.setName(user.getName());
        u.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(u);
    }

    public Optional<UserDTO> login(UserDTO userDTO) {

        Optional<User> user = userRepository.findOneByUsername(userDTO.getUsername());
        if (user.isPresent()) {
            String hashPassword = passwordEncoder.encode(userDTO.getPassword());
            if (hashPassword.equals(user.get().getPassword())) {
                return Optional.of(userDTO);
            }
        }

        return null;
    }

}
