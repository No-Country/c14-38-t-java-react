package c1438tjavareact.Inventario.model.domain.service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import c1438tjavareact.Inventario.web.service.JwtService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;


/**
 * Implementación del servicio JwtService para generar y validar tokens JWT.
 */
@Service
public class JwtServiceImpl implements JwtService {

    @Value("${jwt_secret}")
    private String secretKey;

    /**
     * Genera un token JWT basado en los detalles del usuario.
     * @param userDetails Los detalles del usuario para los que se generará el token.
     * @return El token JWT generado.
     */

    @Override
    public String generateToken(UserDetails userDetails){
        return generateToken(new HashMap<>(), userDetails);
    }


    /**
     * Genera un token JWT con reclamaciones adicionales basado en los detalles del usuario.
     * @param extraClaims Las reclamaciones adicionales que se agregarán al token.
     * @param userDetails Los detalles del usuario para los que se generará el token.
     * @return El token JWT generado.
     */
    @Override
    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails){
        return Jwts.builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*60*24))
                .signWith(getSingInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    /**
     * Obtiene el nombre de usuario desde un token JWT.
     * @param token El token JWT del que se obtendrá el nombre de usuario.
     * @return El nombre de usuario extraído del token.
     */
    @Override
    public String getUserName(String token) {
        return getClaim(token, Claims::getSubject);
    }


    /**
     * Obtiene una reclamación específica de un token JWT.
     * @param token          El token JWT del que se obtendrá la reclamación.
     * @param claimsResolver La función que resolverá la reclamación deseada.
     * @return La reclamación especificada extraída del token.
     */
    @Override
    public <T> T getClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = getAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims getAllClaims(String token) {
        return Jwts.parserBuilder()
        .setSigningKey(getSingInKey())
        .build()
        .parseClaimsJws(token)
        .getBody();
    }

    private Key getSingInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    /**
     * Valida un token JWT en función de los detalles del usuario.
     * @param token       El token JWT que se validará.
     * @param userDetails Los detalles del usuario con los que se comparará el token.
     * @return `true` si el token es válido y pertenece al usuario especificado, `false` en caso contrario.
     */

    @Override
    public boolean validateToken(String token, UserDetails userDetails) {
        final String userName = getUserName(token);
        return userName.equals(userDetails.getUsername()) && !isTokenExpried(token);
    }

    private boolean isTokenExpried(String token) {
        return getExpiration(token).before(new Date());
    }

    private Date getExpiration(String token){
        return getClaim(token, Claims::getExpiration);
    }


}

