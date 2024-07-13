import Link from 'next/link'
import styles from './services.module.css';

export default function Services() {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Customer stories</h2>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">See how game-changing companies are making the most of every engagement with Preline.</p>
            </div>
            {/* End Title */}

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card */}
                <a href="#" className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10">
                    <div className="aspect-w-16 aspect-h-10">
                        <img
                            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                            alt="Image Description"
                            className="w-full object-cover rounded-xl"
                        />
                    </div>
                    <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">Unity’s inside sales team drives 80% of its revenue with Preline.</h3>
                    <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                        Learn more
                        <svg className="flex-shrink-0 h-4 w-4 transition ease-in-out group-hover:translate-x-1"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </p>
                </a>
                {/* End Card */}

                {/* Card */}
                <a href="#" className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10">
                    <div className="aspect-w-16 aspect-h-10">
                        <img
                            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                            alt="Image Description"
                            className="w-full object-cover rounded-xl"
                        />
                    </div>
                    <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">Unity’s inside sales team drives 80% of its revenue with Preline.</h3>
                    <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                        Learn more
                        <svg className="flex-shrink-0 h-4 w-4 transition ease-in-out group-hover:translate-x-1"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </p>
                </a>
                {/* End Card */}

                {/* Card */}
                <a href="#" className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10">
                    <div className="aspect-w-16 aspect-h-10">
                        <img
                            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                            alt="Image Description"
                            className="w-full object-cover rounded-xl"
                        />
                    </div>
                    <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">Unity’s inside sales team drives 80% of its revenue with Preline.</h3>
                    <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                        Learn more
                        <svg className="flex-shrink-0 h-4 w-4 transition ease-in-out group-hover:translate-x-1"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </p>
                </a>
                {/* End Card */}
            </div>
            {/* End Grid */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                    <div className="lg:col-span-7">
                        {/* Grid */}
                        <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                            <div className="col-span-4">
                                <img className="rounded-xl" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80" alt="Image Description" />
                            </div>
                            {/* End Col */}

                            <div className="col-span-3">
                                <img className="rounded-xl" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description" />
                            </div>
                            {/* End Col */}

                            <div className="col-span-5">
                                <img className="rounded-xl" src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description" />
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Grid */}
                    </div>
                    {/* End Col */}

                    <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                        <div className="space-y-6 sm:space-y-8">
                            {/* Title */}
                            <div className="space-y-2 md:space-y-4">
                                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                                    Collaborative tools to design user experience
                                </h2>
                                <p className="text-gray-500 dark:text-neutral-500">
                                    Use our tools to explore your ideas and make your vision come true. Then share your work easily.
                                </p>
                            </div>
                            {/* End Title */}

                            {/* List */}
                            <ul className="space-y-2 sm:space-y-4">
                                <li className="flex space-x-3">
                                    {/* Solid Check */}
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    {/* End Solid Check */}

                                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                        <span className="font-bold">Less routine</span> – more creativity
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    {/* Solid Check */}
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    {/* End Solid Check */}

                                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                        Hundreds of thousands saved
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    {/* Solid Check */}
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    {/* End Solid Check */}

                                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                        Scale budgets <span className="font-bold">efficiently</span>
                                    </span>
                                </li>
                            </ul>
                            {/* End List */}
                        </div>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
        </div>
    );
}

