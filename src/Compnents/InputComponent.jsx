import InputField from "./InputField.jsx";
export default function InputComponent({InputHandler}){
    function handleInputChange(event){
        const input = Number(event.target.value);
        if(!isNaN(input)) {
            let label = event.target.closest("label").textContent
                .split(' ')
            label[0] = label[0].toLowerCase();
            label = label.join('')
            InputHandler({label:label, value:input})
        }
    }
    return(
        <section id="user-input">
            <div className="input-group">
                <InputField label="Initial Investment" type="Text" handleChange={handleInputChange}/>
                <InputField label="Annual Investment" type="number" handleChange={handleInputChange}/>
            </div>
            <div className="input-group">
                <InputField label="Expected Return" type="Text" handleChange={handleInputChange}/>
                <InputField label="Duration" type="Text" handleChange={handleInputChange}/>
            </div>
        </section>
    )
}