package com.example.ISA2020.service;

import java.util.List;

import com.example.ISA2020.dto.DrugCreateDTO;
import com.example.ISA2020.entity.Drug;

public interface DrugService {
	
	Drug findById(Long id);
    
	Drug findByName(String name);
	
	Drug createDrug(DrugCreateDTO drugDTO);
	
	Drug findByCode(String code);
	
	List<Drug> getAllDrugs();
}
