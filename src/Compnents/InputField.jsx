export default function InputField({label, type, handleChange}) {
    return (
        <p>
        <label>{label}</label>
        <input type={type} onChange={handleChange}/>
        </p>
    )
}