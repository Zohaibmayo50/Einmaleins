import RangePage from '../components/RangePage'

export default function MultiplicationTable1to10() {
  return (
    <RangePage
      rangeStart={1}
      rangeEnd={10}
      nextRangeUrl="/11-to-20"
      difficultyLevel="beginner"
      difficultyColor="from-blue-50 to-indigo-50"
    />
  )
}
