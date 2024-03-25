import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to buy books?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these books with Books Wagon
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.bookswagon.com/" target='_blank' rel='noopener noreferrer'>
                    Books Wagon
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://assets.vogue.com/photos/65a1882baefbe30bf9e44fe8/master/pass/00-story.jpg" />
        </div>
    </div>
  )
}