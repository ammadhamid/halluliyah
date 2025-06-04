import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export const dynamic = 'force-static'; // Ensures static build

export default async function HtmlViewerPage() {
  const filePath = path.join(process.cwd(), 'public', 'index.html');
  const htmlContent = fs.readFileSync(filePath, 'utf-8');

  return (
    <div
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        padding: '20px',
        boxSizing: 'border-box',
        color: 'white',
        overflow: 'auto',
      }}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}