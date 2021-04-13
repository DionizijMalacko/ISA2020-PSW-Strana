package com.example.ISA2020.dto;

public class PharmacyNameAddressDTO {

	private String name;
	
	private String address;
	
	
	public PharmacyNameAddressDTO() {
		super();
	}


	public PharmacyNameAddressDTO(String name, String address) {
		super();
		this.name = name;
		this.address = address;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}
	
	

}
