package com.example.ISA2020.service;

import java.util.List;

import com.example.ISA2020.dto.PharmacyDTO;
import com.example.ISA2020.dto.PharmacyNameAddressDTO;
import com.example.ISA2020.entity.Drug;
import com.example.ISA2020.entity.Pharmacy;

public interface PharmacyService {
	
	Pharmacy findById(Long id);
    
	Pharmacy findByName(String name);
	
	Pharmacy createPharmacy(PharmacyNameAddressDTO pharmacyDTO);
	
	List<PharmacyDTO> getAllPharmacies();

}
