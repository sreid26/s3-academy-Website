const res1 = await fetch('https://www.nwfraiders.com/sports/wbkb/2025-26/bios/white_jadah_6k5m?view=profile');
const res2 = await fetch('https://www.nwfraiders.com/sports/wbkb/2025-26/bios/diagne_khoudia_pjzc?view=profile');
const text1 = await res1.text();
const text2 = await res2.text();

const m1 = text1.match(/<img[^>]+src="([^">]+\.(jpg|png|webp))"/ig) || [];
const m2 = text2.match(/<img[^>]+src="([^">]+\.(jpg|png|webp))"/ig) || [];
console.log("Jadah:", m1);
console.log("Khoudia:", m2);
