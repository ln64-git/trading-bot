import React from "react";

interface SidebarItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  children,
  isOpen,
}) => {
  return (
    <div className="flex items-center space-x-2 p-2">
      <div className="text-gray-400">{icon}</div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default SidebarItem;
