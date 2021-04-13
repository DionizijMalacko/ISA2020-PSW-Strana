package com.example.ISA2020.dto;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import com.example.ISA2020.entity.Drug;
import com.example.ISA2020.entity.Pharmacy;

public class PharmacyDrugDetailsDTO {
	
	/* private PharmacyDrugKey id; */

    private String pharmacyName;

    private String drugName;
    
    private String drugCode;

    private int quantity;
    

	public PharmacyDrugDetailsDTO() {
		super();
	}

	public PharmacyDrugDetailsDTO(String pharmacyName, String drugName, String drugCode, int quantity) {
		super();
		this.pharmacyName = pharmacyName;
		this.drugName = drugName;
		this.drugCode = drugCode;
		this.quantity = quantity;
	}

	public String getPharmacyName() {
		return pharmacyName;
	}

	public void setPharmacyName(String pharmacyName) {
		this.pharmacyName = pharmacyName;
	}

	public String getDrugName() {
		return drugName;
	}

	public void setDrugName(String drugName) {
		this.drugName = drugName;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getDrugCode() {
		return drugCode;
	}

	public void setDrugCode(String drugCode) {
		this.drugCode = drugCode;
	}

    
}
