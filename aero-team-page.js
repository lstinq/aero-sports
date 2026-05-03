import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./aero-team-member-card.js";

export class AeroTeamPage extends DDDSuper(LitElement) {

    static get tag() {
        return "aero-team-page";
    }

    static get properties() {
        return {
            ...super.properties,
            teamMembers: { type: Array },
        };
    }

    constructor() {
        super();
        this.teamMembers = [
            { position: "President", name: "Grizzly Bear", image: "./assets/aero-bear-1.jpg" },
            { position: "Vice President", name: "Black Bear", image: "./assets/aero-bear-2.jpg" },
            { position: "Treasurer", name: "Polar Bear", image: "./assets/aero-bear-3.jpg" },
            { position: "Secretary", name: "Honey Bear", image: "./assets/aero-bear-4.jpg" },
            { position: "Athletic Director", name: "Panda Bear", image: "./assets/aero-bear-5.jpg" },
            { position: "Coaching Coordinator", name: "Ash Bear", image: "./assets/aero-bear-6.jpg" },
            { position: "External Relations", name: "Brown Bear", image: "./assets/aero-bear-7.jpg" },
            { position: "Marketing Director", name: "Sun Bear", image: "./assets/aero-bear-8.jpg" },
        ];
    }

    static get styles() {
        return [super.styles, css`
      :host {
        display: block;
        overflow-x: hidden;
        font-family: var(--ddd-font-navigation);
        color-scheme: light dark;
      }
      .team-page {
        padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
        box-sizing: border-box;
        width: 100%;
      }
      .team-title {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--aero-molten-lava);
        text-transform: uppercase;
      }
      .team-sub-title {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: light-dark(var(--aero-black), var(--aero-white));
        margin-top: var(--ddd-spacing-6);
      }
      .team-grid {
        margin-top: var(--ddd-spacing-3);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--ddd-spacing-8);
      }
      @media (max-width: 700px) {
        .team-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `];
    }

    render() {
        return html`
      <div class="team-page">
        <div class="team-title">Meet Our Team</div>
        <div class="team-sub-title">Board of Directors</div>
        <div class="team-grid">
            ${this.teamMembers.map(member => html`
                <aero-team-member-card
                    .position="${member.position}"
                    .name="${member.name}"
                    .image="${member.image}">
                </aero-team-member-card>
            `)}
        </div>
      </div>
    `;
    }
}

globalThis.customElements.define(AeroTeamPage.tag, AeroTeamPage);