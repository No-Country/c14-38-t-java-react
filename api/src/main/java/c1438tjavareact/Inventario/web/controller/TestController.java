package c1438tjavareact.Inventario.web.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @RequestMapping(value = "test")
    public String test(){
        return "test is ok, np";
    }
}