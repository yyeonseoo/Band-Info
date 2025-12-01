import './Performers.css'

interface PerformersProps {
  performers: string[]
}

const Performers = ({ performers }: PerformersProps) => {
  return (
    <div className="performers">
      <div className="performers-header">
        <h2>🎸 공연진</h2>
      </div>
      <div className="performers-content">
        <div className="performers-grid">
          {performers.map((performer, index) => (
            <div key={index} className="performer-card">
              <div className="performer-icon">🎤</div>
              <div className="performer-name">{performer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Performers

