import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Error404: React.FC<Props> = () => {
	return (
		<div className='bg-white w-screen h-screen flex flex-row items-center justify-center'>
			<main className='sm:flex'>
				<p className='text-4xl font-extrabold text-indigo-600 sm:text-5xl'>404</p>
				<div className='sm:ml-6'>
					<div className='sm:border-l sm:border-gray-200 sm:pl-6'>
						<h1 className='text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
							Page not found
						</h1>
						<p className='mt-1 text-base text-gray-500'>
							Please check the URL in the address bar and try again.
						</p>
					</div>
					<div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
						<Link
							to='/'
							className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
							Go to Dashboard
						</Link>
						<Link
							to='//'
							className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
							Contact support
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Error404;
