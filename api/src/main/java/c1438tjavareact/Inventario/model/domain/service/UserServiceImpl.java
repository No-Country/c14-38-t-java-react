package c1438tjavareact.Inventario.model.domain.service;

import java.util.List;

import c1438tjavareact.Inventario.web.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import c1438tjavareact.Inventario.model.persistence.entity.User;
import c1438tjavareact.Inventario.model.persistence.repository.UserRepository;


/**
 * Implementación del servicio UserService para gestionar usuarios.
 */
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;

    /**
     * Actualiza un usuario existente por su ID.
     * @param id   El ID del usuario que se desea actualizar.
     * @param user Los datos actualizados del usuario.
     * @return El usuario actualizado si existe, o `null` si no se encontró el usuario.
     */

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

    /**
     * Busca un usuario por su ID.
     * @param id El ID del usuario que se desea buscar.
     * @return El usuario encontrado si existe, o lanza una excepción si no se encuentra.
     */

    @Override
    public User searchById(Long id){
        return userRepo.findById(id).orElseThrow(null);
    }

    /**
     * Obtiene una lista de todos los usuarios.
     * @return Una lista de usuarios.
     */
    @Override
    public List<User> searchAll(){
        return userRepo.findAll();
    }

    /**
     * Elimina un usuario por su ID.
     * @param id El ID del usuario que se desea eliminar.
     * @return Un mensaje indicando que el usuario ha sido eliminado.
     */
    @Override
    public String delete(Long id) {
        userRepo.deleteById(id);
        return "Usuario eliminado";
    }


}