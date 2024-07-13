import Link from 'next/link'
import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className="bg-slate-50 text-black w-full">
            <div className="max-w-[85rem] mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Brand</h2>
                        <p>Company description or slogan can go here.</p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-700 hover:text-gray-900">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-gray-900">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-gray-900">
                                    Documentation
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-700 hover:text-gray-900">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-gray-900">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-gray-900">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-400 pt-8 flex justify-between">
                    <p className="text-sm text-gray-600">&copy; 2024 Company. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

