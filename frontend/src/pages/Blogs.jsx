import React from 'react';


const Blogs = () => {
  return (
    <div className="bg-[#ffe5b4]">
      <main className="p-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl border-b-4 border-orange-500 pb-2 inline">Blogs</h2>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-white shadow-lg transition-transform duration-500 hover:scale-105">
              <img src="images/children.jpg" alt="Children" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-bold">How to help the Children: Covid-19 and Health Anxiety</h5>
                <p className="text-lg mt-2">The Covid-19 pandemic has changed the life of children in profound ways. The safety measures like: Isolation,...</p>
                <a href="https://mpowerminds.com/blog/How-to-help-the-children-COVID-19-and-health-anxiety-Need-for-child-counselling-in-Kolkata" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
              </div>
            </div>
            <div className="card bg-white shadow-lg transition-transform duration-500 hover:scale-105">
              <img src="images/questions.jpg" alt="Questions" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-bold">Common questions people ask about depression and mental health disorders</h5>
                <p className="text-lg mt-2">Seeking help for your mental health as early as possible can make a big...</p>
                <a href="https://mpowerminds.com/blog/Common-questions-people-ask-about-depression-and-mental-health-disorders-and-Finding-a-good-psychiatrist-in-Mumbai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
              </div>
            </div>
            <div className="card bg-white shadow-lg transition-transform duration-500 hover:scale-105">
              <img src="images/beKind.jpg" alt="Be Kind" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-bold">Be kind to others as not every struggle is visible</h5>
                <p className="text-lg mt-2">My first experience of anxiety wasn’t until I started my second year at sixth form and wow did it hit me hard!...</p>
                <a href="https://www.rethink.org/news-and-stories/blogs/2021/09/be-kind-to-others-as-not-every-struggle-is-visible-harriets-story/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blogs;
