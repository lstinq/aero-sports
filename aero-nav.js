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
            _menuData: { type: Array, state: true },
        };
    }

    constructor() {
        super();
        this._openMenu = null;
        this._closeTimeout = null;
        this._menuData = [];
    }

    _setActive(page) {
        this.dispatchEvent(new CustomEvent("page-change", {
            detail: { page },
            bubbles: true,
            composed: true
        }));
    }

    connectedCallback() {
        super.connectedCallback();
        this._loadMenu();
    }

    async _loadMenu() {
        const res = await fetch('/api/menu');
        const data = await res.json();
        this._menuData = data;
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
        margin-top: var(--ddd-spacing-3);
        margin-bottom: var(--ddd-spacing-3);
    }
    .navigation-links {
        display: flex;
        flex: 1;
        justify-content: right;
        margin-right: var(--ddd-spacing-5);
        flex-wrap: wrap;
        gap: var(--ddd-spacing-3);
    }
    .navigation-link {
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        color: light-dark(var(--aero-black), var(--aero-white));
        cursor: pointer;
        background: none;
        border: none;
        transition: color 0.2s, background-color 0.2s;
    }
    .navigation-link:hover, .navigation-link.menu-open {
        color: var(--aero-gray);
        background-color: light-dark(var(--aero-white-smoke), var(--aero-charcoal));
        border-radius: var(--ddd-radius-sm);
    }
    .navigation-link.active {
        color: var(--aero-sky-reflection);
        border-radius: var(--ddd-radius-sm);
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
        border-radius: var(--ddd-radius-sm);
        padding: var(--ddd-spacing-2);
        box-shadow: 0 4px 8px rgba(0,0,0,0.25);
        z-index: 200;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-6px);
        transition: opacity 0.2s ease, transform 0.2s ease;
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
        padding: var(--ddd-spacing-2);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-xs);
        font-weight: var(--ddd-font-weight-bold);
        color: light-dark(var(--aero-black), var(--aero-white));
        background: none;
        border: none;
        border-radius: var(--ddd-radius-sm);
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
        padding: var(--ddd-spacing-2);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        border: none;
        border-radius: var(--ddd-radius-md);
        background: var(--aero-sky-reflection);
        cursor: pointer;
        margin-right: var(--ddd-spacing-3);
        transition: background-color 0.2s, color 0.2s;
    }
    .button-sign-in:hover {
        background-color: var(--aero-black);
        color: var(--aero-sky-reflection);
    }
    .button-register {
        padding: var(--ddd-spacing-2);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--aero-white);
        border: none;
        border-radius: var(--ddd-radius-md);
        background: var(--aero-molten-lava);
        cursor: pointer;
        transition: background-color 0.2s, color 0.2s;
        flex-wrap: wrap;
        margin-right: var(--ddd-spacing-5);
    }
    .button-register:hover {
        background-color: var(--aero-mahogany-red);
        color: var(--aero-black);
    }
    @media (max-width: 700px) {
        .navigation-inner {
            flex-direction: column;
            align-items: flex-start;
            padding: 0 var(--ddd-spacing-3);
        }
        .navigation-links {
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            margin-right: 0;
            gap: var(--ddd-spacing-1);
            padding-bottom: var(--ddd-spacing-3);
        }
        .nav-item {
            width: 100%;
        }
        .navigation-link {
            width: 100%;
            text-align: left;
            padding: var(--ddd-spacing-3) var(--ddd-spacing-2);
        }
        .navigation-auth {
            width: 100%;
            padding: 0 var(--ddd-spacing-3) var(--ddd-spacing-3) var(--ddd-spacing-3);
            box-sizing: border-box;
        }
        .button-register {
            margin-right: 0;
        }
        .dropdown {
            position: static;
            opacity: 1;
            pointer-events: all;
            transform: none;
            box-shadow: none;
            padding-left: var(--ddd-spacing-4);
            min-width: unset;
            width: 100%;
            border-radius: 0;
            display: none;
        }
        .dropdown.open {
            display: block;
        }
        .navigation-auth {
            width: 100%;
            padding-bottom: var(--ddd-spacing-3);
            gap: var(--ddd-spacing-2);
        }
        .button-sign-in, .button-register {
            flex: 1;
            margin-right: 0;
            text-align: center;
        }
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
                    <img src="/assets/aero-logo.png" alt="Aero logo" height="80"/>
                </div>
                <div class="navigation-links">
                    ${this._menuData.map(item => html`
                        <div class="nav-item"
                            @mouseenter="${() => this._onMenuEnter(item.id)}"
                            @mouseleave="${this._onMenuLeave}">
                            <button
                                class="navigation-link
                                ${this.activePage === item.id ? 'active' : ''}
                                ${this._openMenu === item.id ? 'menu-open' : ''}"
                                @click="${() => this._setActive(item.id)}">
                                ${item.title.toUpperCase()}
                                <span class="chevron ${this._openMenu === item.id ? 'open' : ''}">&#8964;</span>
                            </button>
                            <div class="dropdown ${this._openMenu === item.id ? 'open' : ''}">
                                ${(item.children ?? []).map(child => html`
                                    <button class="dropdown-item"
                                        @click="${() => this._handleDropdownClick(item.id)}">
                                        ${child.title}
                                    </button>
                                `)}
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