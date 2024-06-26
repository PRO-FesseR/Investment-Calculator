import {formatter} from '../util/investment.js';
export default function TableBodyRow({year,investmentValue, yearlyInterest, TotalInterest, TotalInvestment}){
    return(
        <tr>
        <td>{year}</td>
        <td>{formatter.format(investmentValue)}</td>
        <td>{formatter.format(yearlyInterest)}</td>
        <td>{formatter.format(TotalInterest)}</td>
        <td>{formatter.format(TotalInvestment)}</td>
        </tr>
    )
}