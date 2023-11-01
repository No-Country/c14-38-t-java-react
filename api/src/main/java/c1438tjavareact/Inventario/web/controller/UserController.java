package c1438tjavareact.Inventario.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import c1438tjavareact.Inventario.model.persistence.entity.User;
import c1438tjavareact.Inventario.web.service.UserService;
@RestController
@RequestMapping("/api/user")
public class UserController {
    
    @Autowired
    private UserService userService;

    /**
     * Actualiza un usuario existente.
     * @param id   El ID del usuario que se va a actualizar.
     * @param user Los nuevos datos del usuario.
     * @return Una respuesta con el usuario actualizado si tiene éxito, o NOT_FOUND si el usuario no existe.
     */

    @PatchMapping("/{id}")
    public ResponseEntity<User> editUser(@PathVariable Long id, @RequestBody User user) {
        User currentUser = userService.searchById(id);
        if(currentUser!=null){
            User newUserUpdate = userService.update(id, user);
            if(newUserUpdate!=null){
                return ResponseEntity.ok(newUserUpdate);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    /**
     * Elimina un usuario por su ID.
     * @param id El ID del usuario que se va a eliminar.
     * @return Un mensaje que indica si el usuario fue eliminado o si no existe.
     */

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        User currentUser = userService.searchById(id);
        if (currentUser != null) {
            userService.delete(id);
            return ResponseEntity.ok("El usuario fue eliminado");
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    /**
     * Obtiene la lista de todos los usuarios.
     * @return Una respuesta con la lista de todos los usuarios si se encuentra, o NOT_FOUND si la lista está vacía.
     */
    @GetMapping("/all")
    public ResponseEntity<List<User>> searchAll(){
        List<User> allUsers = userService.searchAll();
        if (allUsers!= null){
        return ResponseEntity.ok(allUsers);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    /**
     * Busca un usuario por su ID.
     * @param id El ID del usuario que se desea buscar.
     * @return Una respuesta con el usuario si se encuentra, o NOT_FOUND si no existe.
     */
    @GetMapping("/{id}")
    public ResponseEntity<User> searchById(@PathVariable Long id){
        User currentUser = userService.searchById(id);
        return ResponseEntity.ok(currentUser);
    }

}
