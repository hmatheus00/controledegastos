package com.matheus.controledegastos.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name = "tb_cartoes")
public class Cartao implements Serializable {
	
	private static final long serialVersionUID = 1L;
	@ApiModelProperty(value="Código do cartão")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ApiModelProperty(value = "Nome do cartão")
	private String nomeCartao;

	public Cartao() {}
	
	public Cartao(Long id, String nomeCartao) {
		this.id = id;
		this.nomeCartao = nomeCartao;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomeCartao() {
		return nomeCartao;
	}

	public void setNomeCartao(String nomeCartao) {
		this.nomeCartao = nomeCartao;
	}

}
