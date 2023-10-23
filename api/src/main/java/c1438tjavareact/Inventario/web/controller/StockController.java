package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.domain.dto.FamilyDto;
import c1438tjavareact.Inventario.model.domain.dto.StockDto;
import c1438tjavareact.Inventario.web.service.StockService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("api/stock")
public class StockController {
    private final StockService service;

    public StockController(StockService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<StockDto>>findAll(){
        return service.findAll()
                .map(StockDto -> new ResponseEntity<>(StockDto, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/{stockId}")
    public ResponseEntity<StockDto> findById(@PathVariable Long stockId){
        return service.findById(stockId)
                .map(stockDto -> new ResponseEntity<>(stockDto, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/create")
    public ResponseEntity<StockDto> create(@RequestBody StockDto stockDto){
        return service.create(stockDto)
                .map(t-> new ResponseEntity<>(t, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));    }

    @PatchMapping("/update")
    public ResponseEntity<StockDto> update(@RequestBody StockDto stockDto){
        return service.update(stockDto)
                .map(t -> new ResponseEntity<>(t, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/delete/{stockId}")
    public ResponseEntity<Boolean> delete(@PathVariable Long stockId){
        return new ResponseEntity<Boolean>(service.delete(stockId), HttpStatus.OK);
    }
}

