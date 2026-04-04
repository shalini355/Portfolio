import fs from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "app", "components", "Shalini_Yadav_Final_Resume.pdf");

  try {
    const fileBuffer = await fs.readFile(filePath);
    return new Response(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Shalini_Yadav_Resume.pdf"',
      },
    });
  } catch (error) {
    return new Response("Resume not found", { status: 404 });
  }
}
