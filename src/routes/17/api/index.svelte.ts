import { SvelteSet } from "svelte/reactivity";
import conclusionImage from "../assets/images/objects/conclusion.png";
import introImage from "../assets/images/objects/intro.png";
import nesImage from "../assets/images/objects/ness_nothing.jpg";
import violetImage from "../assets/images/objects/violets_flower.jpg";
import conclusionVideo from "../assets/videos/conclusion.mp4";
import introVideo from "../assets/videos/intro.mp4";
import nesVideo from "../assets/videos/nes.mp4";
import violetVideo from "../assets/videos/violet.mp4";

export type ZackObject = {
	name: string;
	object: string;
	image?: string;
	video?: string;
};

export const allObjects: ZackObject[] = [
	{ name: "intro", object: "", image: introImage, video: introVideo },
	{ name: "violet", object: "flower", image: violetImage, video: violetVideo },
	{ name: "kenny", object: "object" },
	{ name: "lucas", object: "object" },
	{ name: "nes", object: "nothing", image: nesImage, video: nesVideo },
	{ name: "richard", object: "object" },
	{ name: "fern", object: "object" },
	{ name: "eli", object: "object" },
	{ name: "whimsy", object: "object" },
	{ name: "conclusion", object: "", image: conclusionImage, video: conclusionVideo },
];

let revealedObjects: SvelteSet<ZackObject> = $state(
	new SvelteSet(allObjects.filter((object, index) => index === 0 || localStorage.getItem(object.name))),
);

export function reveal(object: ZackObject): void {
	revealedObjects.add(object);
	localStorage.setItem(object.name, "true");
}

export function isRevealed(object: ZackObject): boolean {
	return revealedObjects.has(object);
}

export function reset(): void {
	allObjects.forEach(object => localStorage.removeItem(object.name));
	revealedObjects.clear();
	revealedObjects.add(allObjects[0]);
}
