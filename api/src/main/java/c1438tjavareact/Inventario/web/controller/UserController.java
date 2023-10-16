package c1438tjavareact.Inventario.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import c1438tjavareact.Inventario.model.persistence.entity.User;
import c1438tjavareact.Inventario.web.service.UserService;
@RestController
@RequestMapping("/api")
public class UserController {
    
    @Autowired
    private UserService userService;

    /*@PutMapping("/edit/{id}")
    public ResponseEntity<User> editUser(@PathVariable Long id, @RequestBody User userUpdate) {
        User currentUser = userService.searchById(id);
        if(currentUser!=null){
            userService.update(id, userUpdate);
            return ResponseEntity.ok(currentUser);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }*/

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id){
        User currentUser = userService.searchById(id);
        if(currentUser!=null){
            userService.delete(id);
            return "El usuario fue eliminado";
        }
        return "El usuario ingresado no existe";
    }
    @GetMapping("/user/all")
    public List<User> searchAll(){
        return userService.searchAll();
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<User> searchById(@PathVariable Long id){
        User currentUser = userService.searchById(id);
        return ResponseEntity.ok(currentUser);
    }

}
