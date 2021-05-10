package com.matheus.controledegastos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.matheus.controledegastos.entity.Compra;
import com.matheus.controledegastos.repositories.CompraRepository;

@Service
public class CompraService {

	@Autowired
	private CompraRepository repository;
	
	@Transactional(readOnly = true)
	public Compra findById(Long id) {
		if(repository.existsById(id)) {
			Compra compra = repository.getOne(id);
			return compra;
		}
		return null;
	}
	
	@Transactional(readOnly = true)
	public List<Compra> findAll(){
		List<Compra> compras = repository.findAll();
		
		return compras;
	}
	
	@Transactional
	public Compra insertCompra(Compra compra) {
		return repository.save(compra);
	}
	
	@Transactional
	public Compra atualizarParcelasPagas(Long id) {
		
		if(!repository.existsById(id)) {
			return null;
		}
		
		Compra compra = repository.getOne(id);
		
		if(compra.getParcelasPagas() < compra.getTotalParcelas()) {
			compra.setParcelasPagas(compra.getParcelasPagas()+1);			
		}
		
		return repository.save(compra);
		
	}
	
	
	
}
