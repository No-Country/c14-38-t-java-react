package c1438tjavareact.Inventario.web.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration {

    /**
     * Configura las URLs permitidas por CORS (Cross-origin resource sharing)
     * y gestiona las solicitudes de peticiones provenientes de direcciones externas
     * @return Configuracion de CORS y url permitidas.
     */

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("*") //TODO: Change allowed origin to frontend URL
                        .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
                        .allowedHeaders("*"); // Enable CORS for the whole application.
            }
        };
    }
}
