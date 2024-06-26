export default function InputComponent(){
    return(<section id="user-input">
        <div className="input-group">
            <label>
                Initial Investment
                <input type="text"/>
            </label>
            <label>
                Annual Investment
                <input type="number"/>
            </label>
        </div>
            <div className="input-group">
                <label>
                    Expected Return
                    <input type="text"/>
                </label>
                <label>
                    Duration
                    <input type="text"/>
                </label>
            </div>
        </section>
    )
}