import {calculateInvestmentResults} from '../util/investment.js';
import TableBodyRow from "./TableBodyRow.jsx";
export default function ResultsComponent({userData}){
    const calculated_investments = calculateInvestmentResults(userData);
    let acc_investedCapital = userData.initialInvestment;
    let acc_interest = 0;
    return(
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {calculated_investments.map((calculated, i) => {
                acc_investedCapital += calculated.annualInvestment;
                acc_interest += calculated.interest;
                 return <TableBodyRow key={i}
                                      year = {calculated.year}
                                      investmentValue = {calculated.valueEndOfYear}
                                      yearlyInterest = {calculated.interest}
                                      TotalInterest={acc_interest}
                                      TotalInvestment={acc_investedCapital}/>
                }
            )}
            {/*<tr>*/}
            {/*    <td>{year}</td>*/}
            {/*    <td>{annualInvestment}</td>*/}
            {/*    <td>{interest}</td>*/}
            {/*    <td>{}</td>*/}
            {/*    <td></td>*/}
            {/*</tr>*/}
            </tbody>
        </table>
    )
}