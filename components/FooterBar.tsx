export default function FooterBar() {
  return (
    <footer className="fixed bottom-0 right-0 w-[calc(100%-16rem)] px-6 flex justify-between items-center z-40 bg-zinc-950 border-t border-zinc-800 py-2 hidden lg:flex">
      <div
        className="text-[9px] uppercase opacity-70 text-green-400"
        style={{ fontFamily: "var(--font-roboto-mono)" }}
      >
        SYSTEM_REF: NERV_OS_V2.0.4 | LATENCY: 12MS | COORD: 5.0703°N, 75.5138°W
      </div>
      <div className="flex gap-6">
        {["PRIVACY_PROTOCOL", "SECURITY_LOG", "V_ERR_LOG"].map((label) => (
          <span
            key={label}
            className="text-zinc-600 text-[9px] uppercase hover:text-green-300 transition-colors cursor-default"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
          >
            {label}
          </span>
        ))}
      </div>
    </footer>
  );
}
