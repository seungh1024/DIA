import React, { useState, useEffect, useContext } from 'react';
import './FootballNavbar.css';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function FootballNavbar(props) {
  const { currentTeam, totalTeam, ipV4, portinput } = useContext(UserContext);
  const history = useHistory();
  const currentpage2 = props.currentpage;
  let [currentCheck, setCurrentCheck] = useState(0);
  useEffect(() => {
    if (currentpage2 === 'usersearch') {
      setCurrentCheck(1);
    } else if (currentpage2 === 'ipinsert') {
      setCurrentCheck(2);
    } else {
      setCurrentCheck(3);
    }
  });
  const goIpInsert = async () => {
    // console.log(totalTeam);
    if (totalTeam.length) {
      for (let index = 0; index < totalTeam.length; index++) {
        const element = totalTeam[index];
        if (element === 0) {
          alert('팀을 등록해주세요');
          window.ReactAlert.showToast('팀을 등록해주세요');
          return;
        }
      }
    } else {
      alert('팀을 등록해주세요');
      window.ReactAlert.showToast('팀을 등록해주세요');
      return;
    }

    history.push('/ipInsert');
  };
  const goTeamRegister = async () => {
    alert('완료버튼을 눌러세요!');
  };

  // const goTeammake = () => {
  //     history.push('/teammake')
  // }

  return (
    <nav className="container-fluid">
      <ul>
        <li className="main left">
          <Link to="/teammake" style={{ textDecoration: 'none' }}>
            <span style={{ color: currentCheck === 1 ? '#B3DC3C' : null }}>
              유저 등록하기
            </span>
          </Link>
        </li>

        <li className="main">
          <div
            onClick={() => {
              goIpInsert();
            }}
            style={{ textDecoration: 'none' }}
          >
            <span style={{ color: currentCheck === 2 ? '#B3DC3C' : null }}>
              서버 연결
            </span>
          </div>
        </li>
        <li className="main">
          <div
            onClick={() => {
              goTeamRegister();
            }}
          >
            <span style={{ color: currentCheck === 3 ? '#B3DC3C' : null }}>
              팀 구성하기
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
