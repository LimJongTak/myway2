import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Import your CSS file
import image from "./images/homepage.PNG"; // Add the path to your image
import logo from "./images/logo.PNG";

const HomePage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="homepage">
      <header className="header">
        <Link to="/" className="logo">
          <img src={logo} alt="MyWay Logo" />
        </Link>
        <nav>
          <ul className="nav-links">
            <li
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <a href="#!">
                산책로 <span className="arrow">v</span>
              </a>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#!">산책로</a>
                  </li>
                  <li>
                    <a href="#!">산책로 등록</a>
                  </li>
                  <li>
                    <a href="#!">산책로 관리</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/community">커뮤니티</Link>
            </li>
          </ul>
        </nav>
        <button className="start-button">시작하기</button>
      </header>
      <div className="content">
        <img src={image} alt="Content" className="content-image" />
      </div>
      <footer className="footer">
        <div className="footer-links">
          <div className="footer-column">
            <h3>MyWay</h3>
            <ul>
              <li>
                <a href="#!">MyWay 소개</a>
              </li>
              <li>
                <a href="https://instagram.com/takkk_2">MyWay Instagram</a>
              </li>
              <li>
                <a href="https://youtube.com">MyWay Youtube</a>
              </li>
              <li>
                <a href="#!">MyWay Producer</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>주요서비스</h3>
            <ul>
              <li>
                <a href="#!">산책로</a>
              </li>
              <li>
                <Link to="/community">커뮤니티</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>제휴업체</h3>
            <ul>
              <li>
                <a href="https://code01cafe.modoo.at/">코드 0.1</a>
              </li>
              <li>
                <a href="https://www.siksinhot.com/P/1312124">킁킁분식</a>
              </li>
              <li>
                <a href="https://map.naver.com/p/search/%EC%95%8C%ED%94%84%EC%8A%A4%EB%8B%B9%EA%B5%AC%EC%9E%A5/place/17301667?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place">
                  알프스당구장
                </a>
              </li>
              <li>
                <a href="https://map.naver.com/p/entry/place/17030596?lng=127.48645&lat=34.969181&placePath=%2Fhome&entry=plt&searchType=place">
                  춘천거시기닭갈비
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>지원 및 서비스</h3>
            <ul>
              <li>
                <a href="/community">공지사항</a>
              </li>
              <li>
                <a href="#!">고객센터</a>
              </li>
              <li>
                <a href="#!">자주 묻는 질문</a>
              </li>
              <li>
                <a href="#!">광고문의</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>개인정보처리방침</h3>
            <ul>
              <li>
                <a href="#!">이용약관</a>
              </li>
              <li>
                <a href="#!">위치기반 서비스 이용약관</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; LIKELION UNIV. SCNU 12TH 워크홀릭
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
