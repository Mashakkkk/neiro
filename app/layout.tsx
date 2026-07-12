Exit code: 0
Wall time: 1.5 seconds
Output:
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "РќРµР№СЂРѕ вЂ” РР РґР»СЏ СЏСЃРЅРѕР№ СЂР°Р±РѕС‚С‹",
  description: "РСЃРєСѓСЃСЃС‚РІРµРЅРЅС‹Р№ РёРЅС‚РµР»Р»РµРєС‚, РєРѕС‚РѕСЂС‹Р№ РїРѕРјРѕРіР°РµС‚ СЂР°Р·РІРёРІР°С‚СЊ РёРґРµРё, СЃРѕР·РґР°РІР°С‚СЊ Р±С‹СЃС‚СЂРµРµ Рё РїСЂРёРЅРёРјР°С‚СЊ СѓРІРµСЂРµРЅРЅС‹Рµ СЂРµС€РµРЅРёСЏ.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}

