import { qrcode } from "https://deno.land/x/qrcode/mod.ts";
async function input(
  question: string = "",
  stdin = Deno.stdin,
  stdout = Deno.stdout,
) {
  const buf = new Uint8Array(1024);

  // Write question to console
  await stdout.write(new TextEncoder().encode(question));

  // Read console's input into answer
  const n = <number> await stdin.read(buf);
  const answer = new TextDecoder().decode(buf.subarray(0, n));

  return answer.trim();
}

const text: string = await input("introdu textul: ");

const image = await qrcode(text);
const imgTag = `<img src="${image}" alt="qrcode" />`;
const encoder = new TextEncoder();
await Deno.writeFile("./qr.html", encoder.encode(imgTag));
