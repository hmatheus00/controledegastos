package com.matheus.controledegastos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matheus.controledegastos.entity.Compra;
import com.matheus.controledegastos.services.CompraService;

@RestController
@RequestMapping(value = "/compras")
public class CompraController {
	
	@Autowired
	private CompraService service;
	
	@GetMapping
	public ResponseEntity<List<Compra>> findAll(){
		List<Compra> compras = service.findAll();
		
		return ResponseEntity.ok().body(compras);
	}

}
