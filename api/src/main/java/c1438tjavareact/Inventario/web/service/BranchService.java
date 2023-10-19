package c1438tjavareact.Inventario.web.service;

import java.util.List;

import c1438tjavareact.Inventario.model.persistence.entity.Branch;

public interface BranchService {
    Branch createBranch(Branch branch);
    Branch updateBranch(Branch branch);
    String deleteBranch(Long id);
    Branch getBranchById(Long id);
    List<Branch> getAllBranch();
}
