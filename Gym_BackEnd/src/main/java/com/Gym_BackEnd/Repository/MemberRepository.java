package com.Gym_BackEnd.Repository;

import com.Gym_BackEnd.Entity.Members;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Members,Long> {
}
