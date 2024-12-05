// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './reg.module.css';

// export default function Register() {
//   const [signupInfo, setSignupInfo] = useState({
//     id: '',
//     password: '',
//     gender: '',
//     hobbies: [],
//     birthday: '',
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       setSignupInfo((prevInfo) => {
//         const hobbies = checked
//           ? [...prevInfo.hobbies, value]
//           : prevInfo.hobbies.filter((hobby) => hobby !== value);
//         return { ...prevInfo, hobbies };
//       });
//     } else {
//       setSignupInfo({ ...signupInfo, [name]: value });
//     }
//   };

//   const handleSignup = () => {
//     localStorage.setItem('signupData', JSON.stringify(signupInfo));
//     navigate('/oup1');
//   };

//   return (
//     <div className={styles.signupPage}>
//       <h2>Signup Page</h2>
//       <div className={styles.signupForm}>
//         <input
//           type="text"
//           name="id"
//           value={signupInfo.id}
//           onChange={handleInputChange}
//           placeholder="ID"
//         />
//         <input
//           type="password"
//           name="password"
//           value={signupInfo.password}
//           onChange={handleInputChange}
//           placeholder="Password"
//         />
//         <div>
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Male"
//               onChange={handleInputChange}
//             />
//             Male
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Female"
//               onChange={handleInputChange}
//             />
//             Female
//           </label>
//         </div>
//         <div>
//         <label>
//                   <input
//                     type="checkbox"
//                     name="hobbies"
//                     value="게임"
//                     onChange={handleInputChange}
//                   />
//                   게임
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     name="hobbies"
//                     value="독서"
//                     onChange={handleInputChange}
//                   />
//                   독서
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     name="hobbies"
//                     value="음악감상"
//                     onChange={handleInputChange}
//                   />
//                   음악감상
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     name="hobbies"
//                     value="운동"
//                     onChange={handleInputChange}
//                   />
//                   운동
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     name="hobbies"
//                     value="요리"
//                     onChange={handleInputChange}
//                   />
//                   요리
//                 </label>
//         </div>
//         <input
//           type="date"
//           name="birthday"
//           value={signupInfo.birthday}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleSignup}>Signup</button>
//       </div>
//     </div>
//   );
// }
