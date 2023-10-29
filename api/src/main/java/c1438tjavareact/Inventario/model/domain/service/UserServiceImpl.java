package c1438tjavareact.Inventario.model.domain.service;

import java.util.List;

import c1438tjavareact.Inventario.web.controller.models.UserUpdateRequest;
import c1438tjavareact.Inventario.web.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import c1438tjavareact.Inventario.model.persistence.entity.User;
import c1438tjavareact.Inventario.model.persistence.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;

    @Override
    public User update(Long id, User user) {
        User currentUser = userRepo.findById(id).orElseThrow(null);
        if(currentUser.getEmail()!= null){
            currentUser.setName(user.getName());
            currentUser.setLastName(user.getLastName());
            currentUser.setCompanyName(user.getCompanyName());
            return userRepo.save(currentUser);
        }
        return null;
    }

    @Override
    public User searchById(Long id){
        return userRepo.findById(id).orElseThrow(null);
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