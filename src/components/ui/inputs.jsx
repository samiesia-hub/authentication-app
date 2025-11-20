function Inputs({ type, placeholder, label, value, onChange, ...otherProps }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            {label && <label className="font-medium">{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...otherProps}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}

export default Inputs
