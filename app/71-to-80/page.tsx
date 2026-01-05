import RangePage from '../components/RangePage'

export default function MultiplicationTable71to80() {
  return (
    <RangePage
      rangeStart={71}
      rangeEnd={80}
      nextRangeUrl="/81-to-90"
      prevRangeUrl="/61-to-70"
      difficultyLevel="advanced"
      difficultyColor="from-cyan-50 to-teal-50"
    />
  )
}
