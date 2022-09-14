import { writable } from 'svelte/store';

/* Session Settings */
export const writeDuration = writable(3 * 60);
export const pitchDuration = writable(5 * 60);
export const voteDuration = writable(3 * 60);
export const rankDuration = writable(1 * 60);
export const discussionDuration = writable(5 * 60);
export const breakpointDuration = writable(30);
export const numDiscussionRounds = writable(6);

/* Session State */
export const currentDiscussionRound = writable(0);
