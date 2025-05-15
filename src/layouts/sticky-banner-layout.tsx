import { StickyBanner } from "@/components/sticky-banner";

export function StickyBannerDemo() {
  return (
    <div className="relative flex w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-gradient-to-r from-orange-400 to-orange-500">
        <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm sm:text-base lg:text-lg text-white drop-shadow-md">
            <span className="hidden sm:inline">🎯</span> Registration closes
            Aug, 2025 | Event starts Sept, 2025{" "}
            <a
              href="#"
              className="font-medium transition duration-200 hover:underline whitespace-nowrap"
            >
              Register Now
            </a>
          </p>
        </div>
      </StickyBanner>
    </div>
  );
}
