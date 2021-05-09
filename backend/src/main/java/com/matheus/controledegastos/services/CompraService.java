package com.matheus.controledegastos.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matheus.controledegastos.entity.Compra;
import com.matheus.controledegastos.repositories.CompraRepository;

@Service
public class CompraService {

	@Autowired
	private CompraRepository repository;
	
	@Transactional
	public List<Compra> findAll(){
		List<Compra> compras = repository.findAll();
		
		return compras;
	}
	
	
	
}
