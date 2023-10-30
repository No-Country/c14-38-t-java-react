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

@Service
public class JwtServiceImpl implements JwtService {

    @Value("${jwt_secret}")
    private String secretKey;

    @Override
    public String generateToken(UserDetails userDetails){
        return generateToken(new HashMap<>(), userDetails);
    }

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

    @Override
    public String getUserName(String token) {
        return getClaim(token, Claims::getSubject);
    }

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

