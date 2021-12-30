import "./App.css";
import Button from "@mui/material/Button";

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
        <div>
          <div>
            <p>✔ Single User</p>
            <p>✔ 5GB Storage</p>
            <p>✔ Unlimited Public Projects</p>
            <p>✔ Community Access</p>
          </div>
          <div id="blurelements">
            <p>✖ Unlimited Private Projects</p>
            <p>✖ Dedicated Phone Support</p>
            <p>✖ Free Subdomain</p>
            <p>✖ Monthly Satus Reports</p>
          </div> 

          <Button id="button" variant="contained">
            Contained
          </Button>
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
        <div>
          <p>
            <b>✔ 5 Users</b>
          </p>
          <p>✔ 5GB Storage</p>
          <p>✔ Unlimited Public Projects</p>
          <p>✔ Community Access</p>
          <p>✔ Unlimited Private Projects</p>
          <p>✔ Dedicated Phone Support</p>
          <p>✔ Free Subdomain</p>
          <div id="blurelements">
            <p>✖ Monthly Satus Reports</p>
          </div>

          <Button id="button" variant="contained">
            Contained
          </Button>
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
        <div>
          <p>
            ✔ <b>Unlimited Users</b>
          </p>
          <p>✔ 5GB Storage</p>
          <p>✔ Unlimited Public Projects</p>
          <p>✔ Community Access</p>
          <p>✔ Unlimited Private Projects</p>
          <p>✔ Dedicated Phone Support</p>
          <p> 
            <b>✔ Unlimited</b>Free Subdomain
          </p>
          <p>✔ Monthly Satus Reports</p>
          <Button id="button" variant="contained">
            Contained
          </Button>
        </div>
      </div>
    </div>
  );
}
