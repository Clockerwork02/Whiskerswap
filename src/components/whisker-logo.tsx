interface WhiskerLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export function WhiskerLogo({ size = 'md', showText = true, className = '' }: WhiskerLogoProps) {
  const sizes = {
    sm: { icon: 24, text: 'text-lg' },
    md: { icon: 32, text: 'text-xl' },
    lg: { icon: 40, text: 'text-2xl' },
    xl: { icon: 48, text: 'text-3xl' }
  };
  
  const { icon, text } = sizes[size];
  
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* WhiskerSwap Logo - CSS-based cat design */}
      <div className="relative">
        <div 
          className="rounded-full bg-gradient-to-br from-teal-400 to-mint-500 flex items-center justify-center font-bold text-white"
          style={{ width: icon, height: icon, fontSize: Math.floor(icon * 0.4) }}
        >
          🐱
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-md -z-10"></div>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <h1 className={`font-bold ${text} text-gray-900 dark:text-white leading-none`}>
            WhiskerSwap
          </h1>
        </div>
      )}
    </div>
  );
}