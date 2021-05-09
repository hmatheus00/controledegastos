package com.matheus.controledegastos.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matheus.controledegastos.entity.Cartao;
import com.matheus.controledegastos.repositories.CartaoRepository;

@Service
public class CartaoService {

	@Autowired
	private CartaoRepository repository;
	
	@Transactional
	public List<Cartao> findAll(){
		List<Cartao> cartoes = repository.findAll();
		
		return cartoes;
		
	}
	
}
