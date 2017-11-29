import React from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";

require("create-react-class");

const REGIONS = [
  { label: "Pohojois-Pohjanmaa", value: "p_pohj" },
  { label: "Keski-Pohjanmaa", value: "k_pohj" },
  { label: "Etelä-Pohjanmaa", value: "e_pohj" },
  { label: "Ahvenanmaa", value: "ahvn" },
  { label: "Uusimaa", value: "uusi" },
  { label: "Lounais-Suomi", value: "l_suom" }
];

var RegionsField = createClass({
  displayName: "Regions",
  propTypes: {
    label: PropTypes.string
  },
  getInitialState() {
    return {
      stayOpen: false,
      value: []
    };
  },
  handleSelectChange(value) {
    console.log("Valinnat: ", value);
    this.setState({ value });
  },
  toggleCheckbox(e) {
    this.setState({
      [e.target.name]: e.target.checked
    });
  },

  render() {
    const { stayOpen, value } = this.state;
    const options = REGIONS;
    return (
      <div className="section">
        <Select
          closeOnSelect={!stayOpen}
          multi
          onChange={this.handleSelectChange}
          options={options}
          placeholder="Valitse alue: "
          simpleValue
          value={value}
        />

        <div className="checkbox">
          <label className="checkbox">
            <input
              type="checkbox"
              className="checkbox-control"
              name="stayOpen"
              checked={stayOpen}
              onChange={this.toggleCheckbox}
            />
            <span className="checkbox-label">
              Stay open when an Option is selected
            </span>
          </label>
        </div>
      </div>
    );
  }
});
export default RegionsField;
