import React from "react";
import { Link } from "react-router-dom";

const HealthProblems = () => {
  return (
    <div className="bg-[#ffe5b4] font-quicksand">
      
  
      <div className="p-8">
       
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-4">
          <h3 className="text-teal-600 text-2xl font-semibold mb-2">
            Anxiety disorders
          </h3>
          <p className="text-lg mb-4">
            Anxiety disorders is a group of mental health disorders that
            includes generalised anxiety disorders, social phobias, specific
            phobias...
          </p>
          <a
            href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/anxiety-disorders"
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkgreen font-bold hover:underline"
          >
            Visit for More information
          </a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-4">
          <h3 className="text-teal-600 text-2xl font-semibold mb-2">
            Behavioural and emotional disorders in children
          </h3>
          <p className="text-lg mb-4">
            Bipolar affective disorder is a type of mood disorder, previously
            referred to as ‘manic depression’. A person with bipolar disorder
            experiences episodes of mania (elation) and depression. The person
            may or may not experience psychotic symptoms. The exact cause is
            unknown, but a genetic predisposition has been clearly established.
            Environmental stressors can also trigger episodes of this mental
            illness.
          </p>
          <a
            href="https://www.betterhealth.vic.gov.au/health/healthyliving/behavioural-disorders-in-children"
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkgreen font-bold hover:underline"
          >
            Visit for More information
          </a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-4">
          <h3 className="text-teal-600 text-2xl font-semibold mb-2">
            {" "}
            Depression
          </h3>
          <p className="text-lg mb-4">
            Depression is a mood disorder characterised by lowering of mood,
            loss of interest and enjoyment, and reduced energy. It is not just
            feeling sad. There are different types and symptoms of depression.
            There are varying levels of severity and symptoms related to
            depression. Symptoms of depression can lead to increased risk of
            suicidal thoughts or behaviours
          </p>
          <a
            href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/depression"
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkgreen font-bold hover:underline"
          >
            Visit for More information
          </a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-4">
          <h3 className="text-teal-600 text-2xl font-semibold mb-2">
            Psychosis
          </h3>
          <p className="text-lg mb-4">
            Obsessive compulsive disorder (OCD) is an anxiety disorder.
            Obsessions are recurrent thoughts, images or impulses that are
            intrusive and unwanted. Compulsions are time-consuming and
            distressing repetitive rituals. Treatments include cognitive
            behaviour therapy (CBT), and medications.
          </p>
          <a
            href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/psychosis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkgreen font-bold hover:underline"
          >
            Visit for More information
          </a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-teal-600 text-2xl font-semibold mb-2">
            Obsessive compulsive disorder
          </h3>
          <p className="text-lg mb-4">
            Obsessive compulsive disorder (OCD) is an anxiety disorder.
            Obsessions are recurrent thoughts, images or impulses that are
            intrusive and unwanted. Compulsions are time-consuming and
            distressing repetitive rituals. Treatments include cognitive
            behaviour therapy (CBT), and medications.
          </p>
          <a
            href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/obsessive-compulsive-disorder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkgreen font-bold hover:underline"
          >
            Visit for More information
          </a>
        </div>
      </div>
    </div>
  );
};

export default HealthProblems;
