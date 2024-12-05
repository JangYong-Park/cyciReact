import { useEffect, useState } from "react";
import {memberIdCheck, areaList, memberLogin} from '../api/member';
import { useNavigate } from "react-router-dom";

function Study() {

    const [userId, setId] = useState('');
    const [aList, setAlist] = useState([]);

    const [inputId, setUserId] = useState('');
    const [inputPw, setUserPw] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('M');
    const [birth, setBirth] = useState('');

    const navigate = useNavigate();

    function userLogin() {
        console.log('===User Login===')

        let obj = new Object;
        obj.userId = inputId;
        obj.userPw = inputPw;

        const checkuser = memberLogin(obj);

        checkuser.then(res => {
            console.log(res)
            if(res.data.code === '200' && res.data.data === 'Y') {
                console.log('로그인 성공');
                navigate('/'); //메인화면으로 보내버림
            } 
        })
    }

    useEffect(() => {
        getAreaList();
    }, []);

    function getAreaList() {
        console.log('===AreaList===')
        areaList()
        .then(res => {
            console.log(res);
            setAlist(res.data.data);
        })
        .catch(err => {
          console.error('Area List Fetch Error:', err);
      });
    }

    return(
        <div className="App">

            <h1>중복체크</h1>

            <input type="text"
            placeholder="ID" 
            value={userId}
            onChange={
                e=>  {
                    setId(e.target.value);
                }
            }/>


            <input type="button" value='중복 체크' onClick={
                () => {
                    // 아이디
                    let obj = new Object();
                    obj.id = userId;

                    const check = memberIdCheck(obj);

                    //성공
                    check.then(res => {
                        console.log('===Good===')
                        console.log(res);
                    })

                    //실패
                    check.catch(err => {
                        console.log(err);
                    })
                }
            } /> <br/><br/>

            <select>
                {aList.map((item, index) => (
                    <option key={index} value={item.idx}>
                        {item.areaName} / {index}
                    </option>
                ))}
            </select>

            <h1>Login</h1>
            <input 
            type="text"
            placeholder="ID"
            value={inputId}
            onChange={e=> {
                setUserId(e.target.value);
            }}
            /> <br/> <br/>
            <input 
            type="password"
            placeholder="PW"
            value={inputPw}
            onChange={e=> {
                setUserPw(e.target.value);
            }}
            /> <br/> <br/>
            <input 
            type="button"
            value='Login'
            onClick={userLogin} />
            
           
            
           
            

        </div>
        <input type="password" placeholder="비밀번호 입력"/> <br/>
        <input type="text" placeholder="이름 입력"/> <br/>
        <input type="email" placeholder="이메일 입력"/> <br/>
        <input type="radio" name="gender" value="M">남자</input>
        <input type="radio" name="gender" value="F">여자</input>
        
    );
}

export default Study;

