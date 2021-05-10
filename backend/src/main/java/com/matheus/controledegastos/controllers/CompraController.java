package com.matheus.controledegastos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
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
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Compra insertCompra(@RequestBody Compra compra) {
		return service.insertCompra(compra);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Compra> atualizarParcelasPagas(@PathVariable Long id) {
		
		if(service.findById(id).equals(null)) {
			return ResponseEntity.notFound().build();
		}
		
		Compra compra = service.atualizarParcelasPagas(id);
		
		return ResponseEntity.ok().body(compra);
		
		
		
	}
	
}
