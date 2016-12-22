import React, { PropTypes } from 'react';
import RadioButtons from './RadioButtons';
import Button from './Button';
import TextInput from './TextInput';

class ChordSearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSearchChordsClicked = this.onSearchChordsClicked.bind(this);
  }

  onSearchChordsClicked() {

  }

  render() {
    return (
      <div>
        <h2>Chord Search</h2>
        <RadioButtons />
        <TextInput
          name="searchInput"
        />
        <Button
          text="Go!"
          onClick={onSearchChordsClicked}
        />
      </div>

      // <div>
      //   <h2>Fuel Savings Analysis</h2>
      //   <table>
      //     <tbody>
      //     <tr>
      //       <td><label htmlFor="newMpg">New Vehicle MPG</label></td>
      //       <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="newMpg" value={fuelSavings.newMpg}/>
      //       </td>
      //     </tr>
      //     <tr>
      //       <td><label htmlFor="tradeMpg">Trade-in MPG</label></td>
      //       <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="tradeMpg" value={fuelSavings.tradeMpg}/>
      //       </td>
      //     </tr>
      //     <tr>
      //       <td><label htmlFor="newPpg">New Vehicle price per gallon</label></td>
      //       <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="newPpg" value={fuelSavings.newPpg}/>
      //       </td>
      //     </tr>
      //     <tr>
      //       <td><label htmlFor="tradePpg">Trade-in price per gallon</label></td>
      //       <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="tradePpg" value={fuelSavings.tradePpg}/>
      //       </td>
      //     </tr>
      //     <tr>
      //       <td><label htmlFor="milesDriven">Miles Driven</label></td>
      //       <td>
      //         <FuelSavingsTextInput
      //           onChange={this.fuelSavingsKeypress}
      //           name="milesDriven"
      //           value={fuelSavings.milesDriven}/>
      //         miles per
      //         <select
      //           name="milesDrivenTimeframe"
      //           onChange={this.onTimeframeChange}
      //           value={fuelSavings.milesDrivenTimeframe}>
      //           <option value="week">Week</option>
      //           <option value="month">Month</option>
      //           <option value="year">Year</option>
      //         </select>
      //       </td>
      //     </tr>
      //     <tr>
      //       <td><label>Date Modified</label></td>
      //       <td>{fuelSavings.dateModified}</td>
      //     </tr>
      //     </tbody>
      //   </table>
      //
      //   <hr/>
      //
      //   {fuelSavings.necessaryDataIsProvidedToCalculateSavings &&
      //     <FuelSavingsResults savings={fuelSavings.savings} />}
      //   <input type="submit" value="Save" onClick={this.save} />
      // </div>
    );
  }
}

ChordSearchForm.propTypes = {

};

export default ChordSearchForm;
