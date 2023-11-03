package c1438tjavareact.Inventario.web.service;

import io.jsonwebtoken.Claims;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Map;
import java.util.function.Function;

/**
 * Interfaz para servicios relacionados con JWT (JSON Web Tokens).
 */

public interface JwtService {
    /**
     * Genera un token JWT basado en los detalles del usuario.
     * @param userDetails Los detalles del usuario para los que se generará el token.
     * @return El token JWT generado.
     */

    String generateToken(UserDetails userDetails);
    /**
     * Genera un token JWT basado en los detalles del usuario y reclamaciones adicionales.
     * @param extraClaims Las reclamaciones adicionales a incluir en el token.
     * @param userDetails  Los detalles del usuario para los que se generará el token.
     * @return El token JWT generado.
     */
    String generateToken(Map<String, Object> extraClaims, UserDetails userDetails);

    /**
     * Obtiene el nombre de usuario (sujeto) de un token JWT.
     * @param token El token JWT del que se extraerá el nombre de usuario.
     * @return El nombre de usuario (sujeto) contenido en el token.
     */
    String getUserName(String token);

    /**
     * Obtiene una reclamación específica de un token JWT.
     * @param token          El token JWT del que se obtendrá la reclamación.
     * @param claimsResolver Una función para resolver la reclamación deseada.
     * @param <T>            El tipo de dato de la reclamación.
     * @return La reclamación deseada contenida en el token.
     */
    <T> T getClaim(String token, Function<Claims, T> claimsResolver);

    /**
     * Valida si un token JWT es válido para los detalles de usuario proporcionados.
     * @param token       El token JWT que se va a validar.
     * @param userDetails Los detalles del usuario con los que se comparará el token.
     * @return True si el token es válido para los detalles de usuario proporcionados, false en caso contrario.
     */
    boolean validateToken(String token, UserDetails userDetails);

}
