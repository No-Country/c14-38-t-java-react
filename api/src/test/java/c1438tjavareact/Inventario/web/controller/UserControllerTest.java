package c1438tjavareact.Inventario.web.controller;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import c1438tjavareact.Inventario.model.persistence.entity.User;
import c1438tjavareact.Inventario.web.service.UserService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class UserControllerTest {

    @InjectMocks
    private UserController userController;

    @Mock
    private UserService userService;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testEditUser() {
        Long userId = 1L;
        User userUpdate = new User(); // Crea un objeto de usuario para testing
        User currentUser = new User();
        when(userService.searchById(userId)).thenReturn(currentUser);
        when(userService.update(userId, userUpdate)).thenReturn(userUpdate);

        ResponseEntity<User> responseEntity = userController.editUser(userId, userUpdate);

        verify(userService, times(1)).searchById(userId);
        verify(userService, times(1)).update(userId, userUpdate);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(currentUser, responseEntity.getBody());
    }

    @Test
    public void testEditUserNotFound() {
        Long userId = 1L;
        User userUpdate = new User();

        when(userService.searchById(userId)).thenReturn(null);

        ResponseEntity<User> responseEntity = userController.editUser(userId, userUpdate);

        verify(userService, times(1)).searchById(userId);
        verify(userService, never()).update(userId, userUpdate);

        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
    }

    @Test
    public void testDeleteUser() {
        Long userId = 1L;
        User currentUser = new User();

        when(userService.searchById(userId)).thenReturn(currentUser);

        ResponseEntity<String> responseEntity = userController.deleteUser(userId);
        String result = responseEntity.getBody();

        verify(userService, times(1)).searchById(userId);
        verify(userService, times(1)).delete(userId);

        assertEquals("El usuario fue eliminado", result);
    }

    @Test
    public void testDeleteUserNotFound() {
        Long userId = 1L;

        when(userService.searchById(userId)).thenReturn(null);

        ResponseEntity<String> responseEntity = userController.deleteUser(userId);
        String result = responseEntity.getBody();

        verify(userService, times(1)).searchById(userId);
        verify(userService, never()).delete(userId);

        assertEquals("El usuario ingresado no existe", result);
    }

    @Test
    public void testSearchAll() {
        List<User> userList = new ArrayList<>();
        userList.add(new User());
        userList.add(new User());

        when(userService.searchAll()).thenReturn(userList);

        ResponseEntity<List<User>> responseEntity = userController.searchAll();
        List<User> result = responseEntity.getBody();


        verify(userService, times(1)).searchAll();

        assertEquals(2, result.size());
    }

    @Test
    public void testSearchById() {
        Long userId = 1L;
        User currentUser = new User();

        when(userService.searchById(userId)).thenReturn(currentUser);

        ResponseEntity<User> responseEntity = userController.searchById(userId);

        verify(userService, times(1)).searchById(userId);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(currentUser, responseEntity.getBody());
    }
}
