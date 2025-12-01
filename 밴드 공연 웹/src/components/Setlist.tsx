import './Setlist.css'

interface SetlistProps {
  setlist: string[]
}

const Setlist = ({ setlist }: SetlistProps) => {
  return (
    <div className="setlist">
      <div className="setlist-header">
        <h2>🎵 셋리스트</h2>
      </div>
      <div className="setlist-content">
        <ol className="setlist-list">
          {setlist.map((song, index) => (
            <li key={index} className="setlist-item">
              <span className="setlist-number">{index + 1}</span>
              <span className="setlist-song">{song}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Setlist

