package c1438tjavareact.Inventario.web.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controlador para realizar pruebas y verificar el funcionamiento de la aplicación.
 */

@RestController
@RequestMapping("/api")
public class TestController {

    /**
     * Endpoint para probar el funcionamiento básico de la aplicación.
     * @return Un mensaje de prueba.
     */

    @GetMapping("/test")
    public String test(){
        return "test is ok, np";
    }

    /**
     * Endpoint de prueba protegido, indicando que el usuario estaría autenticado.
     * @return Un mensaje que indica que el usuario estaría autenticado.
     */
    @GetMapping("/testprotected")
    public String test2(){
        return "estarías como autenticado, muchacho.";
    }
}