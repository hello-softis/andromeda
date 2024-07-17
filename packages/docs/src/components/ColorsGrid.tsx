import { colors } from '@andromeda/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  // Agrupar chaves pelo valor da cor
  const colorGroups = Object.entries(colors).reduce((acc, [key, color]) => {
    if (!acc[color]) {
      acc[color] = [];
    }
    acc[color].push(key);
    return acc;
  }, {} as Record<string, string[]>);

  return Object.entries(colorGroups).map(([color, keys]) => {
    return (
      <div key={color} style={{ backgroundColor: color, padding: '2rem' }}>
        {keys.length === 1 ? (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            fontFamily: 'monospace', 
            color: getContrast(color, '#FFFFFF') < 3.5 ? '#000000' : '#FFFFFF' 
            }}
          >
            <strong>{keys[0]}</strong>
            <span>{color}</span>
          </div>
        ) : (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            fontFamily: 'monospace',
            color: getContrast(color, '#FFFFFF') < 3.5 ? '#000000' : '#FFFFFF' 
            }}
          >
            <strong>{keys[0]}</strong>
            <strong>{keys[1]}</strong>
            <span>{color}</span>
          </div>
        )}
      </div>
    )
  })
}
