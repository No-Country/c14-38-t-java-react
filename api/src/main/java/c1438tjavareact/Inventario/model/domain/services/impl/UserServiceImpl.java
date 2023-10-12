package c1438tjavareact.Inventario.model.domain.services.impl;

import c1438tjavareact.Inventario.model.domain.services.UserService;
import c1438tjavareact.Inventario.model.persistence.entity.User;
import c1438tjavareact.Inventario.model.persistence.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User create(User user) {
        return userRepository.save(user);
    }

    @Override
    public User update(User user) {
        return userRepository.save(user);
    }

   /* @Override
    public List<User> list() {
        return userRepository.findAll();
    }*/
}
