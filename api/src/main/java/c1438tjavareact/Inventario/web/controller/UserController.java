package c1438tjavareact.Inventario.web.controller;

import java.util.List;

import c1438tjavareact.Inventario.web.controller.models.UserUpdateRequest;
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

    @PatchMapping("/{id}")
    public ResponseEntity<User> editUser(@PathVariable Long id, @RequestBody UserUpdateRequest request) {
        User currentUser = userService.searchById(id);
        if(currentUser!=null){
            User newUserUpdate = userService.update(id, request);
            if(newUserUpdate!=null){
                return ResponseEntity.ok(newUserUpdate);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id){
        User currentUser = userService.searchById(id);
        if(currentUser!=null){
            userService.delete(id);
            return "El usuario fue eliminado";
        }
        return "El usuario ingresado no existe";
    }
    @GetMapping("/all")
    public List<User> searchAll(){
        return userService.searchAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<User> searchById(@PathVariable Long id){
        User currentUser = userService.searchById(id);
        return ResponseEntity.ok(currentUser);
    }

}
