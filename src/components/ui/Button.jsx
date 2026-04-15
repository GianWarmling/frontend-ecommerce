function Button({children, onClick, type = "submit"}) {
    return ( 
        <button className="flex gap-1 items-center bg-orange-500 p-2 text-white rounded-md cursor-pointer hover:bg-orange-400" type={type} onClick={onClick}>{children}</button>              
     );
}

export default Button;