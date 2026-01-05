import RangePage from '../components/RangePage'

export default function MultiplicationTable61to70() {
  return (
    <RangePage
      rangeStart={61}
      rangeEnd={70}
      nextRangeUrl="/71-to-80"
      prevRangeUrl="/51-to-60"
      difficultyLevel="advanced"
      difficultyColor="from-indigo-50 to-blue-50"
    />
  )
}
