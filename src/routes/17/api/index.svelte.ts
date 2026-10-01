import { SvelteSet } from "svelte/reactivity";
import conclusionImage from "../assets/images/objects/conclusion.png";
import eliImage from "../assets/images/objects/elis_clip.png";
import fernImage from "../assets/images/objects/ferns_fishes.jpg";
import introImage from "../assets/images/objects/intro.png";
import kennyImage from "../assets/images/objects/kennys_album.jpg";
import lucasImage from "../assets/images/objects/lucass_books.png";
import nesImage from "../assets/images/objects/ness_nothing.jpg";
import richardImage from "../assets/images/objects/richards_thingy.jpg";
import violetImage from "../assets/images/objects/violets_flower.jpg";
import conclusionVideo from "../assets/videos/conclusion.mp4";
import eliVideo from "../assets/videos/eli.mp4";
import fernVideo from "../assets/videos/fern.mp4";
import introVideo from "../assets/videos/intro.mp4";
import kennyVideo from "../assets/videos/kenny.mp4";
import lucasVideo from "../assets/videos/lucas.mp4";
import nesVideo from "../assets/videos/nes.mp4";
import richardVideo from "../assets/videos/richard.mp4";
import violetVideo from "../assets/videos/violet.mp4";

export type ZackObject = {
	name: string;
	object: string;
	image: string;
	video: string;
};

export const allObjects: ZackObject[] = [
	{ name: "intro", object: "", image: introImage, video: introVideo },
	{ name: "violet", object: "flower", image: violetImage, video: violetVideo },
	{ name: "kenny", object: "album", image: kennyImage, video: kennyVideo },
	{ name: "lucas", object: "books", image: lucasImage, video: lucasVideo },
	{ name: "nes", object: "nothing", image: nesImage, video: nesVideo },
	{ name: "richard", object: "photo & chiikawa", image: richardImage, video: richardVideo },
	{ name: "eli", object: "clip", image: eliImage, video: eliVideo },
	{ name: "fern", object: "fishes", image: fernImage, video: fernVideo },
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
