import { createContext, useState } from 'react';
// import jwt_decode from "jwt-decode"
// AuthContext에 유저 정보를 저장하고 userProvider를 통해 어디서부터 어디까지 유저 정보를 사용할지 선택이 가능하다
// 유저정보
// "user": {
//     "id": 2,
//     "password": "pbkdf2_sha256$260000$7Pbj3zWtFb2e9GakqnIZKT$/ApSkYK76ttq7UjNGmX+Gf199v6XLrNBjA6l1KLGWWs=",
//     "last_login": null,
//     "user_email": "blaa@blaa.com",
//     "user_name": "권혁림2",
//     "user_nickname": "2혁림",
//     "user_gender": 0,
//     "user_birth": "1997-11-04",
//     "user_style": "0",
//     "user_color": "0"
//   }

import { useHistory } from 'react-router-dom';
// import swal from "sweetalert2";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  // 콜백을 쓰는 이유는 안 쓸 경우 페이지가 로드 될때마다 계속 작동하기 때문에
  // let [user, setUser] = useState(() =>
  //   localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  // );

  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
  );

  let BASE_URL = 'http://k7b307.p.ssafy.io/api/v1/';
  //   let [loading, setLoading] = useState(true);

  const history = useHistory();

  let loginUser = async (e) => {
    e.preventDefault();

    let response = await fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail: e.target.useremail.value.trim(),
        userPassword: e.target.userpassword.value,
      }),
    });
    let data = await response.json();

    if (response.status === 200) {
      console.log('로그인 성공');
      setAuthTokens(data);
      // setUser(data.user);
      localStorage.setItem('authTokens', JSON.stringify(data));
      // localStorage.setItem('userInfo', JSON.stringify(data.user));
      history.push('/main');
    } else {
      console.log('로그인 실패!');
      // new swal(
      //   'Oops!',
      //   '<b style="color:red;">Login Error!</b> Write correct id and password :)',
      //   'error'
      // )
      alert('Login Error! Write correct id and password');
      window.ReactAlert.showToast('Login Error! Write correct id and password');
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    // setUser(null);
    // localStorage.removeItem('userInfo');
    localStorage.removeItem('authTokens');
    history.push('/');
  };

  // refresh token 관련 함수
  // let updateToken = async (e) => {
  //   console.log('refresh submitted');
  //   let response = await fetch(BASE_URL + 'auths/token_refresh/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ refresh: authTokens.refresh }),
  //   });
  //   let data = await response.json();

  //   if (response.status === 200) {
  //     setAuthTokens({ access: data.access, refresh: authTokens.refresh });
  //     localStorage.setItem(
  //       'authTokens',
  //       JSON.stringify({ access: data.access, refresh: authTokens.refresh })
  //     );
  //   } else {
  //     logoutUser();
  //   }
  // };

  // 로그인 함수를 생성한 후 이를 contextData에 담아서 사용이 가능하게 한다.
  let contextData = {
    // user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
    BASE_URL: BASE_URL,
    authTokens: authTokens,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
