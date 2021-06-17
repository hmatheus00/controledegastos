package com.matheus.controledegastos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.matheus.controledegastos.entity.Cartao;
import com.matheus.controledegastos.services.CartaoService;

import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/cartoes")
public class CartaoController {

	@Autowired
	private CartaoService service;
	
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Retorna lista de cartões juntamente com as compras associadas a cada cartão")})
	@GetMapping
	public ResponseEntity<List<Cartao>> findAll(){
		
		List<Cartao> cartoes = service.findAll();
		
		return ResponseEntity.ok().body(cartoes);
		
	}
	
	@ApiResponses(value = { @ApiResponse(code = 201, message = "Cartão criado!")})
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Cartao adicionar(@RequestBody Cartao cartao) {
		return service.adicionar(cartao);
	}
	
}
