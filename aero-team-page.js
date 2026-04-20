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
            { position: "President", name: "First Last", image: "./assets/team-member-profile-pic.jpg" },
            { position: "Vice President", name: "First Last", image: "./assets/team-member-profile-pic.jpg" },
            { position: "Treasurer", name: "First Last", image: "./assets/team-member-profile-pic.jpg" },
            { position: "Secretary", name: "First Last", image: "./assets/team-member-profile-pic.jpg" },
            { position: "Athletic Director", name: "First Last", image: "./assets/team-member-profile-pic.jpg" },
            { position: "Coaching Coordinator", name: "First Last", image: "./assets/team-member-profile-pic.jpg" },
            { position: "External Relations", name: "First Last", image: "./assets/team-member-profile-pic.jpg" },
            { position: "Marketing Director", name: "First Last", image: "./assets/team-member-profile-pic.jpg" },
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
        color: light-dark(var(--aero-black) var(--aero-white));
        margin-top: 24px;
      }
      .team-grid {
        margin-top: 12px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
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