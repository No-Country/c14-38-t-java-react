package c1438tjavareact.Inventario.web.service;

import java.util.List;

import c1438tjavareact.Inventario.web.controller.models.UserUpdateRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import c1438tjavareact.Inventario.model.persistence.entity.User;
import c1438tjavareact.Inventario.model.persistence.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;

    private final PasswordEncoder passwordEncoder;

    @Override
    public User update(Long id, UserUpdateRequest request) {
        User currentUser = userRepo.findById(id).orElseThrow(null);
        if(passwordEncoder.matches(request.getPassword(), currentUser.getPassword())){
            currentUser.setName(request.getName());
            currentUser.setLastName(request.getLastName());
            currentUser.setCompanyName(request.getCompanyName());
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