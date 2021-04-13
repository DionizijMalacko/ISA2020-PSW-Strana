package com.example.ISA2020.dto;

public class DrugCreateFullDTO {
	
    private String name;
    
    private String code;
    
    private Integer quantity;
    
    private Long pharmacyId;
    

	public DrugCreateFullDTO() {
		super();
	}

	public DrugCreateFullDTO(String name, String code, Integer quantity, Long pharmacyId) {
		super();
		this.name = name;
		this.code = code;
		this.quantity = quantity;
		this.pharmacyId = pharmacyId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Long getPharmacyId() {
		return pharmacyId;
	}

	public void setPharmacyId(Long pharmacyId) {
		this.pharmacyId = pharmacyId;
	}
    
    
}
