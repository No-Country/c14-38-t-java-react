package c1438tjavareact.Inventario.model.domain.services.impl;

import c1438tjavareact.Inventario.model.persistence.entity.Family;
import c1438tjavareact.Inventario.model.persistence.repository.FamilyRepository;
import c1438tjavareact.Inventario.web.service.FamilyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FamilyServiceImpl implements FamilyService {
    @Autowired
    private FamilyRepository familyRepository;

    @Override
    public Family create(Family family) {
        return familyRepository.save(family);
    }
    @Override
    public Family update(Family family) {
        return familyRepository.save(family);
    }

    @Override
    public void delete(Long id) {
        familyRepository.deleteById(id);
    }
    @Override
    public Family getFamilyById(Long id) {
        return familyRepository.findById(id).orElse(null);
    }
    @Override
    public List<Family> getAllFamilies() { return familyRepository.findAll();
    }

}
