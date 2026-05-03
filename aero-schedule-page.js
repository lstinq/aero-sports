import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./aero-event-card.js";

export class AeroSchedulePage extends DDDSuper(LitElement) {

  static get tag() {
    return "aero-schedule-page";
  }

  static get properties() {
    return {
      ...super.properties,
      activeFilter: { type: String },
      events: { type: Array },
    };
  }

  constructor() {
    super();
    this.activeFilter = "All";
    this.events = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadSchedule();
  }

  async _loadSchedule() {
    const res = await fetch("/api/schedule");
    const data = await res.json();
    this.events = data;
  }

  get filteredEvents() {
    if (this.activeFilter === "All") {
        return this.events;
    }
    return this.events.filter(e => e.type === this.activeFilter);
  }

  static get styles() {
    return [super.styles, css`
      .schedule-page {
        padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
      }
      .schedule-title {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--aero-molten-lava);
        text-transform: uppercase;
        margin-bottom: var(--ddd-spacing-6);
      }
      .schedule-sub-title {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: light-dark(var(--aero-black), var(--aero-white));
        margin-bottom: var(--ddd-spacing-3);
      }
      .schedule-body {
        font-size: var(--ddd-font-size-s);
        color: var(--aero-gray);
        margin-bottom: var(--ddd-spacing-6);
      }
      .filter-bar {
        display: flex;
        gap: var(--ddd-spacing-3);
        flex-wrap: wrap;
        margin-bottom: var(--ddd-spacing-6);
      }
      .filter-button {
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-xl);
        border: var(--ddd-border-size-sm) solid;
        border-color: light-dark(var(--aero-black), var(--aero-white));
        background: var(--aero-white);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--aero-black);
        cursor: pointer;
        transition: background 0.2s, color 0.2s;
      }
      .filter-button:hover {
        background: var(--aero-gray);
        color: var(--aero-black);
      }
      .filter-button.active {
        background: var(--aero-sky-reflection);
        color: light-dark(var(--aero-black), var(--aero-white));
      }
      .events-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: var(--ddd-spacing-5);
      }
    `];
  }

  render() {
    const filters = ["All", "Tournament", "Tryout", "Practice", "Other"];

    return html`
      <div class="schedule-page">
        <div class="schedule-title">Schedule</div>
        <div class="schedule-sub-title">Upcoming Events</div>
        <div class="schedule-body">Stay updated on our upcoming events!</div>
        <div class="filter-bar">
          ${filters.map(filter => html`
            <button
              class="filter-button ${this.activeFilter === filter ? 'active' : ''}"
              @click="${() => this.activeFilter = filter}">
              ${filter}
            </button>
          `)}
        </div>
        <div class="events-grid">
          ${this.filteredEvents.map(event => html`
            <aero-event-card
              title="${event.title}"
              date="${event.date}"
              location="${event.location}"
              type="${event.type}">
            </aero-event-card>
              `)}
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(AeroSchedulePage.tag, AeroSchedulePage);