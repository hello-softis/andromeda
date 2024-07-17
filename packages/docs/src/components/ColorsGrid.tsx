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

  return (
    <div className="grid">
      {Object.entries(colorGroups).map(([color, keys]) => {
        const textColor = getContrast(color, '#F5F5FA') < 3.5 ? 'text-gray-900' : 'text-gray-50';

        return (
          <div key={color} className="p-8" style={{ backgroundColor: color }}>
            {keys.length === 1 ? (
              <div className={`flex justify-between font-mono ${textColor}`}>
                <strong>${keys[0]}</strong>
                <span>{color}</span>
              </div>
            ) : (
              <div className={`flex justify-between items-center font-mono ${textColor}`}>
                <strong>${keys[0]}</strong>
                <strong>{keys[1]}</strong>
                <span>{color}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
