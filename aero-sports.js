/**
 * Copyright 2026 Mandy Liu
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./aero-nav.js";
import "./aero-hero.js";
import "./aero-info-card.js";
import "./aero-slideshow.js";
import "./aero-stats-bar.js";
import "./aero-footer.js";
import "./aero-home-page.js";
import "./aero-team-page.js";
import "./aero-about-page.js";
import "./aero-schedule-page.js";

/**
 * `aero-sports`
 * 
 * @demo index.html
 * @element aero-sports
 */
export class AeroSports extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "aero-sports";
  }

  constructor() {
    super();
    this.menuOpen = false;
    this.activePage = "home";
    this.slideshowImages = [
      "./assets/slideshow-1.jpg",
      "./assets/slideshow-2.jpg",
      "./assets/slideshow-3.jpg",
      "./assets/slideshow-4.jpg",
      "./assets/slideshow-5.jpg",
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('page-change', (e) => {
      this._setActive(e.detail.page);
    });
  }

  static get properties() {
    return {
      ...super.properties,
      menuOpen: { type: Boolean, reflect: true },
      activePage: { type: String },
    };
  }

  _setActive(page) {
    this.activePage = page;
    this.menuOpen = false;
  }

  _onCardAction(action) {
    this.dispatchEvent(new CustomEvent("card-action", {
      detail: { action },
      bubbles: true,
      composed: true
    }));
    const pageMap = {
      home: "home",
      about: "about",
      team: "team",
      schedule: "schedule",
    };
    if (pageMap[action]) {
      this._setActive(pageMap[action]);
    }
  }

  _renderHomePage() {
    return html`
    <aero-home-page></aero-home-page>
    `;
  }

  _renderAboutPage() {
    return html`
      <aero-about-page></aero-about-page>
    `;
  }

  _renderTeamPage() {
    return html`
      <aero-team-page></aero-team-page>
    `;
  }

  _renderSchedulePage() {
    return html`
    <aero-schedule-page></aero-schedule-page>
    `;
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        overflow-x: hidden;
        font-family: var(--ddd-font-navigation);
        color-scheme: light dark;
        --aero-molten-lava: #7A0000;
        --aero-mahogany-red: #BC101C;
        --aero-white: #FFFFFF;
        --aero-deep-space-blue: #00283D;
        --aero-sky-reflection: #7FACC7;
        --aero-black: #000000;
        --aero-white-smoke: #F5F5F5;
        --aero-gray: #808080;
      }
      `];
  }

  // Lit render the HTML
  render() {
    return html`
      <!-- Navigation -->
      <aero-nav .activePage="${this.activePage}" @page-change="${e => this._setActive(e.detail.page)}"></aero-nav>

      <!-- Home Page Content -->
      ${this.activePage === "home" ? this._renderHomePage() : ""}

      <!-- About Page Contents -->
      ${this.activePage === "about" ? this._renderAboutPage() : ""}

      <!-- Team Page Contents -->
      ${this.activePage === "team" ? this._renderTeamPage() : ""}

      <!-- Schedule Page Contents -->
      ${this.activePage === "schedule" ? this._renderSchedulePage() : ""}

      <!-- Footer -->
      <aero-footer></aero-footer>
    `;
  }
}

globalThis.customElements.define(AeroSports.tag, AeroSports);