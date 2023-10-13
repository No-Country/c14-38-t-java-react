package c1438tjavareact.Inventario.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import c1438tjavareact.Inventario.model.persistence.entity.User;
import c1438tjavareact.Inventario.model.persistence.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public List<User> getUsers() {
        return userRepo.findAll();
    }

    public void editUser(User user) {
        userRepo.save(user);
    }

    @Transactional
    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }

    public User searchUser(Long id) {
        return userRepo.findById(id).orElse(null);
    }
    
}
