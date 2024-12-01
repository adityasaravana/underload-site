import Image from "next/image";
import Link from "next/link";
import { appStoreURL } from "../constants";

export function DownloadOnAppStoreBadge() {
    const size = 175;
    return (
        <div>
            <Link href={appStoreURL}>
                <Image
                    src="/images/appstorebadges/as-badge-black.svg"
                    alt="Download on the App Store"
                    width={size}
                    height={size}
                    className="block dark:hidden"
                />
                <Image
                    src="/images/appstorebadges/as-badge-white.svg"
                    alt="Download on the App Store"
                    width={size}
                    height={size}
                    className="hidden dark:block"
                />
            </Link>
        </div>
    )
}