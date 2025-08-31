import { X } from "lucide-react";

interface DrawerProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

export const Drawer = ({ label, children }: DrawerProps) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button">
          {label}
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-white text-base-content min-h-full w-80 p-4">
          <div className="flex justify-end">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay hover:bg-gray-400 hover:rounded-full active:bg-gray-400 p-2 cursor-pointer active:rounded-full"
            >
              <X />
            </label>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
