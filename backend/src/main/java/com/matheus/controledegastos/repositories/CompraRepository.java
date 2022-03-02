package com.matheus.controledegastos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.matheus.controledegastos.entity.Compra;

import java.util.List;

@Repository
public interface CompraRepository extends JpaRepository<Compra, Long> {

    @Query("select c from Compra as c where c.cartao.id = :cartaoId")
    List<Compra> buscaCompraPorCartao(@Param("cartaoId")Long cartaoId);

}
