import RangePage from '../components/RangePage'

export default function MultiplicationTable51to60() {
  return (
    <RangePage
      rangeStart={51}
      rangeEnd={60}
      nextRangeUrl="/61-to-70"
      prevRangeUrl="/41-to-50"
      difficultyLevel="advanced"
      difficultyColor="from-purple-50 to-indigo-50"
    />
  )
}
