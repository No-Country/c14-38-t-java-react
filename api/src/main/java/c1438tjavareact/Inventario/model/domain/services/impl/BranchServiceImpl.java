package c1438tjavareact.Inventario.model.domain.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import c1438tjavareact.Inventario.model.persistence.entity.Branch;
import c1438tjavareact.Inventario.model.persistence.repository.BranchRepository;
import c1438tjavareact.Inventario.web.service.BranchService;

@Service
public class BranchServiceImpl implements BranchService {

    @Autowired 
    private BranchRepository branchRepository;

    @Override
    public Branch createBranch(Branch branch) {
        return branchRepository.save(branch);
    }

    @Override
    public Branch updateBranch(Branch branch) {
        return branchRepository.save(branch);
    }

    @Override
    public String deleteBranch(Long id) {
        branchRepository.deleteById(id);
        return "La sucursal ha sido eliminada";
    }

    @Override
    public Branch getBranchById(Long id) {
        return branchRepository.findById(id).orElseThrow();
    }

    @Override
    public List<Branch> getAllBranch() {
        return branchRepository.findAll();
    }
    
}
