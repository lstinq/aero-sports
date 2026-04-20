import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class AeroHomePage extends DDDSuper(LitElement) {

  static get tag() {
    return "aero-home-page";
  }

  _navigateTo(page) {
    this.dispatchEvent(new CustomEvent('page-change', {
        detail: { page },
        bubbles: true,
        composed: true,
    }));
  }

  static get styles() {
    return css`
      .cards-section {
        width: 100%;
        height: 350px;
        box-sizing: border-box;
        background-color: var(--aero-deep-space-blue);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        padding: 20px;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        overflow: hidden;
      }
    `;
  }

  render() {
    return html`
      <aero-hero></aero-hero>

      <section class="cards-section">
        ${[
          { title: "About Us",
            body: "Learn more about our mission to train the next generation of athletes through teamwork, dedication, and competitive excellence.",
            label: "Learn More",
            action: "about" },
          { title: "Meet Our Team",
            body: "Get to know our board of directors who made this program possible by leading and supporting our organization.",
            label: "View Team",
            action: "team" },
          { title: "See Upcoming Events",
            body: "Stay up to date on tournaments, tryouts, practices, and other events happening throughout the season.",
            label: "View Schedule",
            action: "schedule" },
        ].map(card => html`
      <aero-info-card
        title="${card.title}"
        body="${card.body}"
        label="${card.label}"
        action="${card.action}"
        @card-action=${(e) => this._navigateTo(e.detail.action)}>
      </aero-info-card>
        `)}
      </section>
    `;
  }
}

globalThis.customElements.define(AeroHomePage.tag, AeroHomePage);