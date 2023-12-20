import path from "node:path";

import * as cheerio from "cheerio";
import fs from "fs";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  const defaultPicPath = path.join(
    process.cwd(),
    "public",
    "images",
    "defaultPic.png",
  );
  const defaultPicBuffer = fs.readFileSync(defaultPicPath);
  const searchParams = request.nextUrl.searchParams;
  const word = searchParams.get("word");

  if (!word) {
    return new Response(defaultPicBuffer, {
      status: 200,
      headers: { "Content-Type": "image/png" },
    });
  }

  const localPicPath = path.join(
    process.cwd(),
    "public",
    "images",
    `${word}.png`,
  );

  if (fs.existsSync(localPicPath)) {
    const localPicBuffer = fs.readFileSync(localPicPath);
    return new Response(localPicBuffer, {
      status: 200,
      headers: { "Content-Type": "image/png" },
    });
  }

  const htmlResponse = await fetch(
    `https://www.flaticon.com/search?word=${word}&type=sticker`,
  );
  const html = await htmlResponse.text();
  const $ = cheerio.load(html);
  const picUrl = $(".icon--item img").eq(0).attr("data-src");

  if (!picUrl) {
    return new Response(defaultPicBuffer, {
      status: 200,
      headers: { "Content-Type": "image/png" },
    });
  }

  const picResponse = await fetch(picUrl);
  const picBuffer = await picResponse.arrayBuffer();
  const buffer = Buffer.from(picBuffer);
  fs.writeFileSync(localPicPath, buffer);

  return new Response(picBuffer, {
    status: 200,
    headers: { "Content-Type": "image/png" },
  });
}
