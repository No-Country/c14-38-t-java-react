package c1438tjavareact.Inventario.web.security;

import java.util.Arrays;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import c1438tjavareact.Inventario.model.persistence.entity.User;

public class SWUserDetails implements UserDetails {


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities(){
        return Arrays.asList();
    }

    private final User user;
    public SWUserDetails(User user){
        this.user = user;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    
}
