import { useState } from "react";
import { memberIdCheck } from '../api/member'

function Study() {

  const [아이디,변경아이디] = useState('');
  return (
    <div className="App">
      <input type='text' placeholder='아이디 입력' value={아이디}
      onChange={e=> {변경아이디(e.target.value);}}/>
      <input type='button' value='중복 체크' onClick={
        ()=> {
          let obj = new Object();
          obj.id = 아이디;

          const check = memberIdCheck(obj);

          check.then(res => {
            console.log('============= 성공')
            console.log(res);
          })

          check.catch(err => {
            console.log('============= 실패')
            console.log(err);
          })
        }
      }/>
    </div>
  );
}

export default Study;