interface DecorativeBlobProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const DecorativeBlob = ({ position, color, size = 'md' }: DecorativeBlobProps) => {
  const positions = {
    'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
    'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
    'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
  };

  const sizes = {
    'sm': 'w-32 h-32',
    'md': 'w-48 h-48',
    'lg': 'w-64 h-64',
  };

  const colors = {
    'primary': 'text-primary',
    'secondary': 'text-secondary',
  };

  return (
    <div className={`absolute ${positions[position]} ${sizes[size]} opacity-10 pointer-events-none`}>
      <svg viewBox="0 0 200 200" className={colors[color]} fill="currentColor">
        <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.2,42.8C65,56.4,54.2,69,40.8,76.8C27.4,84.6,11.4,87.6,-4.8,85.9C-21,84.2,-42,77.8,-58.1,67.2C-74.2,56.6,-85.4,41.8,-89.8,25.4C-94.2,9,-91.8,-9,-85.2,-25.2C-78.6,-41.4,-67.8,-55.8,-54.2,-63.3C-40.6,-70.8,-23.2,-71.4,-7.1,-75.1C9,-78.8,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
};

export default DecorativeBlob;
