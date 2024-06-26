export default function InputField({label, type, handleChange}) {
    return (
        <label>
            {label}
            <input type={type} onChange={handleChange}/>
        </label>
    )
}