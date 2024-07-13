import Link from 'next/link';
import styles from './hero.module.css';

export default function Hero() {
    const backgroundImageUrl =
        'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    return (
        <div className="bg-cover bg-center bg-fixed" style={{
            backgroundImage: `url(${backgroundImageUrl})`,
        }}>
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                {/* Announcement Banner */}
                <div className="flex justify-center">
                    <a
                        className="group inline-block bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:ring-1 focus:ring-gray-600"
                        href="../figma.html"
                    >
                        <p className="me-2 inline-block text-white text-sm">
                            Preline UI Figma is live.
                        </p>
                        <span className="group-hover:bg-white/10 py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
                            <svg
                                className="flex-shrink-0 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 0 0-1.707-.707l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 11H17a1 1 0 0 0 0-2H4.414l5.293-5.293A1 1 0 0 0 10 3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </a>
                </div>
                {/* End Announcement Banner */}

                {/* Title */}
                <div className="max-w-3xl text-center mx-auto">
                    <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Now it&apos;s easier than ever to build products
                    </h1>
                </div>
                {/* End Title */}

                <div className="max-w-3xl text-center mx-auto">
                    <p className="text-lg text-gray-400">
                        Preline is a large open-source project, crafted with Tailwind CSS
                        framework by Hmlstream.
                    </p>
                </div>

                {/* Buttons */}
                <div className="text-center">
                    <a
                        href="#"
                        className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-6 dark:focus:ring-offset-gray-800"
                    >
                        Get started
                        <svg
                            className="flex-shrink-0 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 0 0-1.707-.707l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 11H17a1 1 0 0 0 0-2H4.414l5.293-5.293A1 1 0 0 0 10 3z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
                {/* End Buttons */}
            </div>
        </div>
    );
}
