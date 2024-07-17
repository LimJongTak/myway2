import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CommunityPage.css";
import image from "./images/community.PNG";
import logo from "./images/logo.PNG"; // Import the logo image
import bannerImage from "./images/banner.PNG"; // Import the new banner image
import mypageIcon from "./images/mypage.PNG"; // Import the mypage icon image
import googlePlay from "./images/googleplay.PNG"; // Import Google Play image
import appStore from "./images/appstore.PNG"; // Import App Store image
import instagram from "./images/instagram.PNG"; // Import Instagram image
import youtube from "./images/youtube.PNG"; // Import YouTube image

const CommunityPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("notice"); // Default to "notice"

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    setActiveTab("notice"); // Set default tab to "notice" on mount
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="community-page">
      <header className="header">
        <div className="left-container">
          <Link to="/" className="logo">
            <img src={logo} alt="MyWay Logo" />
          </Link>
          <nav className="nav-container">
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
        </div>
        <Link to="/mypage" className="mypage-button">
          <img src={mypageIcon} alt="마이페이지" className="mypage-icon" />
          <span>마이페이지</span>
        </Link>
      </header>
      <div className="banner">
        <img src={bannerImage} alt="산책이 일상으로" className="banner-image" />
      </div>
      <div className="community-content">
        <div className="tabs">
          <ul>
            <li
              className={activeTab === "notice" ? "active" : ""}
              onClick={() => handleTabClick("notice")}
            >
              공지사항
            </li>
            <li
              className={activeTab === "freeboard" ? "active" : ""}
              onClick={() => handleTabClick("freeboard")}
            >
              자유게시판
            </li>
            <li
              className={activeTab === "qa" ? "active" : ""}
              onClick={() => handleTabClick("qa")}
            >
              Q&A
            </li>
          </ul>
          <hr className="tab-divider" /> {/* Added horizontal line */}
          <input type="text" placeholder="검색어를 입력하세요." />
        </div>
        <div className="tab-content">
          {activeTab === "notice" && (
            <div className="notice-content">
              <div className="notice-item">
                <p>산책하Go! 기부하Go! 산책 챌린지</p>
                <span className="views">조회수: 1234</span>
              </div>
            </div>
          )}
          {activeTab === "freeboard" && (
            <div className="freeboard-content">
              <p>자유게시판 내용을 여기에 추가하세요.</p>
            </div>
          )}
          {activeTab === "qa" && (
            <div className="qa-content">
              <p>Q&A 내용을 여기에 추가하세요.</p>
            </div>
          )}
        </div>
      </div>
      <footer className="footer">
        <div className="footer-links">
          <div className="footer-column footer-logo">
            <img src={logo} alt="MyWay Logo" />
            <div className="footer-app-links">
              <a href="https://play.google.com/store">
                <img src={googlePlay} alt="Google Play" />
              </a>
              <a href="https://www.apple.com/app-store/">
                <img src={appStore} alt="App Store" />
              </a>
            </div>
            <div className="footer-social">
              <a href="https://instagram.com/takkk_2">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://youtube.com" className="youtube-button">
                <img src={youtube} alt="YouTube" />
              </a>
              <a href="#!" className="producer-button">
                제작자
              </a>
            </div>
          </div>
          <div className="footer-column">
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

export default CommunityPage;
