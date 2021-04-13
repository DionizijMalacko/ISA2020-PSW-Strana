package com.example.ISA2020.service;

import java.util.List;

import com.example.ISA2020.dto.DrugCreateFullDTO;
import com.example.ISA2020.dto.PharmacyDrugDetailsDTO;
import com.example.ISA2020.entity.Drug;
import com.example.ISA2020.entity.PharmacyDrugDetails;
import com.example.ISA2020.entity.PharmacyDrugKey;

public interface PharmacyDrugDetailsService {
	
	PharmacyDrugDetailsDTO findById(PharmacyDrugKey id);
	
	List<PharmacyDrugDetailsDTO> getAllPharmacyDrugDetails();
	
	void save(PharmacyDrugDetails pharmacyDrugDetails);

	List<PharmacyDrugDetails> getAllPharmacyDrugDetailsFull();

	Drug createDrug(DrugCreateFullDTO drugDTO);
}
