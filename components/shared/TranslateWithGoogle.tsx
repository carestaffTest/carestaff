"use client";

import Image from "next/image";
import { useEffect } from "react";

const TranslateWithGoogle: React.FC = () => {
  const googleTranslateElementInit = () => {
    (window as any).googleTranslateElementInit = new (
      window as any
    ).google.translate.TranslateElement(
      {
        pageLanguage: "en",
        layout: (window as any).google.translate.TranslateElement.InlineLayout
          .VERTICAL,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    (window as any).googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div className="p-regular-12 md:p-regular-16">
      <div className="fixed right-0 bottom-[-2%] flex items-start justify-center gap-2 bg-gradient-to-r from-orange-500 to-[#53D1D1] p-3 pb-1 z-50">
        <Image
          src="/assets/icons/language.svg"
          alt="menu"
          width={24}
          height={24}
          className="mt-[2px]"
        />
        <div id="google_translate_element" />
      </div>
    </div>
  );
};

export default TranslateWithGoogle;
