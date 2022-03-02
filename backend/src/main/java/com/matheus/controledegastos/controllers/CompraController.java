package com.matheus.controledegastos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.matheus.controledegastos.entity.Compra;
import com.matheus.controledegastos.services.CompraService;

import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping(value = "/compras")
public class CompraController {

	@Autowired
	private CompraService service;

	@ApiResponses(value = { @ApiResponse(code = 200, message = "Retorna a lista de compras") })
	@GetMapping("/all")
	public ResponseEntity<List<Compra>> findAll() {
		List<Compra> compras = service.findAll();

		return ResponseEntity.ok().body(compras);
	}

	@ApiResponses(value = { @ApiResponse(code = 201, message = "Persiste compra no banco de dados"),
			@ApiResponse(code = 404, message = "Compra não encontrada. Não possível atualizar") })
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Compra insertCompra(@RequestBody Compra compra) {
		return service.insertCompra(compra);
	}

	@ApiResponses(value = { @ApiResponse(code = 200, message = "Atualiza quantidade de parcelas pagas"),
			@ApiResponse(code = 404, message = "Compra não encontrada. Não possível atualizar") })
	@PutMapping
	public ResponseEntity<List<Compra>> atualizarParcelasPagas() {
		
		List<Compra> compras = service.atualizarParcelasPagas();

		if (compras == null) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok().body(compras);
		}

	}
	@GetMapping
	public ResponseEntity buscarComprasPorCartaoId(@RequestParam Long cartaoId) {
		List compras = service.findCompraByCartaoId(cartaoId);
		if (compras == null){
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(compras);
	}

}
