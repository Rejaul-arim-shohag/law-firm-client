import React from 'react';
import "./PracticeArea.css";
import { FaUsers, FaEdit, FaHireAHelper } from "react-icons/fa";
import { BsBank2, BsGraphUp } from "react-icons/bs";
import { GiDrawbridge } from "react-icons/gi";

const PracticeArea = () => {
    return (
        <div className="py-5 mt-5 mb-5 practice_area-fullSection">
            <div className="container">
                <h2 className="text-center practiceAreaMainHeading">OUR AREAS OF EXPERTISE</h2>
                <h4 className="text-center mt-2 text-secondary">The Learned Counsels | Lawyers & Consultants</h4>
                <div className="practiceAreaP mt-2">
                    <p className="text-center">The Learned Counsels is a vibrant law firm accommodating a number of young and bright lawyers & consultants. We are capable of meeting the demands  of the growing world of divergent legal issues and maintain high professional standards with following areas of expertise.</p>
                </div>
                <div className="expertise_area mt-5">
                    <div className="expertise">
                        <div className="iconAndServiceName">
                            <h4><FaUsers /></h4>
                            <h4>Commercial Law</h4>
                        </div>
                        <p>
                            We advise clients on all aspects of commercial and financial transactions and negotiations including foreign and local investments in Bangladesh; distribution; agency; terms and conditions of business; partnerships; industrial relations; and employment.
                        </p>
                        <div className="practiceArea_button">
                            <button className="btn btn-outline-success">READ MORE</button>
                        </div>
                    </div>
                    <div className="expertise">
                        <div className="iconAndServiceName">
                            <h4><FaEdit /></h4>
                            <h4>Company Law</h4>
                        </div>

                        <p>
                            We provide advice to private and public companies in all phases of business development and continuation, including local and off-shore company incorporations; company secretarial services; preparation of annual company reports; organisational documentation
                        </p>
                        <div className="practiceArea_button">
                            <button className="btn btn-outline-success">READ MORE</button>
                        </div>
                    </div>
                    <div className="expertise">
                        <div className="iconAndServiceName">
                            <h4><GiDrawbridge /></h4>
                            <h4>Banking Law</h4>
                        </div>

                        <p>
                            The Learned Counsels's professional services offered to our clients encompass a broad range of banking-related matters such as security documentation and structuring debt equity arrangements. Feel free to revert us at your convenient.
                        </p>
                        <div className="practiceArea_button">
                            <button className="btn btn-outline-success">READ MORE</button>
                        </div>
                    </div>
                    <div className="expertise">
                        <div className="iconAndServiceName">
                            <h4><BsBank2 /></h4>
                            <h4>Property Law</h4>
                        </div>
                        <p>
                            We provide legal services on acquisition and disposal of premises, secured lending, purchase and sale of investment property, environmental law, landlord and tenant issues (including drafting lease agreements), and services for property managers.
                        </p>
                        <div className="practiceArea_button">
                            <button className="btn btn-outline-success">READ MORE</button>
                        </div>
                    </div>
                    <div className="expertise">
                        <div className="iconAndServiceName">
                            <h4><BsGraphUp /></h4>
                            <h4>Construction Law</h4>
                        </div>
                        <p>
                            We manage construction contract documentation and conduct contract negotiations between architects, contractors, sub-contractors and suppliers. The Chamber represents owners, developers and contractors in all phases.
                        </p>
                        <div className="practiceArea_button">
                            <button className="btn btn-outline-success">READ MORE</button>
                        </div>
                    </div>
                    <div className="expertise">
                        <div className="iconAndServiceName">
                            <h4><FaHireAHelper /></h4>
                            <h4>Investment Services</h4>
                        </div>
                        <p>
                            We act as independent financial advisers and this provides an additional service to clients. We can carry out investment and portfolio planning (including stocks, shares, bonds, gilts, deposit accounts) as well as insurance business (including life insurance, regular savings plans).
                        </p>
                        <div className="practiceArea_button">
                            <button className="btn btn-outline-success">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PracticeArea;