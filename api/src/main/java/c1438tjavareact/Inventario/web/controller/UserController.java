package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.domain.services.UserService;
import c1438tjavareact.Inventario.model.persistence.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    //GetMapping para revisar una lista de usuarios.
    /* @GetMapping
    public List<User> getUsers(){
         return userService.list();
     }*/

     @PostMapping
    public ResponseEntity<User> create(@RequestBody User user){
         return new ResponseEntity<>(userService.create(user), HttpStatus.CREATED);
     }


     @PutMapping("{id}")
    public ResponseEntity<User> update(@PathVariable Long id, @RequestBody User user){
         user.setId(id);
         return new ResponseEntity<>(userService.update(user), HttpStatus.ACCEPTED);
     }
}
