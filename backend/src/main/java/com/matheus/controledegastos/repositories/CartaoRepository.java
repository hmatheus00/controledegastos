package com.matheus.controledegastos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.matheus.controledegastos.entity.Cartao;

@Repository
public interface CartaoRepository extends JpaRepository<Cartao, Long> {

}
