package com.matheus.controledegastos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.matheus.controledegastos.entity.Compra;

@Repository
public interface CompraRepository extends JpaRepository<Compra, Long> {

}
