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
            _openMenu: { type: String, state: true },
        };
    }

    constructor() {
        super();
        this._openMenu = null;
        this._closeTimeout = null;
    }

    _setActive(page) {
        this.dispatchEvent(new CustomEvent("page-change", {
            detail: { page },
            bubbles: true,
            composed: true
        }));
    }

    _onMenuEnter(page) {
        clearTimeout(this._closeTimeout);
        this._openMenu = page;
    }

    _onMenuLeave() {
        this._closeTimeout = setTimeout(() => {
            this._openMenu = null;
        }, 120);
    }

    _dropdownItems(page) {
        const items = {
            home: [
                { label: "About Us", action: "home" },
                { label: "Meet Our Team", action: "home" },
                { label: "See Upcoming Events", action: "home" },
            ],
            about: [
                { label: "Our Mission", action: "about" },
                { label: "Who We Serve", action: "about" },
                { label: "By the Numbers", action: "about" },
            ],
            team: [
                { label: "Board of Directors", action: "team" },
            ],
            schedule: [
                { label: "Upcoming Events", action: "schedule" },
            ],
        };
        return items[page] ?? [];
    }

    _handleDropdownClick(action) {
        this._setActive(action);
    }

    static get styles() {
        return [super.styles, css`
    .navigation-bar {
        background-color: light-dark(var(--aero-white), var(--aero-black));
        width: 100%;
        height: auto;
        flex-wrap: wrap;
        overflow-x: clip;
    }
    .navigation-inner {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .navigation-logo {
        display: flex;
        align-items: baseline;
        margin-top: 10px;
        margin-bottom: 10px;
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
        color: light-dark(var(--aero-black), var(--aero-white));
        cursor: pointer;
        background: none;
        border: none;
        transition: color 0.2s background-color 0.2s;
    }
    .navigation-link:hover, .navigation-link.menu-open {
        color: var(--aero-gray);
        background-color: light-dark(var(--aero-white-smoke), var(--aero-charcoal));
        border-radius: 8px;
    }
    .navigation-link.active {
        color: var(--aero-sky-reflection);
        border-radius: 8px;
    }
    .chevron {
        display: inline-block;
        position: relative;
        top: -6px;
        transition: transform 0.2s;
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-xs);
    }
    .chevron.open {
        transform: rotate(180deg) translateY(-12px);
    }
    .nav-item {
        position: relative;
    }
    .dropdown {
        position: absolute;
        top: calc(100% + 20px);
        left: 0;
        min-width: 200px;
        background-color: light-dark(var(--aero-white), var(--aero-black));
        border: none;
        border-radius: 12px;
        padding: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.25);
        z-index: 200;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-6px);
        transition: opacity 0.2 ease, transform 0.2 ease;
    }
    .dropdown.open {
        opacity: 1;
        pointer-events: all;
        transform: translateY(0);
        background-color: light-dark(var(--aero-white), var(--aero-black));
    }
    .dropdown-item {
        display: block;
        width: 100%;
        padding: 8px;
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-xs);
        font-weight: var(--ddd-font-weight-bold);
        color: light-dark(var(--aero-black), var(--aero-white));
        background: none;
        border: none;
        border-radius: 8px;
        text-align: left;
        cursor: pointer;
        transition: background-color 0.2s, color 0.2s;
        white-space: nowrap;
    }
    .dropdown-item:hover {
        color: var(--aero-gray);
        background-color: light-dark(var(--aero-white-smoke), var(--aero-charcoal));
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
        margin-right: 20px;
    }
    .button-register:hover {
        background-color: var(--aero-mahogany-red);
        color: var(--aero-black);
    }
    `];
    }

    _renderDropdownItem(item) {
        if (item.divider) {
            return html`<div class="dropdown-divider"></div>`;
        }
        if (item.group) {
            return html`<div class="dropdown-group-label">${item.group}</div>`;
        }
        return html`
            <button
                class="dropdown-item"
                @click="${() => this._handleDropdownClick(item.action)}">
                ${item.label}
            </button>
        `;
    }

    render() {
        return html`
        <nav class="navigation-bar">
            <div class="navigation-inner">
                <div class="navigation-logo">
                    <img src="./assets/aero-logo.png" alt="Aero logo" height="80"/>
                </div>
                <div class="navigation-links">
                ${["home", "about", "team", "schedule"].map(page => html`
                    <div class="nav-item"
                    @mouseenter="${() => this._onMenuEnter(page)}"
                    @mouseleave="${this._onMenuLeave}">
                    <button
                    class="navigation-link
                    ${this.activePage === page ? "active" : ""}
                    ${this._openMenu === page ? "menu-open" : ""}">
                    ${page.toUpperCase()}
                    <span class="chevron ${this._openMenu === page ? "open" : ""}">&#8964;</span>
                    </button>
                    <div class="dropdown ${this._openMenu === page ? "open" : ""}">
                    ${this._dropdownItems(page).map(item => this._renderDropdownItem(item))}
                    </div>
                </div>
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