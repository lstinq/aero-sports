import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class AeroNav extends DDDSuper(LitElement) {
    static get tag() {
        return "aero-nav";
    }

    static get properties() {
        return {
            ...super.properties,
            activePage: { type: String },
        };
    }

    _setActive(page) {
        this.dispatchEvent(new CustomEvent("page-change", {
            detail: { page },
            bubbles: true,
            composed: true
        }));
    }

    static get styles() {
        return [super.styles, css`
    :host {
        display: block;
        overflow-x: hidden;
        font-family: var(--ddd-font-navigation);
    }
    .navigation-bar {
        position: sticky;
        top: 0;
        z-index: 100;
        background-color: light-dark(var(--aero-white) var(--aero-black));
        width: 100%;
        flex-wrap: wrap;
    }
    .navigation-inner {
        width: 100%;
        height: 100px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .navigation-logo {
        display: flex;
        align-items: baseline;
    }
    .navigation-links {
        display: flex;
        flex: 1;
        justify-content: right;
        margin-right: 20px;
        flex-wrap: wrap;
        gap: 10px;
    }
    .navigation-link {
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        color: light-dark(var(--aero-black) var(--aero-white));
        cursor: pointer;
        background: none;
        border: none;
        transition: color 0.2s;
    }
    .navigation-link:hover {
        color: var(--aero-sky-reflection);
        box-shadow: 0 4px 4px rgba(0,0,0,0.1);
        border-radius: 8px;
        }
    .navigation-link.active {
        color: var(--aero-sky-reflection);
        background-color: var(--aero-white-smoke);
        box-shadow: 0 4px 4px rgba(0,0,0,0.1);
        border-radius: 8px;
    }
    .navigation-auth {
        display: flex;
    }
    .button-sign-in {
        padding: 8px;
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        border: none;
        border-radius: 12px;
        background: var(--aero-sky-reflection);
        cursor: pointer;
        margin-right: 12px;
        transition: background-color 0.2s, color 0.2s;
    }
    .button-sign-in:hover {
        background-color: var(--aero-black);
        color: var(--aero-sky-reflection);
    }
    .button-register {
        padding: 8px;
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--aero-white);
        border: none;
        border-radius: 12px;
        background: var(--aero-molten-lava);
        cursor: pointer;
        transition: background-color 0.2s, color 0.2s;
        flex-wrap: wrap;
    }
    .button-register:hover {
        background-color: var(--aero-mahogany-red);
        color: var(--aero-black);
    }
    `];
    }

    render() {
        return html`
      <nav class="navigation-bar">
        <div class="navigation-inner">
          <div class="navigation-logo">
            <img src="./assets/aero-logo.png" alt="Aero logo" height="80" />
          </div>

          <div class="navigation-links">
            ${["home", "about", "team", "schedule"].map(page => html`
              <button
                class="navigation-link ${this.activePage === page ? "active" : ""}"
                @click="${() => this._setActive(page)}">
                ${page.toUpperCase()}
              </button>
            `)}
          </div>

          <div class="navigation-auth">
            <button class="button-sign-in" @click=${() => window.open('https://hax.psu.edu', '_blank')}>SIGN IN</button>
            <button class="button-register" @click=${() => window.open('https://hax.psu.edu', '_blank')}>REGISTER</button>
          </div>
        </div>
      </nav>
    `;
    }
}

globalThis.customElements.define(AeroNav.tag, AeroNav);