import React from 'react';
import teamMembers from '../teamData';  // Import the team data from a separate file

const AboutUs = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="bg-[#ffe5b4] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
              <img className="mx-auto" src="./images/logo.png" alt="Mind Mender Logo" />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg mb-4">
                Our project addresses mental health issues and the need to be aware of them...
              </p>
              <p className="text-lg">
                It also focuses on building a community where like-minded people can socialize, share their experiences...ybv
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold">Our Team</h3>
            <hr className="my-4" />
          </div>
          <div className="flex flex-wrap">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full md:w-1/4 text-center mb-8">
                <img className="mx-auto rounded-full w-40 h-40 object-cover mb-4" src={member.image} alt={member.name} />
                <h5 className="text-lg font-semibold">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-black flex items-center justify-center">
                    <img className="w-5 h-5 mr-2" src="./images/linkedIn.ico" alt="LinkedIn Icon" />
                    {member.name}
                  </a>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
