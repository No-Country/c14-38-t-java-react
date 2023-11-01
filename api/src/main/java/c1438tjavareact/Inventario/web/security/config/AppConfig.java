package c1438tjavareact.Inventario.web.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import c1438tjavareact.Inventario.model.persistence.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class AppConfig {

    private final UserRepository userRepo;

    /**
     * Crea un servicio de detalles de usuario personalizado que busca usuarios por correo electrónico.
     * @return Un servicio de detalles de usuario personalizado.
     */
    @Bean
    public UserDetailsService userDetailsService(){
        return username -> userRepo.findUserByEmail(username)
            .orElseThrow(()->new UsernameNotFoundException("El usuario no existe"));
    }

    /**
     * Crea un proveedor de autenticación que utiliza el servicio de detalles de usuario y un codificador de contraseñas.
     * @return Un proveedor de autenticación personalizado.
     */
    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }
    /**
     * Crea un codificador de contraseñas BCrypt.
     * @return Un codificador de contraseñas BCrypt.
     */

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * Obtiene el administrador de autenticación para la configuración de seguridad.
     * @param authConfig La configuración de autenticación.
     * @return El administrador de autenticación.
     * @throws Exception Si hay un error al obtener el administrador de autenticación.
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception{
        return authConfig.getAuthenticationManager();
    }

}
