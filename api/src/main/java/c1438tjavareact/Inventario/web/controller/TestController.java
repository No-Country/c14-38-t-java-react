package c1438tjavareact.Inventario.web.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/test")
    public String test(){
        return "test is ok, np";
    }

    @GetMapping("/testprotected")
    public String test2(){
        return "estarías como autenticado, muchacho.";
    }
}