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
    };
  }

  constructor() {
    super();
    this.activeFilter = "All";
    this.events = [
      { title: "Spring Tournament", date: "2026-05-01", location: "Bearhaven Stadium", type: "Tournament" },
      { title: "Summer Tryouts", date: "2026-05-15", location: "Clawmark Field", type: "Tryout" },
      { title: "Summer Practice", date: "2026-06-01", location: "Cub Training Grounds", type: "Practice" },
      { title: "Summer Practice", date: "2026-06-08", location: "Cub Training Grounds", type: "Practice" },
      { title: "Summer Practice", date: "2026-06-15", location: "Cub Training Grounds", type: "Practice" },
      { title: "Summer Practice", date: "2026-06-22", location: "Cub Training Grounds", type: "Practice" },
      { title: "Team Bonding Day", date: "2026-07-15", location: "Pine Ridge Nature Reserve", type: "Other" },
      { title: "Fall Tryouts", date: "2026-08-10", location: "Clawmark Field", type: "Tryout" },
      { title: "Preseason Practice", date: "2026-08-17", location: "Cub Training Grounds", type: "Practice" },
      { title: "Preseason Practice", date: "2026-08-24", location: "Cub Training Grounds", type: "Practice" },
      { title: "Preseason Practice", date: "2026-08-31", location: "Cub Training Grounds", type: "Practice" },
      { title: "Preseason Practice", date: "2026-09-07", location: "Cub Training Grounds", type: "Practice" },
      { title: "Fall Tournament", date: "2026-09-15", location: "Bearhaven Stadium", type: "Tournament" },
      { title: "Fall Practice", date: "2026-09-29", location: "Cub Training Grounds", type: "Practice" },
      { title: "Fall Practice", date: "2026-10-07", location: "Cub Training Grounds", type: "Practice" },
      { title: "Regionals", date: "2026-10-15", location: "Bearhaven Stadium", type: "Tournament" },
      { title: "Fall Practice", date: "2026-10-22", location: "Cub Training Grounds", type: "Practice" },
      { title: "Fall Practice", date: "2026-10-29", location: "Cub Training Grounds", type: "Practice" },
      { title: "Championship Finals", date: "2026-11-10", location: "Bearhaven Stadium", type: "Tournament" },
      { title: "End of Season Banquet", date: "2026-11-15", location: "Golden Den Ballroom", type: "Other" },
    ];
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
        margin-bottom: 24px;
      }
      .schedule-sub-title {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: light-dark(var(--aero-black), var(--aero-white));
        margin-bottom: 12px;
      }
      .schedule-body {
        font-size: var(--ddd-font-size-s);
        color: var(--aero-gray);
        margin-bottom: 24px;
      }
      .filter-bar {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 24px;
      }
      .filter-button {
        padding: 8px 16px;
        border-radius: 20px;
        border: 2px solid;
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
        color: light-dark(var(--aero-black) var(--aero-white));
      }
      .events-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
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