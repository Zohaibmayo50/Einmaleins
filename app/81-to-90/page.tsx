import RangePage from '../components/RangePage'

export default function MultiplicationTable81to90() {
  return (
    <RangePage
      rangeStart={81}
      rangeEnd={90}
      nextRangeUrl="/91-to-100"
      prevRangeUrl="/71-to-80"
      difficultyLevel="advanced"
      difficultyColor="from-teal-50 to-emerald-50"
    />
  )
}
