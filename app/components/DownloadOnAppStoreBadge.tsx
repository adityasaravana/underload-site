import Image from "next/image";
import Link from "next/link";
import { appStoreURL } from "../constants";

export function DownloadOnAppStoreBadge() {
    return (
        <div>
            <Link href={appStoreURL}>
                <Image 
                    src="/images/appstorebadges/as-badge-black.svg"
                alt="Download on the App Store"
                width={150}
                height={150}
                    className="block dark:hidden"
                />
                <Image 
                    src="/images/appstorebadges/as-badge-white.svg"
                alt="Download on the App Store"
                width={150}
                height={150}
                    className="hidden dark:block"
                />
            </Link>
        </div>
    )
}