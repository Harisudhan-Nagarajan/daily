import "./App.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';

export function Day26() {
  return (
    <div id="headdings">
      <div id="card">
        <div id="card-heading">
          <h3>Free</h3>
          <h1>
            $0<span>/month</span>
          </h1>
        </div>
        <hr />
        <div >
            <div>
            <p> <CheckIcon /> Single User</p>
            <p><CheckIcon />5GB Storage</p>
            <p><CheckIcon />Unlimited Public Projects</p>
            <p><CheckIcon />Community Access</p>
            </div>
            <div id="blurelements">
            <p><ClearIcon/>Unlimited Private Projects</p>
            <p><ClearIcon/>Dedicated Phone Support</p>
            <p><ClearIcon/>Free Subdomain</p>
            <p><ClearIcon/>Monthly Satus Reports</p>
            </div>
            
            <Button id="button"variant="contained">Contained</Button>
        </div>
      </div>

      <div id="card">
        <div id="card-heading">
          <h3>Plus</h3>
          <h1>
            $9<span>/month</span>
          </h1>
        </div>
        <hr />
        <div >
            <p> <CheckIcon /> <b>5 Users</b></p>
            <p><CheckIcon />5GB Storage</p>
            <p><CheckIcon />Unlimited Public Projects</p>
            <p><CheckIcon />Community Access</p>
            <p><CheckIcon />Unlimited Private Projects</p>
            <p><CheckIcon />Dedicated Phone Support</p>
            <p><CheckIcon />Free Subdomain</p>
            <div id="blurelements">
            <p><ClearIcon/>Monthly Satus Reports</p>
            </div>
            
            <Button id="button" variant="contained">Contained</Button>
        </div>
      </div>

      <div id="card">
        <div id="card-heading">
          <h3>Pro</h3>
          <h1>
            $49<span>/month</span>
          </h1>
        </div>
        <hr />
        <div >
            <p> <CheckIcon /> <b>Unlimited Users</b></p>
            <p><CheckIcon />5GB Storage</p>
            <p><CheckIcon />Unlimited Public Projects</p>
            <p><CheckIcon />Community Access</p>
            <p><ClearIcon/>Unlimited Private Projects</p>
            <p><ClearIcon/>Dedicated Phone Support</p>
            <p><ClearIcon/><b>Unlimited</b>Free Subdomain</p>
            <p><ClearIcon/>Monthly Satus Reports</p>
            <Button id="button" variant="contained">Contained</Button>
        </div>
      </div>
    </div>
  );
}
