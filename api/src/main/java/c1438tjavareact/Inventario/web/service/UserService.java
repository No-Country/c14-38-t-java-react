package c1438tjavareact.Inventario.web.service;

import java.util.List;
import java.util.Optional;

import c1438tjavareact.Inventario.web.controller.models.UserUpdateRequest;
import org.springframework.stereotype.Service;
import c1438tjavareact.Inventario.model.persistence.entity.User;

@Service
public interface UserService {

    User update(Long id, UserUpdateRequest request);
    String delete(Long id);
    List<User> searchAll();
    User searchById(Long id);

}