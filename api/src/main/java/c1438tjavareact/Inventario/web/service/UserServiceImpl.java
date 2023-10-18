package c1438tjavareact.Inventario.web.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import c1438tjavareact.Inventario.model.persistence.entity.User;
import c1438tjavareact.Inventario.model.persistence.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;

    /*@Override
    public User update(Long id, User userUpdate) {
        return userRepo.save(userUpdate);
    }*/

    @Override
    public User searchById(Long id){
        return userRepo.findById(id).orElseThrow();
    }

    @Override
    public List<User> searchAll(){
        return userRepo.findAll();
    }

    @Override
    public String delete(Long id) {
        userRepo.deleteById(id);
        return "Usuario eliminado";
    }


}