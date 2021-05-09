package com.matheus.controledegastos.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter @EqualsAndHashCode @AllArgsConstructor
@Entity
@Table(name = "tb_compras")
public class Compra {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String comprador;
	private String vendedor;
	private String produto;
	private LocalDateTime data;
	private Boolean isParcelado;
	private Integer parcelasPagas;
	private Integer totalParcelas;
	
	@ManyToOne
	@JoinColumn(name = "cartao_id")
	private Cartao cartao;

}
