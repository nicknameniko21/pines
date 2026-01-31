interface SparklineProps {
  data: number[];
  isPositive: boolean;
}

export function Sparkline({ data, isPositive }: SparklineProps) {
  if (!data || data.length === 0) {
    return <div className="w-full h-full bg-muted/20 rounded" />;
  }

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  const fillPoints = `0,100 ${points} 100,100`;
  
  const strokeColor = isPositive ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)';
  const fillColor = isPositive ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)';

  return (
    <svg 
      viewBox="0 0 100 100" 
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <polygon
        points={fillPoints}
        fill={fillColor}
      />
      <polyline
        points={points}
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
