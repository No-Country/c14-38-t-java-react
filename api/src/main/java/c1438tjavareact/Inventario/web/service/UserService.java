package c1438tjavareact.Inventario.web.service;

import c1438tjavareact.Inventario.model.persistence.entity.User;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public interface UserService {

    User create(User user);

    //listar
    /*List<User> list();*/

    User update(User user);
}
