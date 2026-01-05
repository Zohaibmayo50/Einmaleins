import RangePage from '../components/RangePage'

export default function MultiplicationTable41to50() {
  return (
    <RangePage
      rangeStart={41}
      rangeEnd={50}
      nextRangeUrl="/51-to-60"
      prevRangeUrl="/31-to-40"
      difficultyLevel="advanced"
      difficultyColor="from-pink-50 to-purple-50"
    />
  )
}
