import RangePage from '../components/RangePage'

export default function MultiplicationTable21to30() {
  return (
    <RangePage
      rangeStart={21}
      rangeEnd={30}
      nextRangeUrl="/31-to-40"
      prevRangeUrl="/11-to-20"
      difficultyLevel="intermediate"
      difficultyColor="from-orange-50 to-red-50"
    />
  )
}
