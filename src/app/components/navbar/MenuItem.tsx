'use client'

interface MenuItemProps {
    onClick: () => void;
    label: string;
}
const MenuItem: React.FC<MenuItemProps> = ({onClick, label}) => {
    return (
        <div className="
            py-3 
            px-4 
            hover:bg-neutral-100 
            transtions
            font-semibold
            "
            onClick={onClick}
            >
            {label}
        </div>
    )
}

export default MenuItem