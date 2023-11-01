package c1438tjavareact.Inventario.web.service;

import java.util.List;

import org.springframework.stereotype.Service;
import c1438tjavareact.Inventario.model.persistence.entity.User;

/**
 * Interfaz para servicios relacionados con los usuarios.
 */

@Service
public interface UserService {

    /**
     * Actualiza un usuario con los datos proporcionados.
     * @param id   El identificador único del usuario a actualizar.
     * @param user Los datos del usuario con las actualizaciones.
     * @return El usuario actualizado.
     */
    User update(Long id, User user);
    /**
     * Elimina un usuario por su identificador único.
     * @param id El identificador único del usuario a eliminar.
     * @return Un mensaje indicando el resultado de la eliminación.
     */
    String delete(Long id);
    /**
     * Obtiene una lista de todos los usuarios.
     * @return Una lista de usuarios.
     */
    List<User> searchAll();

    /**
     * Obtiene un usuario por su identificador único.
     * @param id El identificador único del usuario.
     * @return El usuario encontrado.
     */
    User searchById(Long id);

}