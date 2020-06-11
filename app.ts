import { qrcode } from "https://deno.land/x/qrcode/mod.ts";
import { input } from "./input.ts";

const text: string = await input("introdu textul: ");

if (text.length === 0) {
  console.log("introdu textul");
} else {
  const image = await qrcode(text);
  const imgTag = `<img src="${image}" alt="qrcode" />`;
  const encoder = new TextEncoder();
  await Deno.writeFile("./qr.html", encoder.encode(imgTag));
}
