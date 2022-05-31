const totalDots = 6
const elems = new Array(totalDots)
const callback = (_, i) => <div key={i} className="sk-chase-dot" />
const dots = Array.from(elems, callback)

const Loading = ({ style }) => {
  return (
    <div style={style} className="w-100 h-100vh d-flex align-items-center jc-center">
      <div className="sk-chase">{dots}</div>
    </div>
  )
}

export default Loading
