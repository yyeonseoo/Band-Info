import { useState } from 'react'
import RockPaperScissors from '../components/games/RockPaperScissors'
import NumberGuess from '../components/games/NumberGuess'
import QuizGame from '../components/games/QuizGame'
import TypingGame from '../components/games/TypingGame'
import MemoryGame from '../components/games/MemoryGame'
import './Events.css'

type GameType = 'menu' | 'rps' | 'number' | 'quiz' | 'typing' | 'memory'

const Events = () => {
  const [currentGame, setCurrentGame] = useState<GameType>('menu')

  const games = [
    { id: 'rps', name: '가위바위보', icon: '✂️', description: '컴퓨터와 가위바위보 대결!' },
    { id: 'number', name: '숫자 맞추기', icon: '🎯', description: '1부터 100까지 숫자를 맞춰보세요!' },
    { id: 'quiz', name: '음악 퀴즈', icon: '🎵', description: '음악 관련 퀴즈를 풀어보세요!' },
    { id: 'typing', name: '타이핑 게임', icon: '⌨️', description: '빠르게 타이핑하세요!' },
    { id: 'memory', name: '메모리 게임', icon: '🧠', description: '카드를 기억하고 맞춰보세요!' },
  ]

  if (currentGame !== 'menu') {
    return (
      <div className="events-page">
        <button onClick={() => setCurrentGame('menu')} className="back-button">
          ← 게임 선택으로 돌아가기
        </button>
        {currentGame === 'rps' && <RockPaperScissors />}
        {currentGame === 'number' && <NumberGuess />}
        {currentGame === 'quiz' && <QuizGame />}
        {currentGame === 'typing' && <TypingGame />}
        {currentGame === 'memory' && <MemoryGame />}
      </div>
    )
  }

  return (
    <div className="events-page">
      <h1>🎮 이벤트 게임</h1>
      <p className="events-description">다양한 미니게임을 즐겨보세요!</p>
      
      <div className="games-grid">
        {games.map((game) => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => setCurrentGame(game.id as GameType)}
          >
            <div className="game-icon">{game.icon}</div>
            <h3>{game.name}</h3>
            <p>{game.description}</p>
            <button className="play-button">플레이</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events

