const GuideList = ({allGuide, title}) => {
  return (
    <div className="guideList">
      <h2>{title}</h2>
      {allGuide.map((guide) => (
        <div className="guidePrev" key={guide.id}>
          <h4>Guide name: {guide.name}</h4>
          <p>Count hit: {guide.count_hit}</p>
          <p>Published date: {guide.published}</p>
        </div>
      ))}
    </div>
  )
}
export default GuideList
