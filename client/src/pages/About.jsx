export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Today's News
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to <span className="text-red-500">Today's News! </span> This blog was created by <span className="text-red-500">Rahul </span> 
              as a personal project to share the news and articles in the world. 
            </p>

            <p>
              On this blog, you'll find daily articles and news on topics
              such as international news, business, economics and sports etc...  so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on the posts and engage with other readers. You can like other people's comment and reply to them as well. We believe that a community of information sharing can help each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}