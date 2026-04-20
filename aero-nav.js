import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./aero-nav.js";
import "./aero-hero.js";
import "./aero-info-card.js";
import "./aero-slideshow.js";
import "./aero-stats-bar.js";
import "./aero-footer.js";

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
        color-scheme: light dark;
        --aero-molten-lava: #7A0000;
        --aero-white: #FFFFFF;
        --aero-deep-space-blue: #00283D;
        --aero-sky-reflection: #7FACC7;
        --aero-black: #000000;
        --aero-mahogany-red: #BC101C;
    }
    .navigation-bar {
        position: sticky;
        top: 0;
        z-index: 100;
        background-color: var(--aero-white);
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
    }
    .navigation-link {
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--aero-black);
        cursor: pointer;
        background: none;
        border: none;
        transition: color 0.2s;
    }
    .navigation-link:hover {
        color: var(--aero-deep-space-blue);
    }
    .navigation-link.active {
        color: var(--aero-sky-reflection);
        background-color: #F5F5F5;
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
        border: 2px solid var(--aero-black);
        border-radius: 8px;
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
        border: 2px solid var(--aero-black);
        border-radius: 8px;
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
            <button class="button-sign-in">SIGN IN</button>
            <button class="button-register">REGISTER</button>
          </div>
        </div>
      </nav>
    `;
    }
}

globalThis.customElements.define(AeroNav.tag, AeroNav);