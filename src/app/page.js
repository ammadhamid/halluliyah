// app/hull/page.js
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static'; // Optional: ensures static generation

export default async function Hull() {
  const filePath = path.join(process.cwd(), 'public', 'index.html');
  const htmlContent = fs.readFileSync(filePath, 'utf-8');

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}