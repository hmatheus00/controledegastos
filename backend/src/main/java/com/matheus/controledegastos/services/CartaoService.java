package com.matheus.controledegastos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.matheus.controledegastos.entity.Cartao;
import com.matheus.controledegastos.repositories.CartaoRepository;

@Service
public class CartaoService {

	@Autowired
	private CartaoRepository repository;
	
	@Transactional(readOnly = true)
	public List<Cartao> findAll(){
		List<Cartao> cartoes = repository.findAll();
		
		return cartoes;
		
	}
	@Transactional
	public Cartao adicionar(Cartao cartao) {
		return repository.save(cartao);
	}
	
}
