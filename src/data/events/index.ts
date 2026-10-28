import { firstHalfEvents } from "./first_half";
import { secondHalfEvents } from "./second_half";
import type { EventItem } from "./types";

export const allEvents: EventItem[] = [...secondHalfEvents, ...firstHalfEvents].sort(
  (a, b) => b.date.localeCompare(a.date)
);

export const getEventBySlug = (slug: string) =>
  allEvents.find((e) => e.slug === slug);

export const getRelatedEvents = (event: EventItem, limit = 3) =>
  allEvents
    .filter((e) => e.category === event.category && e.slug !== event.slug)
    .slice(0, limit);