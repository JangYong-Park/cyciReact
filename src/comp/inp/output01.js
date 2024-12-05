import { useEffect, useState } from "react";

export default function OutStudy() {
  const [signupInfo, setSignupInfo] = useState(null);

  function start() {
    const data = localStorage.getItem('signupData');
    if (data) {
      const parsedData = JSON.parse(data);
      setSignupInfo(parsedData);
    }
  }

  useEffect(() => {
    start();
  }, []);

  if (!signupInfo) {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <h1>회원가입 정보</h1>
      <p><strong>ID:</strong> {signupInfo.id}</p>
      <p><strong>Password:</strong> {signupInfo.password}</p>
      <p><strong>Gender:</strong> {signupInfo.gender}</p>
      <p><strong>Hobbies:</strong> {signupInfo.hobbies.join(', ')}</p>
      <p><strong>Birthday:</strong> {signupInfo.birthday}</p>
    </div>
  );
}
