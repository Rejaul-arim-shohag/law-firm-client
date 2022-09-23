import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from "../components/Footer/Footer"
import ReactHtmlParser from 'react-html-parser';

import { readTermsAndCondition } from '../ApiRequest/APIRequest';
const TermsAndConditionPage = () => {
  const [terms, setTerms] = useState([])


  useEffect(() => {
    window.scrollTo(0, 0)
    readTermsAndCondition()
      .then((result) => {
        setTerms(result?.data)
      })
  }, [])

  return (
    <>
      <NavBar />
      <div className="container py-5 px-1">
        <h1 className="text-center">Terms & Conditions</h1>
        <h6 className="text-center">The statement or a legal document</h6>
        <div className="card">
          <div className="card-body">
            <h6 className=" mt-2 mb-3">TERMS AND CONDITIONS</h6>

            {
              ReactHtmlParser(terms[0]?.content)
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditionPage;