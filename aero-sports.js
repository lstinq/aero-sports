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

  _renderAboutPage() {
    return html`
      <div class="about-page">
        <div class="about-left">
          <div class="about-title">About Aero</div>
          <div class="about-sub-title">Our Mission</div>
          <p class="about-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui augue, volutpat quis venenatis ac, pellentesque nec velit. Donec at nunc a enim efficitur efficitur. Curabitur ut ligula a metus efficitur convallis.</p>
          <div class="about-sub-title">Who We Serve</div>
          <div class="who-we-serve-cards">
            ${[
        { label: "Youth Athletes", image: "./assets/youth-athletes.jpg" },
        { label: "Parents", image: "./assets/parents.jpg" },
        { label: "Coaches", image: "./assets/coaches.jpg" },
      ].map(item => html`
              <div class="who-we-serve-card">
                <img src="${item.image}" alt="${item.label}" />
                <div class="who-we-serve-card-label">${item.label}</div>
              </div>
            `)}
          </div>
        </div>

        <div class="about-right">
          <aero-slideshow .images="${this.slideshowImages}"></aero-slideshow>
        </div>
      </div>

      <div class="about-sub-title" style="padding: 0 var(--ddd-spacing-5) 0;">By the Numbers</div>
        <aero-stats-bar></aero-stats-bar>
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
      }
      /* Cards Section */
      .cards-section {
        width: 100%;
        height: 325px;
        box-sizing: border-box;
        background-color: var(--aero-deep-space-blue);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        padding: 30px;
        align-items: center;
        flex-wrap: wrap;
      }
      /* About Page */
      .about-page {
        padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
        display: flex;
        gap: 40px;
        align-items: flex-start;
        box-sizing: border-box;
        flex-wrap: wrap;
      }
      .about-left {
        flex: 1;
        min-width: 0px;
        max-width: 50%;
      }
      .about-title {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--aero-molten-lava);
        text-transform: uppercase;
      }
      .about-sub-title {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--aero-black);
        margin-top: 24px;
      }
      .about-body {
        font-size: var(--ddd-font-size-s);
        color: var(--aero-black);
        margin-top: 12px;
      }
      .who-we-serve-cards {
        margin-top: 12px;
        display: flex;
        gap: 20px;
      }
      .who-we-serve-card {
        position: relative;
        flex: 1;
        height: 200px;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;
      }
      .who-we-serve-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      .who-we-serve-card::before {
        content: "";
        position: absolute;
        inset: 0;
        background: var(--aero-deep-space-blue);
        opacity: 0.5;
      }
      .who-we-serve-card-label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--aero-white);
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        z-index: 1;
        text-align: center;
      }
      /* Slideshow container */
      .about-right {
        flex: 1;
        min-width: 0px;
        max-width: 50%;
        display: flex;
        align-self: stretch;
        align-items: center;
        justify-content: center;
        background-color: #F5F5F5;
        border-radius: 8px;
        position: relative;
      }
      aero-slideshow {
        width: 100%;
        height: 100%;
        display: block;
      }
      `];
  }

  // Lit render the HTML
  render() {
    return html`
      <!-- Navigation -->
      <aero-nav
      .activePage="${this.activePage}"
      @page-change="${e => this._setActive(e.detail.page)}">
      </aero-nav>

      <!-- Home Page Content -->
      ${this.activePage === "home" ? html`
        <aero-hero></aero-hero>

        <section class="cards-section">
          ${[
          { title: "About Us", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui augue, volutpat quis venenatis ac, pellentesque nec velit.", label: "Learn More", action: "about" },
          { title: "Meet Our Team", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui augue, volutpat quis venenatis ac, pellentesque nec velit.", label: "View Team", action: "team" },
          { title: "See Upcoming Events", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui augue, volutpat quis venenatis ac, pellentesque nec velit.", label: "View Schedule", action: "schedule" },
        ].map(card => html`
          <aero-info-card
          title="${card.title}"
          body="${card.body}"
          label="${card.label}"
          action="${card.action}"
          @card-action="${e => this._onCardAction(e.detail.action)}">
          </aero-info-card>
        `)}
        </section>
        ` : ""}

      <!-- About Page Contents -->
        ${this.activePage === "about" ? this._renderAboutPage() : ""}

      <!-- Footer -->
      <aero-footer></aero-footer>
    `;
  }
}

globalThis.customElements.define(AeroSports.tag, AeroSports);