import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Нейро — ИИ для ясной работы",
  description: "Искусственный интеллект, который помогает развивать идеи, создавать быстрее и принимать уверенные решения.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}

