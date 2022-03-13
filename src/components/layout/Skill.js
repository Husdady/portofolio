// React
import { useEffect, useState, useRef } from "react";

// Librarys
import { ProgressBar } from 'react-bootstrap';

const Skill = ({ level, height, barColor }) => {
	const refProgressBar = useRef(null);
  const [defaultLevel, setDefaultLevel] = useState(0);

  useEffect(() => {
  	if (!level) return;
    setDefaultLevel(level);

    if (!refProgressBar.current) return;
    
    const inner = refProgressBar.current.querySelector(".progress-bar");

    if (!inner) return;
    inner.style.backgroundColor = barColor;
  }, [refProgressBar]);

  const barStyle = {
  	height: height,
  	borderRadius: 4,
  	backgroundColor: "rgba(255,255,255, .75)",
  }

  return (
    <ProgressBar
    	ref={refProgressBar}
      now={defaultLevel}
      variant={barColor}
      className="mb-3"
      label={defaultLevel + "%"}
      style={barStyle}
    />
  )
}

export default Skill;

Skill.defaultProps = {
	height: 10,
}