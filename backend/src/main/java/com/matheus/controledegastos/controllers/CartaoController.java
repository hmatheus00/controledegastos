package com.matheus.controledegastos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matheus.controledegastos.entity.Cartao;
import com.matheus.controledegastos.services.CartaoService;

@RestController
@RequestMapping("/cartoes")
public class CartaoController {

	@Autowired
	private CartaoService service;
	
	@GetMapping
	public ResponseEntity<List<Cartao>> findAll(){
		
		List<Cartao> cartoes = service.findAll();
		
		return ResponseEntity.ok().body(cartoes);
		
	}
	
}
