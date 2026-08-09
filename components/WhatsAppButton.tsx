const WHATSAPP_NUMBER = "917356184469"; // +91 73561 84469, no + or leading 0
const WHATSAPP_MESSAGE = "Hi Krutosec, I'd like to talk about a penetration test.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.35)] transition-transform hover:scale-105"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- inline brand glyph, not a Next Image asset */}
      <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.7 4.61 1.902 6.478L4 29l7.73-1.865A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.818a9.77 9.77 0 0 1-4.98-1.363l-.357-.212-4.59 1.107 1.13-4.47-.233-.367A9.76 9.76 0 0 1 5.2 15c0-5.965 4.848-10.818 10.804-10.818S26.809 9.035 26.809 15 21.96 24.818 16.004 24.818Zm5.62-7.34c-.308-.154-1.82-.9-2.102-1.003-.282-.103-.487-.154-.692.154-.205.308-.795 1.003-.975 1.208-.18.205-.36.23-.667.077-.308-.154-1.3-.479-2.475-1.527-.915-.816-1.533-1.824-1.713-2.132-.18-.308-.02-.474.135-.627.138-.137.308-.36.462-.539.154-.18.205-.308.308-.513.103-.205.051-.385-.026-.539-.077-.154-.692-1.667-.949-2.284-.25-.6-.505-.519-.692-.529l-.59-.01c-.205 0-.539.077-.821.385-.282.308-1.077 1.052-1.077 2.566 0 1.514 1.102 2.977 1.256 3.182.154.205 2.17 3.312 5.257 4.643.735.317 1.308.507 1.755.649.737.234 1.408.201 1.938.122.591-.088 1.82-.744 2.077-1.463.256-.719.256-1.335.18-1.463-.077-.128-.282-.205-.59-.36Z" />
      </svg>
    </a>
  );
}
