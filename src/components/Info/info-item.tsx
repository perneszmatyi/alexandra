import { useState } from 'react';

interface InfoItemProps {
  item: { title: string; text: string };
}

export const InfoItem = ({ item }: InfoItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div key={item.title} onClick={handleItemClick}>
      <h2 className="font-montagu-slab text-blue-main border text-xl font-medium">{item.title}</h2>
      <p
        className={`font-raleway text-blue-main ${isOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'} transition-all duration-200`}
      >
        {item.text}
      </p>
    </div>
  );
};
