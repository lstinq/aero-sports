import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class AeroEventCard extends DDDSuper(LitElement) {

    static get tag() {
        return "aero-event-card";
    }

    static get properties() {
        return {
            ...super.properties,
            title: { type: String },
            date: { type: String },
            location: { type: String },
            type: { type: String },
        };
    }

    constructor() {
        super();
        this.title = "";
        this.date = "";
        this.location = "";
        this.type = "";
    }

    _typeColor(type) {
        const map = {
            "Tournament": "var(--aero-molten-lava)",
            "Tryout": "var(--aero-deep-space-blue)",
            "Practice": "var(--aero-sky-reflection)",
            "Other": "var(--aero-mahogany-red)",
        };
        return map[type];
    }

    static get styles() {
        return [super.styles, css`
      :host {
        display: block;
      }
      .event-card {
        background: light-dark(var(--aero-white), var(--aero-charcoal));
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 4px 4px rgba(0,0,0,0.1);
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .event-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 4px rgba(0,0,0,0.25);
      }
      .event-type-tag {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: var(--ddd-font-size-xs);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--aero-white);
        align-self: flex-start;
      }
      .event-title {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: light-dark(var(--aero-black), var(--aero-white));
      }
      .event-detail {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: var(--ddd-font-size-s);
        color: var(--aero-gray);
      }
      .event-detail span {
        font-size: var(--ddd-font-size-s);
      }
    `];
    }

    render() {
        const [year, month, day] = this.date.split('-').map(Number);
        const formattedDate = new Date(year, month - 1, day).toLocaleDateString('en-US',
            {
                weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
            });

        return html`
      <div class="event-card">
        <div class="event-type-tag" style="background-color: ${this._typeColor(this.type)}">
          ${this.type}
        </div>
        <div class="event-title">${this.title}</div>
        <div class="event-detail"><span>📅</span>${formattedDate}</div>
        <div class="event-detail"><span>📍</span>${this.location}</div>
      </div>
    `;
    }
}

globalThis.customElements.define(AeroEventCard.tag, AeroEventCard);