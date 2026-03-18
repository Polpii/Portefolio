import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Allowed file paths (relative to private-docs/)
const ALLOWED_FILES = new Set([
  "Final_Master_Thesis_2022.pdf",
  "resume_2026.pdf",
  "HDEMG/11_05_24_HD-EMG AI PAPER (1).pdf",
  "HDEMG/HDEMG_10_2025.pdf",
  "Retouche/CHI2026_ReTouche.pdf",
  "RhythmKaraoke/CHI_2023.pdf",
  "RhythmKaraoke/CHI_2025.pdf",
  "RhythmKaraoke/Rhythm Karaoke_22july2025.pdf",
  "SecondSelf/SecondSelf.pdf",
  "Tangible/tangible_co_ideation_submission.pdf",
]);

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: pathSegments } = await params;
  const relativePath = pathSegments.join("/");

  // Strict allowlist — never allow path traversal
  if (!ALLOWED_FILES.has(relativePath)) {
    return new NextResponse("Not found", { status: 404 });
  }

  // Referer check — must come from our own domain
  const referer = request.headers.get("referer") ?? "";
  const host = request.headers.get("host") ?? "";
  let refererOk = false;
  try {
    const refHost = new URL(referer).host;
    refererOk =
      refHost === host ||
      refHost === "paulpeterarslan.com" ||
      refHost === "www.paulpeterarslan.com" ||
      refHost.endsWith(".vercel.app");
  } catch {
    refererOk = false;
  }

  if (!refererOk) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Serve the file
  const filePath = path.join(process.cwd(), "private-docs", relativePath);

  try {
    const fileBuffer = fs.readFileSync(filePath);
    const fileName = pathSegments[pathSegments.length - 1];
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${fileName}"`,
        "Cache-Control": "private, no-store",
        "X-Robots-Tag": "noindex",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
