package c1438tjavareact.Inventario.web.service;

import java.util.List;

import org.springframework.stereotype.Service;

import c1438tjavareact.Inventario.model.persistence.entity.User;

@Service
public interface UserService {

    /*User update(Long id, User user);*/
    String delete(Long id);
    List<User> searchAll();
    User searchById(Long id);
    
}
