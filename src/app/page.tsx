import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="py-8 flex flex-col items-center space-y-24">
      <div className="flex flex-col items-center space-y-8">
        <div className="text-2xl font-bold text-center text-furarico-label-secondary">
          新感覚のお散歩体験
        </div>
        <div className="text-7xl sm:text-8xl md:text-9xl font-bold text-center">
          ふらりこ
        </div>
      </div>

      <div>
        <Image src="/icon.png" alt="ふらりこ" width={256} height={256} />
      </div>

      <div>
        <Link href="https://apps.apple.com/app/id6448612672">
          <Image
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            width={180}
            height={60}
          />
        </Link>
      </div>
    </div>
  );
}
