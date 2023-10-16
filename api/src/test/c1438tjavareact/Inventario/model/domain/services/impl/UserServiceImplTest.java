package c1438tjavareact.Inventario.model.domain.services.impl;

import c1438tjavareact.Inventario.model.persistence.entity.User;
import c1438tjavareact.Inventario.model.persistence.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class UserServiceImplTest {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private UserRepository userRepository;

    @Test
    void testCreateUser() {
        User userToCreate = new User();
        userToCreate.setUsername("testuser");
        userToCreate.setPassword("testpassword"); // Establecer la contraseña
        User createdUser = userService.create(userToCreate);

        // Recupera el usuario de la base de datos de prueba
        User retrievedUser = userRepository.findById(Math.toIntExact(createdUser.getId())).orElse(null);

        // Verifica que el usuario se haya creado correctamente
        assertEquals(userToCreate, retrievedUser);
    }

    @Test
    void testUpdateUser() {
        User userToUpdate = new User();
        userToUpdate.setUsername("testuser");
        userToUpdate.setPassword("testpassword"); // Establecer la contraseña
        User createdUser = userService.create(userToUpdate);

        // Actualiza el usuario
        createdUser.setUsername("newusername");
        createdUser.setPassword("newpassword"); // Actualiza la contraseña
        User updatedUser = userService.update(createdUser);

        // Recupera el usuario actualizado de la base de datos de prueba
        User retrievedUser = userRepository.findById(Math.toIntExact(updatedUser.getId())).orElse(null);

        // Verifica que el usuario se haya actualizado correctamente
        assertEquals("newusername", retrievedUser.getUsername());
        assertEquals("newpassword", retrievedUser.getPassword()); // Verifica la contraseña actualizada
    }
}
