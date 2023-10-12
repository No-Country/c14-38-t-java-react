package c1438tjavareact.Inventario.web.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import c1438tjavareact.Inventario.model.persistence.entity.User;
import c1438tjavareact.Inventario.model.persistence.repository.UserRepository;
import c1438tjavareact.Inventario.web.security.SWUserDetails;

public class UserDetailsServiceImpl implements UserDetailsService {
    
    @Autowired
    UserRepository userRepository;

    private final UserRepository repository;
    public UserDetailsServiceImpl(UserRepository repository){
        this.repository = repository;
    }
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = repository.findByUsername(username);
        if (user.isPresent()){
            return new SWUserDetails(user.get());
        }

        throw new UsernameNotFoundException("El usuario no existe!");
    }
}
