import axios from 'axios';

const MEMBER_BASE_URL = 'http://localhost:9090/api/member';

class MemberService{
    addMember(member){
        return axios.post(MEMBER_BASE_URL,member);
    }
    getMember(){
        return axios.get(MEMBER_BASE_URL+"/getAllMember");
    }
    getMemberById(memberId) {
        return axios.get(MEMBER_BASE_URL + "/" + memberId);
    }
    updateMember(memberId , member){
        return axios.put(MEMBER_BASE_URL+"/"+memberId,member);
    }
}
export default new MemberService;