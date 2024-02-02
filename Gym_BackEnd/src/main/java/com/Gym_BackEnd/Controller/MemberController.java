package com.Gym_BackEnd.Controller;

import com.Gym_BackEnd.Entity.Members;
import com.Gym_BackEnd.Exception.ResourceNotFoundException;
import com.Gym_BackEnd.Repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/member")
public class MemberController {
    @Autowired
    private MemberRepository memberRepository;
    @GetMapping("/getAllMember")
    public List<Members> getAllMember(){return memberRepository.findAll();}
    @PostMapping
    public Members AddMember(@RequestBody Members members)
    {
        return memberRepository.save(members);
    }
    @GetMapping("{id}")
    public ResponseEntity<Members> getMemberById(@PathVariable Long id)
    {
        Members members = memberRepository.findById(id).orElseThrow(()->
            new ResourceNotFoundException("Member not exist with this ID"));
        return ResponseEntity.ok(members);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteMembers(@PathVariable Long id)
    {
        Members members = memberRepository.findById(id).orElseThrow(()->
                new ResourceNotFoundException("Member not exist with this ID"));
        memberRepository.delete(members);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PutMapping("{id}")
    public ResponseEntity<Members> updateMember(@PathVariable Long id , @RequestBody Members membersDetail)
    {
        Members members = memberRepository.findById(id).orElseThrow(()->
                new ResourceNotFoundException("Member not exist with this ID"));

        members.setName(membersDetail.getName());
        members.setPhone_Number(membersDetail.getPhone_Number());
        members.setStart_Date(membersDetail.getStart_Date());
        members.setEnd_Date(membersDetail.getEnd_Date());

        memberRepository.save(members);
        return ResponseEntity.ok(members);
    }

}
