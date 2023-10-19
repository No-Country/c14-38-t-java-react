package c1438tjavareact.Inventario.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import c1438tjavareact.Inventario.model.persistence.entity.Branch;
import c1438tjavareact.Inventario.web.service.BranchService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/branch")
public class BranchController {

    @Autowired
    private BranchService branchService;

    @PostMapping
    public ResponseEntity<Branch> create(@Valid @RequestBody Branch branch){
        Branch newBranch = branchService.createBranch(branch);
        return new ResponseEntity<>(newBranch, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Branch> update(@PathVariable Long id, @RequestBody Branch branch){
        Branch updatedBranch = branchService.updateBranch(branch);
        return new ResponseEntity<>(updatedBranch, HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public Branch getBranchById(@PathVariable Long id){
        Branch branch = branchService.getBranchById(id);
        return branch;
    }

    @GetMapping("/all")
    public List<Branch> getAllBranch(){
        return branchService.getAllBranch();
    }
    
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id){
        branchService.deleteBranch(id);
        return "La sucursal ha sido eliminada";
    }
    
}
