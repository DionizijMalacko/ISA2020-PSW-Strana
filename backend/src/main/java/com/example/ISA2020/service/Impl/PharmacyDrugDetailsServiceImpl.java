package com.example.ISA2020.service.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ISA2020.dto.DrugCreateFullDTO;
import com.example.ISA2020.dto.PharmacyDrugDetailsDTO;
import com.example.ISA2020.entity.Drug;
import com.example.ISA2020.entity.Pharmacy;
import com.example.ISA2020.entity.PharmacyDrugDetails;
import com.example.ISA2020.entity.PharmacyDrugKey;
import com.example.ISA2020.repository.DrugRepository;
import com.example.ISA2020.repository.PharmacyDrugDetailsRepository;
import com.example.ISA2020.repository.PharmacyRepository;
import com.example.ISA2020.service.PharmacyDrugDetailsService;

@Service
public class PharmacyDrugDetailsServiceImpl implements PharmacyDrugDetailsService {
	
	@Autowired
    private PharmacyDrugDetailsRepository pharmacyDrugDetailsRepository;
	
	@Autowired
	private DrugRepository drugRepository;
	
	@Autowired
	private PharmacyRepository pharmacyRepository;
	
	public static Long num = (long)8;
	
	
	@Override
	public PharmacyDrugDetailsDTO findById(PharmacyDrugKey id) {
		PharmacyDrugDetailsDTO dto = new PharmacyDrugDetailsDTO();
		
		PharmacyDrugDetails pharmacyDrug = pharmacyDrugDetailsRepository.findOneById(id);
		
		dto.setPharmacyName(pharmacyDrug.getPharmacy().getName());
		dto.setDrugName(pharmacyDrug.getDrug().getName());
		dto.setDrugCode(pharmacyDrug.getDrug().getCode());
		dto.setQuantity(pharmacyDrug.getQuantity());
		
		return dto;
	}
	
	@Override
	public List<PharmacyDrugDetailsDTO> getAllPharmacyDrugDetails() {
		List<PharmacyDrugDetails> details = pharmacyDrugDetailsRepository.findAll();
		List<PharmacyDrugDetailsDTO> dtos = new ArrayList<>();
		
		for(PharmacyDrugDetails p : details) {
			PharmacyDrugDetailsDTO dto = new PharmacyDrugDetailsDTO();
			dto.setPharmacyName(p.getPharmacy().getName());
			dto.setDrugName(p.getDrug().getName());
			dto.setDrugCode(p.getDrug().getCode());
			dto.setQuantity(p.getQuantity());
			dtos.add(dto);
		}
		
		return dtos;
	}
	
	@Override
	public List<PharmacyDrugDetails> getAllPharmacyDrugDetailsFull() {
		return pharmacyDrugDetailsRepository.findAll();
	}

	@Override
	public void save(PharmacyDrugDetails pharmacyDrugDetails) {
		pharmacyDrugDetailsRepository.save(pharmacyDrugDetails);
	}
	
	@Override
	public Drug createDrug(DrugCreateFullDTO drugDTO) {
		if (drugRepository.findOneByCode(drugDTO.getCode()) != null) {
            return null;
        } //findByName vraca null ako ga nadje
		
		Drug newDrug = new Drug(num++, drugDTO.getName(), drugDTO.getCode());
		
		if(pharmacyRepository.findOneById(drugDTO.getPharmacyId()) != null) {
			return null;
		}
		
		System.out.println("usao je ovde");
		
		Pharmacy pharmacy = pharmacyRepository.findOneById(drugDTO.getPharmacyId());
		
		PharmacyDrugDetails details = new PharmacyDrugDetails();
		details.setDrug(newDrug);
		details.setPharmacy(pharmacy);
		details.setQuantity(drugDTO.getQuantity());
		
		pharmacyDrugDetailsRepository.save(details);
	
		
		return newDrug;
	}

}
