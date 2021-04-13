package com.example.ISA2020.controller;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ISA2020.dto.DrugCreateFullDTO;
import com.example.ISA2020.dto.PharmacyDrugDetailsDTO;
import com.example.ISA2020.entity.Drug;
import com.example.ISA2020.entity.PharmacyDrugKey;
import com.example.ISA2020.entity.TenderOffer;
import com.example.ISA2020.service.DrugService;
import com.example.ISA2020.service.PharmacyDrugDetailsService;
import com.example.ISA2020.service.PharmacyService;

@RestController
@RequestMapping(value = "/api/noAuth/pharmacyDrugDetails")
public class PharmacyDrugDetailsController {
	
	
	@Autowired
	private PharmacyDrugDetailsService pharmacyDrugDetailsService;
	
	@Autowired
	private DrugService drugService;
	
	@Autowired
	private PharmacyService pharmacyService;
	
	@GetMapping(value="/getAll")
	public ResponseEntity<List<PharmacyDrugDetailsDTO>> getAllPharmacyDrugDetails() {
		List<PharmacyDrugDetailsDTO> pharmacyDrugDetails = pharmacyDrugDetailsService.getAllPharmacyDrugDetails();
		if(pharmacyDrugDetails.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(pharmacyDrugDetails, HttpStatus.OK);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<PharmacyDrugDetailsDTO> getOneById(@PathVariable PharmacyDrugKey id){
		PharmacyDrugDetailsDTO pharmacyDrugDetails = pharmacyDrugDetailsService.findById(id);
		if(pharmacyDrugDetails == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(pharmacyDrugDetails, HttpStatus.OK);
	}
	
	
	@GetMapping(value="/getAllWithSameName")
	public ResponseEntity<List<PharmacyDrugDetailsDTO>> getAllDrugsWithSameName(@RequestParam("name") String name) {
		List<PharmacyDrugDetailsDTO> pharmacyDrugDetails = pharmacyDrugDetailsService.getAllPharmacyDrugDetails();
		if(pharmacyDrugDetails.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
		List<PharmacyDrugDetailsDTO> drugsWithSameName = new ArrayList<>();
		
		for(PharmacyDrugDetailsDTO p : pharmacyDrugDetails) {
			if(p.getDrugName().toLowerCase().contains(name.toLowerCase())) {
				PharmacyDrugDetailsDTO dto = new PharmacyDrugDetailsDTO();
				dto.setPharmacyName(p.getPharmacyName());
				dto.setDrugName(p.getDrugName());
				dto.setDrugCode(p.getDrugCode());
				dto.setQuantity(p.getQuantity());
				drugsWithSameName.add(dto);
			}
		}
		
		
		return new ResponseEntity<>(drugsWithSameName, HttpStatus.OK);
	}
//	
//	@PutMapping(value="/getAllByDrugIdAndPharmacyId")
//	public ResponseEntity<PharmacyDrugDetails> getAllByDrugCode(@RequestParam("idPharmacy") String idPharmacy, 
//																@RequestParam("idDrug") String idDrug, 
//																@RequestParam("quantity") String quantity) {
//		
//		List<PharmacyDrugDetailsDTO> pharmacyDrugDetails = pharmacyDrugDetailsService.getAllPharmacyDrugDetails();
//		if(pharmacyDrugDetails.isEmpty()) {
//			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//		}
//		
//		List<DrugSearchDTO> drugsWithSameCode = new ArrayList<>();
//		int oldQuantity = 0;
//		int newQuantity = 0;
//		int q = Integer.parseInt(quantity);
//		
//		
//		for(PharmacyDrugDetails p : pharmacyDrugDetails) {
//			if(p.getPharmacy().getId().toString().equals(idPharmacy)) {
//				System.out.println("1");
//				if(p.getDrug().getId().toString().equals(idDrug)) {
//					System.out.println("2");
//					if(p.getQuantity() >= q) {
//						System.out.println("3");
//						oldQuantity = p.getQuantity();
//						newQuantity = oldQuantity - q;
//						p.setQuantity(newQuantity);
//						pharmacyDrugDetailsService.save(p);
//						return new ResponseEntity<>(p, HttpStatus.OK);
//					}else {
//						return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//					}
//				}
//			}
//		}
//		
//		
//		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//	}
	
	@PostMapping(value="/createTenderOffer")
	public ResponseEntity<List<TenderOffer>> createTenderOffer(@RequestParam("code") String code) {
		
		List<PharmacyDrugDetailsDTO> pharmacyDrugDetails = pharmacyDrugDetailsService.getAllPharmacyDrugDetails();
		if(pharmacyDrugDetails.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
		int max = 2000;
		int min = 100;
		double leftLimit = 100D;
	    double rightLimit = 2000D;
	
		
		List<TenderOffer> tenderOffers = new ArrayList<>();
		
		for(PharmacyDrugDetailsDTO p : pharmacyDrugDetails) {
			if(p.getDrugCode().equals(code)) {
				System.out.println("Usao je u if");
				TenderOffer t = new TenderOffer();
				t.setCode(code);
				t.setName(p.getDrugName());
				t.setQuantity(p.getQuantity());
				
				double randomPriceDouble = leftLimit + new Random().nextDouble() * (rightLimit - leftLimit);
			    BigDecimal bd = new BigDecimal(randomPriceDouble).setScale(2, RoundingMode.HALF_UP);
		        double randomPrice = bd.doubleValue();
				t.setPrice(randomPrice);
				//t.setPharmacyName(p.getPharmacy().getName());
				tenderOffers.add(t);
			}
		}
		
		/*
		 * if(tenderOffers.isEmpty()) { System.out.println("Lista tendera je prazna.");
		 * return new ResponseEntity<>(HttpStatus.BAD_REQUEST); }
		 */
		
		return new ResponseEntity<>(tenderOffers, HttpStatus.OK);
	}
	
	@PostMapping(value = "/create")
    public ResponseEntity<Drug> create(@RequestBody DrugCreateFullDTO drugDTO) {
        try {
            Drug newDrug = pharmacyDrugDetailsService.createDrug(drugDTO);
            if (newDrug == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(newDrug, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
		
	}
}
