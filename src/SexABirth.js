import React from 'react';
import './style.css';

export default function SexABirth() {
  return (
    <>
      <form>
        <div className="card-sexbirth">
          <h3>Sex at birth:</h3>
          <div className="input-radio-sexbirth">
            <input type="radio" value="option1" name="radio-group" />
            <label>Male </label>
          </div>

          <div className="input-radio-sexbirth">
            <input type="radio" value="option2" name="radio-group" />
            <label>Female</label>
          </div>

          <div className="input-checkbox-sexbirth">
            <input type="checkbox" value="option3" name="radio-group" />
            <label>I indentifly differently from my sex at birth</label>
          </div>
        </div>
      </form>
    </>
  );
}
