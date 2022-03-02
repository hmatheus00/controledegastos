package com.matheus.controledegastos.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name = "tb_compras")
public class Compra implements Serializable {
	
	private static final long serialVersionUID = 1L;
	@Id
	@ApiModelProperty(value = "Identificador da compra")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String comprador;
	private String vendedor;
	private String produto;
	@ApiModelProperty(value = "Valor do produto comprado")
	private Double valor;
	private LocalDate data;
	@ApiModelProperty(value = "Total de parcelas pagas")
	private Integer parcelasPagas;
	@ApiModelProperty(value = "Total de parcelas")
	private Integer totalParcelas;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "cartao_id", referencedColumnName = "id")
	private Cartao cartao;

	public Compra() {}
	
	public Compra(Long id, String comprador, String vendedor, String produto, Double valor, LocalDate data, Boolean isParcelado,
			Integer parcelasPagas, Integer totalParcelas, Cartao cartao) {
		this.id = id;
		this.comprador = comprador;
		this.vendedor = vendedor;
		this.produto = produto;
		this.valor = valor;
		this.data = data;
		this.parcelasPagas = parcelasPagas;
		this.totalParcelas = totalParcelas;
		this.cartao = cartao;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getComprador() {
		return comprador;
	}

	public void setComprador(String comprador) {
		this.comprador = comprador;
	}	

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}

	public String getVendedor() {
		return vendedor;
	}

	public void setVendedor(String vendedor) {
		this.vendedor = vendedor;
	}

	public String getProduto() {
		return produto;
	}

	public void setProduto(String produto) {
		this.produto = produto;
	}

	public LocalDate getData() {
		return data;
	}

	public void setData(LocalDate data) {
		this.data = data;
	}

	public Integer getParcelasPagas() {
		return parcelasPagas;
	}

	public void setParcelasPagas(Integer parcelasPagas) {
		this.parcelasPagas = parcelasPagas;
	}

	public Integer getTotalParcelas() {
		return totalParcelas;
	}

	public void setTotalParcelas(Integer totalParcelas) {
		this.totalParcelas = totalParcelas;
	}

	public Cartao getCartao() {
		return cartao;
	}

	public void setCartao(Cartao cartao) {
		this.cartao = cartao;
	}
}
