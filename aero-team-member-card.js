import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class AeroTeamMemberCard extends DDDSuper(LitElement) {
    static get tag() {
        return "aero-team-member-card";
    }

    static get properties() {
        return {
            ...super.properties,
            position: { type: String },
            name: { type: String },
            image: { type: String },
        };
    }

    static get styles() {
        return [super.styles, css`
      :host {
        display: block;
        width: 100%;
        border-radius: 8px;
        font-family: var(--ddd-font-navigation);
        color-scheme: light dark;
      }
      .team-member-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border-radius: 8px;
        background-color: light-dark(var(--aero-white-smoke), var(--aero-charcoal));
        box-shadow: 0 4px 4px rgba(0,0,0,0.1);
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .team-member-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 4px rgba(0,0,0,0.25);
      }
      .team-member-photo {
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 8px 8px 0 0;
        object-fit: cover;
        object-position: center;
        display: block;
      }
      .team-member-info {
        text-align: center;
        margin-top: 24px;
        margin-bottom: 24px;
      }
      .team-member-position {
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        color: light-dark(var(--aero-black), var(--aero-white));
      }
      .team-member-name {
        font-size: var(--ddd-font-size-s);
        color: var(--aero-gray);
      }
    `];
    }

    render() {
        return html`
      <div class="team-member-card">
        <img class="team-member-photo" src="${this.image}" alt="Profile picture"/>
        <div class="team-member-info">
          <div class="team-member-position">${this.position}</div>
          <div class="team-member-name">${this.name}</div>
        </div>
      </div>
    `;
    }
}

globalThis.customElements.define(AeroTeamMemberCard.tag, AeroTeamMemberCard);