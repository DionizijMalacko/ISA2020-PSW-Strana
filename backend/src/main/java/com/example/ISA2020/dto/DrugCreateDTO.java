package com.example.ISA2020.dto;

public class DrugCreateDTO {
	
    private String name;
    
    private String code;
    
    private Integer quantity;

    
	public DrugCreateDTO() {
		super();
	}

	public DrugCreateDTO(String name, String code, Integer quantity) {
		super();
		this.name = name;
		this.code = code;
		this.quantity = quantity;
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
    
    
	
}
