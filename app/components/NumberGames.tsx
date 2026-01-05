'use client'

import { useState, useEffect } from 'react'

interface NumberGamesProps {
  number: number
}

interface Balloon {
  id: number
  multiplier: number
  answer: number
  x: number
  y: number
  speed: number
  isCorrect: boolean
}

interface RaceCar {
  position: number
  question: { multiplier: number; answer: number }
  options: number[]
}

interface Card {
  id: number
  content: string
  value: number
  isFlipped: boolean
  isMatched: boolean
}

export default function NumberGames({ number }: NumberGamesProps) {
  const [activeGame, setActiveGame] = useState<'balloon' | 'race' | 'memory'>('balloon')
  
  // Balloon Pop Game State
  const [balloons, setBalloons] = useState<Balloon[]>([])
  const [bpScore, setBpScore] = useState(0)
  const [bpGameActive, setBpGameActive] = useState(false)
  const [bpMissed, setBpMissed] = useState(0)
  const [popAnimation, setPopAnimation] = useState<{id: number, x: number, y: number} | null>(null)
  
  // Racing Game State
  const [raceCar, setRaceCar] = useState<RaceCar>({ position: 0, question: { multiplier: 1, answer: number }, options: [] })
  const [raceScore, setRaceScore] = useState(0)
  const [raceGameActive, setRaceGameActive] = useState(false)
  const [wrongAnimation, setWrongAnimation] = useState(false)
  
  // Memory Game State
  const [cards, setCards] = useState<Card[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [memoryScore, setMemoryScore] = useState(0)
  const [memoryMoves, setMemoryMoves] = useState(0)

  // Balloon Pop: Generate balloons
  const generateBalloon = () => {
    const multiplier = Math.floor(Math.random() * 10) + 1
    const correctAnswer = number * multiplier
    const isCorrect = Math.random() > 0.3
    const answer = isCorrect ? correctAnswer : correctAnswer + (Math.random() > 0.5 ? 1 : -1)
    
    return {
      id: Date.now() + Math.random(),
      multiplier,
      answer,
      x: Math.random() * 80 + 10,
      y: 100,
      speed: Math.random() * 1.5 + 1,
      isCorrect
    }
  }

  // Balloon Pop: Start game
  const startBalloonGame = () => {
    setBpScore(0)
    setBpMissed(0)
    setBpGameActive(true)
    setBalloons([generateBalloon()])
  }

  // Balloon Pop: Animation loop
  useEffect(() => {
    if (!bpGameActive) return

    const interval = setInterval(() => {
      setBalloons(prev => {
        const updated = prev.map(b => ({ ...b, y: b.y - b.speed }))
        const remaining = updated.filter(b => {
          if (b.y < -10) {
            if (b.isCorrect) setBpMissed(m => m + 1)
            return false
          }
          return true
        })
        
        // Add new balloon occasionally
        if (Math.random() > 0.7 && remaining.length < 4) {
          remaining.push(generateBalloon())
        }
        
        return remaining
      })
    }, 50)

    return () => clearInterval(interval)
  }, [bpGameActive, number])

  // Balloon Pop: End game if too many missed
  useEffect(() => {
    if (bpMissed >= 5) {
      setBpGameActive(false)
    }
  }, [bpMissed])

  // Balloon Pop: Click balloon
  const popBalloon = (balloon: Balloon) => {
    if (balloon.isCorrect) {
      setBpScore(bpScore + 1)
      setPopAnimation({ id: balloon.id, x: balloon.x, y: balloon.y })
      setTimeout(() => setPopAnimation(null), 500)
    } else {
      setBpMissed(bpMissed + 1)
    }
    setBalloons(balloons.filter(b => b.id !== balloon.id))
  }

  // Racing Game: Generate question
  const generateRaceQuestion = () => {
    const multiplier = Math.floor(Math.random() * 10) + 1
    const correctAnswer = number * multiplier
    const options = [correctAnswer]
    
    while (options.length < 4) {
      const wrong = correctAnswer + (Math.floor(Math.random() * 6) - 3)
      if (!options.includes(wrong) && wrong > 0) {
        options.push(wrong)
      }
    }
    
    setRaceCar({
      position: raceCar.position,
      question: { multiplier, answer: correctAnswer },
      options: options.sort(() => Math.random() - 0.5)
    })
  }

  // Racing Game: Start
  const startRaceGame = () => {
    setRaceScore(0)
    setRaceGameActive(true)
    setRaceCar({ position: 0, question: { multiplier: 1, answer: number }, options: [] })
    generateRaceQuestion()
  }

  // Racing Game: Check answer
  const checkRaceAnswer = (selected: number) => {
    if (selected === raceCar.question.answer) {
      setRaceScore(raceScore + 1)
      setRaceCar(prev => ({ ...prev, position: prev.position + 10 }))
      
      if (raceCar.position >= 90) {
        setRaceGameActive(false)
      } else {
        setTimeout(() => generateRaceQuestion(), 300)
      }
    } else {
      setWrongAnimation(true)
      setTimeout(() => setWrongAnimation(false), 500)
    }
  }

  // Memory Game: Initialize cards
  const initMemoryGame = () => {
    const pairs: Card[] = []
    const multipliers = [1, 2, 3, 4, 5, 6]
    
    multipliers.forEach((mult, idx) => {
      pairs.push({
        id: idx * 2,
        content: `${number} × ${mult}`,
        value: number * mult,
        isFlipped: false,
        isMatched: false
      })
      pairs.push({
        id: idx * 2 + 1,
        content: `${number * mult}`,
        value: number * mult,
        isFlipped: false,
        isMatched: false
      })
    })
    
    setCards(pairs.sort(() => Math.random() - 0.5))
    setMemoryScore(0)
    setMemoryMoves(0)
    setFlippedCards([])
  }

  // Memory Game: Flip card
  const flipCard = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isMatched || cards[id].isFlipped) return
    
    const newCards = [...cards]
    newCards[id].isFlipped = true
    setCards(newCards)
    
    const newFlipped = [...flippedCards, id]
    setFlippedCards(newFlipped)
    
    if (newFlipped.length === 2) {
      setMemoryMoves(memoryMoves + 1)
      const [first, second] = newFlipped
      
      if (cards[first].value === cards[second].value) {
        setTimeout(() => {
          const matched = [...cards]
          matched[first].isMatched = true
          matched[second].isMatched = true
          setCards(matched)
          setFlippedCards([])
          setMemoryScore(memoryScore + 1)
        }, 500)
      } else {
        setTimeout(() => {
          const unflipped = [...cards]
          unflipped[first].isFlipped = false
          unflipped[second].isFlipped = false
          setCards(unflipped)
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  return (
    <section className="section-container bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            🎮 {number} Çarpım Tablosu Oyunları
          </h2>
          <p className="text-lg text-slate-700">
            Eğlenceli animasyonlu oyunlarla {number} çarpım tablosunu pekiştirin!
          </p>
        </div>

        {/* Game Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button
            onClick={() => setActiveGame('balloon')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeGame === 'balloon'
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            🎈 Balon Patlatma
          </button>
          <button
            onClick={() => setActiveGame('race')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeGame === 'race'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            🏎️ Yarış Oyunu
          </button>
          <button
            onClick={() => setActiveGame('memory')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeGame === 'memory'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            🧠 Hafıza Oyunu
          </button>
        </div>

        {/* Balloon Pop Game */}
        {activeGame === 'balloon' && (
          <div className="bg-gradient-to-b from-sky-100 to-sky-300 rounded-2xl p-8 shadow-xl min-h-[600px] relative overflow-hidden">
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg font-bold text-lg">
                Skor: <span className="text-pink-600">{bpScore}</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg font-bold text-lg">
                Kaçan: <span className={bpMissed >= 3 ? 'text-red-600' : 'text-orange-600'}>{bpMissed}/5</span>
              </div>
            </div>

            {!bpGameActive ? (
              <div className="flex flex-col items-center justify-center h-[500px]">
                <div className="text-8xl mb-6 animate-bounce">🎈</div>
                <h3 className="text-2xl font-bold mb-4">Balon Patlatma Oyunu</h3>
                <p className="text-slate-700 mb-6 text-center max-w-md">
                  Doğru cevabı içeren balonları patlatın! Yanlış balonlara dokunmayın ve doğru balonları kaçırmayın!
                </p>
                <button
                  onClick={startBalloonGame}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg"
                >
                  Oyunu Başlat 🎈
                </button>
                {bpScore > 0 && (
                  <div className="mt-6 text-lg">
                    Son Skor: <span className="font-bold text-pink-600">{bpScore}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative h-[500px] mt-12">
                {/* Clouds decoration */}
                <div className="absolute top-10 left-10 text-6xl opacity-60 animate-float">☁️</div>
                <div className="absolute top-20 right-20 text-5xl opacity-60 animate-float-delayed">☁️</div>
                
                {/* Balloons */}
                {balloons.map(balloon => (
                  <button
                    key={balloon.id}
                    onClick={() => popBalloon(balloon)}
                    className="absolute transition-all duration-200 hover:scale-110"
                    style={{
                      left: `${balloon.x}%`,
                      bottom: `${balloon.y}%`,
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div className="relative">
                      <div className={`text-6xl ${balloon.isCorrect ? 'animate-float' : ''}`}>
                        🎈
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-full px-3 py-1 font-bold text-sm whitespace-nowrap">
                        {number}×{balloon.multiplier}={balloon.answer}
                      </div>
                    </div>
                  </button>
                ))}

                {/* Pop animation */}
                {popAnimation && (
                  <div
                    className="absolute animate-ping"
                    style={{
                      left: `${popAnimation.x}%`,
                      bottom: `${popAnimation.y}%`,
                    }}
                  >
                    <div className="text-4xl">💥</div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Racing Game */}
        {activeGame === 'race' && (
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">🏎️ Yarış Oyunu</h3>
              <p className="text-slate-600">Doğru cevapları vererek yarışı kazanın!</p>
            </div>

            {!raceGameActive || raceCar.position >= 90 ? (
              <div className="text-center py-12">
                <div className="text-8xl mb-6">🏁</div>
                {raceCar.position >= 90 ? (
                  <>
                    <h3 className="text-3xl font-bold text-green-600 mb-4">🎉 Tebrikler! Kazandınız!</h3>
                    <div className="text-2xl mb-6">
                      Toplam Skor: <span className="font-bold text-blue-600">{raceScore}</span>
                    </div>
                  </>
                ) : (
                  <h3 className="text-2xl font-bold mb-4">Yarışa Hazır mısınız?</h3>
                )}
                <button
                  onClick={startRaceGame}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                >
                  {raceCar.position >= 90 ? 'Tekrar Oyna' : 'Yarışı Başlat'} 🏎️
                </button>
              </div>
            ) : (
              <div>
                {/* Race Track */}
                <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl p-6 mb-6 relative overflow-hidden">
                  {/* Track lines */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-1 border-t-4 border-dashed border-white/30"></div>
                  </div>
                  
                  {/* Car */}
                  <div 
                    className={`text-6xl transition-all duration-300 ${wrongAnimation ? 'animate-bounce' : ''}`}
                    style={{ marginLeft: `${raceCar.position}%` }}
                  >
                    🏎️
                  </div>
                  
                  {/* Finish line */}
                  <div className="absolute right-4 top-0 bottom-0 flex items-center">
                    <div className="text-6xl">🏁</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="bg-gray-200 rounded-full h-4 mb-6">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${raceCar.position}%` }}
                  ></div>
                </div>

                {/* Question */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 mb-6">
                  <div className="text-3xl font-bold text-center mb-6">
                    {number} × {raceCar.question.multiplier} = ?
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {raceCar.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => checkRaceAnswer(option)}
                        className="bg-white hover:bg-blue-100 text-2xl font-bold py-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all hover:scale-105"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-center text-lg font-semibold">
                  Skor: <span className="text-blue-600">{raceScore}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Memory Game */}
        {activeGame === 'memory' && (
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">🧠 Hafıza Oyunu</h3>
              <p className="text-slate-600">Eşleşen kartları bulun!</p>
            </div>

            {cards.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-8xl mb-6">🃏</div>
                <h3 className="text-2xl font-bold mb-4">Kartları Eşleştir</h3>
                <p className="text-slate-600 mb-6">Çarpma işlemlerini sonuçlarıyla eşleştirin!</p>
                <button
                  onClick={initMemoryGame}
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                >
                  Oyunu Başlat 🧠
                </button>
              </div>
            ) : (
              <div>
                <div className="flex justify-center gap-6 mb-6">
                  <div className="text-lg font-semibold">
                    Eşleşen: <span className="text-green-600">{memoryScore}/6</span>
                  </div>
                  <div className="text-lg font-semibold">
                    Hamle: <span className="text-purple-600">{memoryMoves}</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {cards.map((card, idx) => (
                    <button
                      key={card.id}
                      onClick={() => flipCard(idx)}
                      className={`aspect-square rounded-xl font-bold text-xl transition-all duration-300 ${
                        card.isMatched
                          ? 'bg-green-100 border-4 border-green-400 scale-95'
                          : card.isFlipped
                          ? 'bg-gradient-to-br from-purple-400 to-indigo-400 text-white'
                          : 'bg-gradient-to-br from-purple-100 to-indigo-100 hover:scale-105'
                      }`}
                      disabled={card.isMatched}
                    >
                      {card.isFlipped || card.isMatched ? (
                        <span className="text-lg">{card.content}</span>
                      ) : (
                        <span className="text-4xl">❓</span>
                      )}
                    </button>
                  ))}
                </div>

                {memoryScore === 6 && (
                  <div className="text-center mt-8">
                    <h3 className="text-3xl font-bold text-green-600 mb-4">🎉 Tebrikler!</h3>
                    <p className="text-xl mb-4">
                      {memoryMoves} hamlede tamamladınız!
                    </p>
                    <button
                      onClick={initMemoryGame}
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
                    >
                      Tekrar Oyna
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

  
  // Quick Fire Game State
  const [qfQuestion, setQfQuestion] = useState({ multiplier: 1, answer: number })
  const [qfInput, setQfInput] = useState('')
  const [qfScore, setQfScore] = useState(0)
  const [qfTimeLeft, setQfTimeLeft] = useState(30)
  const [qfGameActive, setQfGameActive] = useState(false)
  
  // Missing Number Game State
  const [mnQuestion, setMnQuestion] = useState({ multiplier: 1, answer: number, position: 'result' as 'multiplier' | 'result' })
  const [mnInput, setMnInput] = useState('')
  const [mnScore, setMnScore] = useState(0)
  const [mnTotal, setMnTotal] = useState(0)
  
  // True/False Game State
  const [tfQuestion, setTfQuestion] = useState({ multiplier: 1, shown: number, isCorrect: true })
  const [tfScore, setTfScore] = useState(0)
  const [tfTotal, setTfTotal] = useState(0)
  const [tfFeedback, setTfFeedback] = useState<'correct' | 'wrong' | null>(null)

  // Generate Quick Fire Question
  const generateQfQuestion = () => {
    const multiplier = Math.floor(Math.random() * 10) + 1
    setQfQuestion({ multiplier, answer: number * multiplier })
    setQfInput('')
  }

  // Generate Missing Number Question
  const generateMnQuestion = () => {
    const multiplier = Math.floor(Math.random() * 10) + 1
    const position = Math.random() > 0.5 ? 'multiplier' : 'result'
    setMnQuestion({ multiplier, answer: number * multiplier, position })
    setMnInput('')
  }

  // Generate True/False Question
  const generateTfQuestion = () => {
    const multiplier = Math.floor(Math.random() * 10) + 1
    const correctAnswer = number * multiplier
    const isCorrect = Math.random() > 0.3 // 70% correct, 30% wrong
    const shown = isCorrect ? correctAnswer : correctAnswer + (Math.random() > 0.5 ? 1 : -1)
    setTfQuestion({ multiplier, shown, isCorrect })
    setTfFeedback(null)
  }

  // Quick Fire Timer
  useEffect(() => {
    if (qfGameActive && qfTimeLeft > 0) {
      const timer = setTimeout(() => setQfTimeLeft(qfTimeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (qfTimeLeft === 0) {
      setQfGameActive(false)
    }
  }, [qfGameActive, qfTimeLeft])

  // Start Quick Fire Game
  const startQfGame = () => {
    setQfScore(0)
    setQfTimeLeft(30)
    setQfGameActive(true)
    generateQfQuestion()
  }

  // Check Quick Fire Answer
  const checkQfAnswer = () => {
    if (parseInt(qfInput) === qfQuestion.answer) {
      setQfScore(qfScore + 1)
      generateQfQuestion()
    } else {
      setQfInput('')
    }
  }

  // Check Missing Number Answer
  const checkMnAnswer = () => {
    const correctAnswer = mnQuestion.position === 'multiplier' ? mnQuestion.multiplier : mnQuestion.answer
    if (parseInt(mnInput) === correctAnswer) {
      setMnScore(mnScore + 1)
      setMnTotal(mnTotal + 1)
      generateMnQuestion()
    } else {
      setMnTotal(mnTotal + 1)
      generateMnQuestion()
    }
  }

  // Check True/False Answer
  const checkTfAnswer = (userAnswer: boolean) => {
    if (userAnswer === tfQuestion.isCorrect) {
      setTfScore(tfScore + 1)
      setTfFeedback('correct')
    } else {
      setTfFeedback('wrong')
    }
    setTfTotal(tfTotal + 1)
    setTimeout(() => generateTfQuestion(), 1500)
  }

  // Initialize games
  useEffect(() => {
    generateQfQuestion()
    generateMnQuestion()
    generateTfQuestion()
  }, [number])

  return (
    <section className="section-container bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            🎮 {number} Çarpım Tablosu Oyunları
          </h2>
          <p className="text-lg text-slate-700">
            Eğlenceli oyunlarla {number} çarpım tablosunu pekiştirin!
          </p>
        </div>

        {/* Game Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button
            onClick={() => setActiveGame('quickfire')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeGame === 'quickfire'
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            ⚡ Hızlı Atış
          </button>
          <button
            onClick={() => setActiveGame('missing')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeGame === 'missing'
                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            🔍 Kayıp Sayı
          </button>
          <button
            onClick={() => setActiveGame('truefalse')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeGame === 'truefalse'
                ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            ✓✗ Doğru/Yanlış
          </button>
        </div>

        {/* Quick Fire Game */}
        {activeGame === 'quickfire' && (
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">⚡ Hızlı Atış</h3>
              <p className="text-slate-600">30 saniyede mümkün olduğunca çok soru cevapla!</p>
            </div>

            {!qfGameActive ? (
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <button
                  onClick={startQfGame}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                >
                  Oyunu Başlat
                </button>
                {qfScore > 0 && (
                  <div className="mt-6 text-lg">
                    Son Skor: <span className="font-bold text-orange-600">{qfScore}</span>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-lg font-semibold">
                    Skor: <span className="text-orange-600">{qfScore}</span>
                  </div>
                  <div className={`text-2xl font-bold ${qfTimeLeft <= 5 ? 'text-red-600 animate-pulse' : 'text-slate-900'}`}>
                    ⏱️ {qfTimeLeft}s
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 mb-6">
                  <div className="text-4xl font-bold text-center mb-6">
                    {number} × {qfQuestion.multiplier} = ?
                  </div>
                  <input
                    type="number"
                    value={qfInput}
                    onChange={(e) => setQfInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && checkQfAnswer()}
                    className="w-full text-3xl text-center p-4 rounded-lg border-2 border-orange-300 focus:border-orange-500 focus:outline-none"
                    placeholder="?"
                    autoFocus
                  />
                </div>

                <button
                  onClick={checkQfAnswer}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                >
                  Cevapla ✓
                </button>
              </div>
            )}
          </div>
        )}

        {/* Missing Number Game */}
        {activeGame === 'missing' && (
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">🔍 Kayıp Sayı</h3>
              <p className="text-slate-600">Eksik sayıyı bul ve doğru cevabı ver!</p>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <div className="text-lg font-semibold">
                Doğru: <span className="text-green-600">{mnScore}</span>
              </div>
              <div className="text-lg font-semibold">
                Toplam: <span className="text-blue-600">{mnTotal}</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-6">
              <div className="text-4xl font-bold text-center mb-6">
                {mnQuestion.position === 'multiplier' ? (
                  <>{number} × ? = {mnQuestion.answer}</>
                ) : (
                  <>{number} × {mnQuestion.multiplier} = ?</>
                )}
              </div>
              <input
                type="number"
                value={mnInput}
                onChange={(e) => setMnInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && checkMnAnswer()}
                className="w-full text-3xl text-center p-4 rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:outline-none"
                placeholder="?"
                autoFocus
              />
            </div>

            <button
              onClick={checkMnAnswer}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
            >
              Kontrol Et ✓
            </button>
          </div>
        )}

        {/* True/False Game */}
        {activeGame === 'truefalse' && (
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-green-600 mb-2">✓✗ Doğru/Yanlış</h3>
              <p className="text-slate-600">Bu çarpma işlemi doğru mu?</p>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <div className="text-lg font-semibold">
                Doğru: <span className="text-green-600">{tfScore}</span>
              </div>
              <div className="text-lg font-semibold">
                Toplam: <span className="text-teal-600">{tfTotal}</span>
              </div>
            </div>

            <div className={`rounded-xl p-8 mb-6 transition-colors ${
              tfFeedback === 'correct' ? 'bg-green-100' :
              tfFeedback === 'wrong' ? 'bg-red-100' :
              'bg-gradient-to-br from-green-50 to-teal-50'
            }`}>
              <div className="text-5xl font-bold text-center mb-4">
                {number} × {tfQuestion.multiplier} = {tfQuestion.shown}
              </div>
              {tfFeedback && (
                <div className={`text-center text-xl font-semibold ${
                  tfFeedback === 'correct' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {tfFeedback === 'correct' ? '✓ Doğru!' : `✗ Yanlış! Doğru cevap: ${number * tfQuestion.multiplier}`}
                </div>
              )}
            </div>

            {!tfFeedback && (
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => checkTfAnswer(true)}
                  className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-6 rounded-xl font-bold text-xl hover:scale-105 transition-transform"
                >
                  ✓ DOĞRU
                </button>
                <button
                  onClick={() => checkTfAnswer(false)}
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-6 rounded-xl font-bold text-xl hover:scale-105 transition-transform"
                >
                  ✗ YANLIŞ
                </button>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 text-center text-sm text-slate-600">
          <p>💡 İpucu: Oyunlar arasında geçiş yaparak farklı becerileri geliştirebilirsin!</p>
        </div>
      </div>
    </section>
  )
}
