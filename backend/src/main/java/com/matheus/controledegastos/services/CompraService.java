package com.matheus.controledegastos.services;

import com.matheus.controledegastos.entity.Compra;
import com.matheus.controledegastos.repositories.CompraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompraService {

	@Autowired
	private CompraRepository repository;

	@Transactional(readOnly = true)
	public Compra findById(Long id) {
		if (repository.existsById(id)) {
			return repository.getOne(id);
		}
		return null;
	}

	@Transactional(readOnly = true)
	public List<Compra> findAll() {
		return repository.findAll();
	}

	@Transactional
	public Compra insertCompra(Compra compra) {
		return repository.save(compra);
	}

	@Transactional
	public List<Compra> atualizarParcelasPagas() {

		List<Compra> compras = repository.findAll();
		
		List<Compra> comprasAtualizadas = compras.stream().peek(compra -> {
			if(compra.getParcelasPagas() < compra.getTotalParcelas()) {
				compra.setParcelasPagas(compra.getParcelasPagas()+1);
			}
		}).collect(Collectors.toList());
		
		return repository.saveAll(comprasAtualizadas);
	}

	@Transactional(readOnly = true)
	public List findCompraByCartaoId(Long cartaoId) {
		List<Compra> compras = repository.buscaCompraPorCartao(cartaoId);

		if(compras.isEmpty()) {
			return Collections.EMPTY_LIST;
		}
		return compras;
	}

}
