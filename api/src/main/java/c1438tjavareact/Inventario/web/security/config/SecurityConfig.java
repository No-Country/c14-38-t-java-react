package c1438tjavareact.Inventario.web.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.OrRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;

import c1438tjavareact.Inventario.web.security.jwt.JwtFilter;
import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfig {
    
    private final JwtFilter jwtFilter;

    private final AuthenticationProvider authenticationProvider;

    /**
     * Configura las reglas de seguridad para la aplicación.
     * @param http El objeto HttpSecurity para configurar la seguridad.
     * @return La cadena de filtros de seguridad.
     * @throws Exception Si hay un error al configurar la seguridad.
     */

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.csrf(csrf -> csrf.disable())
            .cors(Customizer.withDefaults())
            .authorizeHttpRequests(auth -> auth.requestMatchers(publicEndpoints()).permitAll().anyRequest().authenticated())
            .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authenticationProvider(authenticationProvider)
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }

    /**
     * Define los endpoints públicos que no requieren autenticación.
     * @return Un objeto RequestMatcher que combina los endpoints públicos.
     */
    private RequestMatcher publicEndpoints(){
        return new OrRequestMatcher(
            new AntPathRequestMatcher("/api/test"),
            new AntPathRequestMatcher("/api/signup"),
            new AntPathRequestMatcher("/api/signin")
        );
    }

}
