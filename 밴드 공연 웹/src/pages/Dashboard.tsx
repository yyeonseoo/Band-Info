import { useAuth } from '../contexts/AuthContext'
import { useData } from '../contexts/DataContext'
import { Link } from 'react-router-dom'
import Ticket from '../components/Ticket'
import Events from '../components/Events'
import './Dashboard.css'

const Dashboard = () => {
  const { user, logout } = useAuth()
  const { performanceData } = useData()

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>안녕하세요, {user?.name}님! 👋</h1>
          <p>내 티켓과 이벤트 정보를 확인하세요</p>
        </div>
        <button onClick={logout} className="logout-button">
          로그아웃
        </button>
      </div>

      <div className="dashboard-content">
        {performanceData?.ticket && (
          <section className="dashboard-section">
            <Ticket ticket={performanceData.ticket} />
          </section>
        )}

        {performanceData?.events && performanceData.events.length > 0 && (
          <section className="dashboard-section">
            <Events events={performanceData.events} />
          </section>
        )}

        <section className="dashboard-section">
          <div className="info-card">
            <h2>🎵 공연 정보</h2>
            <p>셋리스트와 공연진 정보를 확인하세요</p>
            <Link to="/performances" className="info-link">
              공연 정보 보기 →
            </Link>
          </div>
        </section>

        {!performanceData && (
          <div className="empty-state">
            <p>공연 정보가 아직 설정되지 않았습니다.</p>
            <p>관리자 페이지에서 공연 정보를 설정해주세요.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard

