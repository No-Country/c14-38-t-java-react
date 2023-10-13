package c1438tjavareact.Inventario.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import c1438tjavareact.Inventario.model.persistence.entity.User;
import c1438tjavareact.Inventario.web.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userServ;

    @GetMapping("/all")
    @ResponseBody
    public List<User> getUsers() {
        return userServ.getUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User userData = this.userServ.searchUser(id);
        return ResponseEntity.ok(userData);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<User> borrarUsuario(@PathVariable Long id) {
        userServ.deleteUser(id);
        User currentUser = userServ.searchUser(id);
        return ResponseEntity.ok(currentUser);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<User> editarUser(@PathVariable Long id, @RequestBody User user) {
        User currentUser = userServ.searchUser(id);
        if (currentUser.getId() == null) {
            System.out.println("El usuario con id " + id + " no se encuentra.");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        } else {
            userServ.editUser(user);
            currentUser = userServ.searchUser(id);
            return ResponseEntity.ok(currentUser);
        }

    }
    
}
