import RangePage from '../components/RangePage'

export default function MultiplicationTable11to20() {
  return (
    <RangePage
      rangeStart={11}
      rangeEnd={20}
      nextRangeUrl="/21-to-30"
      prevRangeUrl="/1-to-10"
      difficultyLevel="intermediate"
      difficultyColor="from-yellow-50 to-orange-50"
    />
  )
}
