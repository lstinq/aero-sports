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
        height: auto;
        box-sizing: border-box;
        background-color: var(--aero-deep-space-blue);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--ddd-spacing-5);
        padding: var(--ddd-spacing-5) var(--ddd-spacing-5) var(--ddd-spacing-15) var(--ddd-spacing-5);
        align-items: stretch;
        justify-content: center;
        flex-wrap: wrap;
      }
      @media (max-width: 700px) {
        .cards-section {
          grid-template-columns: 1fr;
          gap: var(--ddd-spacing-13);
          padding: var(--ddd-spacing-6) var(--ddd-spacing-6) var(--ddd-spacing-12) var(--ddd-spacing-6);
        }
        .cards-section aero-info-card {
          width: 100%;
        }
      }
    `;
  }

  render() {
    return html`
      <aero-hero></aero-hero>

      <section class="cards-section">
        ${[
          { title: "About Us",
            body: "Learn more about our mission to raise the next generation of bear athletes through teamwork, dedication, and mighty grizzly spirit.",
            label: "Learn More",
            action: "about" },
          { title: "Meet Our Team",
            body: "Get to know the wise bears behind the board of directors who made this program possible by leading and supporting every cub toward greatness.",
            label: "View Team",
            action: "team" },
          { title: "See Upcoming Events",
            body: "Stay up to date on upcoming events such as  tournaments, tryouts, training sessions, and seasonal bear gatherings hosted by Aero all across the forest.",
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