interface Props {
  percentage: number;
  circleWidth: number;
  radius: number;
  strokeWidth: number;
}

const CircleProgressBar = ({
  percentage,
  circleWidth,
  radius,
  strokeWidth,
}: Props) => {
  const dashArray: number = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div>
      <svg
        height={`${circleWidth}`}
        width={`${circleWidth}`}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={`${circleWidth / 2}`}
          cy={`${circleWidth / 2}`}
          stroke-width={strokeWidth}
          r={radius}
          className="circle-background"
        />
        <circle
          cx={`${circleWidth / 2}`}
          cy={`${circleWidth / 2}`}
          stroke-width={strokeWidth}
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${50})`}
        />
      </svg>
    </div>
  );
};

export default CircleProgressBar;
