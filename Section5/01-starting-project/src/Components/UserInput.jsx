export default function UserInput({userInput, onChange}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label for="initial-investment">initial investment</label>
                    <input type="number" id="initial-investment" name="initial-investment" required value={userInput.initialInvestment} onChange={(event) => onChange("initialInvestment", event.target.value)}></input>
                </p>

                <p>
                    <label for="annual-investment">Annual investment</label>
                    <input type="number" id="annual-investment" name="annual-investment" required value={userInput.annualInvestment} onChange={(event) => onChange("annualInvestment", event.target.value)}></input>
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label for="return">return</label>
                    <input type="number" id="return" name="return" required value={userInput.expectedReturn} onChange={(event) => onChange("expectedReturn", event.target.value)}></input>
                </p>

                <p>
                    <label for="duration">duration</label>
                    <input type="number" id="duration" name="duration" required value={userInput.duration} onChange={(event) => onChange("duration", event.target.value)}></input>
                </p>
            </div>
        </section>
    )
}