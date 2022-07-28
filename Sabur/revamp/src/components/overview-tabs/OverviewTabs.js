import React, {useState, Fragment} from "react";

// Include Style
import './overview-tabs.css';
import {AiFillLock} from "@react-icons/all-files/ai/AiFillLock";
import * as PropTypes from "prop-types";
import {AiFillUnlock} from "@react-icons/all-files/ai/AiFillUnlock";
import {FaLock} from "@react-icons/all-files/fa/FaLock";

function AiFillUnLock(props) {
    return null;
}

AiFillUnLock.propTypes = {className: PropTypes.string};

function OverviewTabs() {

    // Tabs Button
    const [overviewState, setOverviewState] = useState(1);
    const overviewTab = (index) => {
        setOverviewState(index);
    };

    return (
        <Fragment>
            {/* OVerview Seciton */}
            <div className="lightDeepBG-2 pt-5">
                <div className="container">
                    <div className="pt-0 pt-md-5">
                        <div className="col-12 col-md-8 mx-auto">
                            <div className="d-flex">
                                <button className={overviewState === 1 ? "active-tabs border-0 w-100 bodySmall text-white bg-success p-1 p-md-2 p-lg-3 rounded-0 mb-3 text-center" : "border w-100 bodySmall themeDarkColor p-1 p-md-2 p-lg-3 rounded-0 mb-3 text-center themeWhiteBG"}
                                        onClick={() => overviewTab(1)}> Overview </button>
                                <button className={overviewState === 2 ? "active-tabs border-0 w-100 bodySmall text-white bg-success p-1 p-md-2 p-lg-3 rounded-0 mb-3 text-center" : "border w-100 bodySmall themeDarkColor p-1 p-md-2 p-lg-3 rounded-0 mb-3 text-center themeWhiteBG"}
                                        onClick={() => overviewTab(2)}> Curriculum </button>
                                <button className={overviewState === 3 ? "active-tabs border-0 w-100 bodySmall text-white bg-success p-1 p-md-2 p-lg-3 rounded-0 mb-3 text-center" : "border w-100 bodySmall themeDarkColor p-1 p-md-2 p-lg-3 rounded-0 mb-3 text-center themeWhiteBG"}
                                        onClick={() => overviewTab(3)}> Instructor </button>
                                <button className={overviewState === 4 ? "active-tabs border-0 w-100 bodySmall text-white bg-success p-1 p-md-2 p-lg-3 rounded-0 mb-3 text-center" : "border w-100 bodySmall themeDarkColor p-1 p-md-2 p-lg-3 rounded-0 mb-3 text-center themeWhiteBG"}
                                        onClick={() => overviewTab(4)}> Reviews </button>
                            </div>
                        </div>

                        <div className="overview-tab">
                            <div className={overviewState === 1 ? "overview-content active-overview-content" : "overview-content"}>
                                <h2 className="headline-3 themeDarkColor mb-4"> Overview </h2>
                                <p> Aenean bibendum lorem purus, ut malesuada purus dignissim in. Etiam ornare suscipit ipsum vel auctor. Proin malesuada risus sem. Aliquam erat volutpat. Duis rhoncus tincidunt ullamcorper. Aliquam sodales elit nec eros iaculis, et facilisis augue sagittis. Nam nec porta turpis, ac aliquet sem. Pellentesque porttitor enim finibus magna rhoncus, sed hendrerit ante suscipit. In tempor eu urna in posuere. Etiam vel lectus elit </p>
                                <p> Aenean bibendum lorem purus, ut malesuada purus dignissim in. Etiam ornare suscipit ipsum vel auctor. Proin malesuada risus sem. Aliquam erat volutpat. Duis rhoncus tincidunt ullamcorper. Aliquam sodales elit nec eros iaculis, et facilisis augue sagittis. Nam nec porta turpis, ac aliquet sem. Pellentesque porttitor enim finibus magna rhoncus, sed hendrerit ante suscipit. In tempor eu urna in posuere. Etiam vel lectus elit </p>

                                <div className="col-12 col-md-10 mx-auto mt-4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="bg-white shadow-sm p-4 rounded mb-4 d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="secondaryBG themeColor rounded-circle h-40 w-40 fw-bold bodyMedium d-inline-block text-center pt-2">01</div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3 d-inline-block"> Class introduction </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="fw-light bodyXSmall d-inline-block pt-2 lightColor"> 04:30 </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3 fw-bold d-inline-block">
                                                        {/* Hidden Icon Use "d-none" class || Otherwise Show Icon */}
                                                        <FaLock className="lightColor bodyXLarge d-none" />
                                                        <AiFillUnlock className="lightColor bodyXLarge" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="bg-white shadow-sm p-4 rounded mb-4 d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="secondaryBG themeColor rounded-circle h-40 w-40 fw-bold bodyMedium d-inline-block text-center pt-2">02</div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3 d-inline-block"> Instructor introduction </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="fw-light bodyXSmall d-inline-block pt-2 lightColor"> 04:30 </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3 fw-bold d-inline-block">
                                                        {/* Hidden Icon Use "d-none" class || Otherwise Show Icon */}
                                                        <AiFillLock className="lightColor bodyXLarge d-none" />
                                                        <AiFillUnlock className="lightColor bodyXLarge" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="bg-white shadow-sm p-4 rounded mb-4 d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="secondaryBG themeColor rounded-circle h-40 w-40 fw-bold bodyMedium d-inline-block text-center pt-2">03</div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3 d-inline-block"> What is MERN </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="fw-light bodyXSmall d-inline-block pt-2 lightColor"> 08:45 </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3 fw-bold d-inline-block">
                                                        {/* Hidden Icon Use "d-none" class || Otherwise Show Icon */}
                                                        <AiFillLock className="lightColor bodyXLarge" />
                                                        <AiFillUnlock className="lightColor bodyXLarge d-none" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="bg-white shadow-sm p-4 rounded mb-4 d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="secondaryBG themeColor rounded-circle h-40 w-40 fw-bold bodyMedium d-inline-block text-center pt-2">04</div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3 d-inline-block"> Softwares </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="fw-light bodyXSmall d-inline-block pt-2 lightColor"> 04:30 </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3 fw-bold d-inline-block">
                                                        {/* Hidden Icon Use "d-none" class || Otherwise Show Icon */}
                                                        <AiFillLock className="lightColor bodyXLarge" />
                                                        <AiFillUnlock className="lightColor bodyXLarge d-none" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="bg-white shadow-sm p-4 rounded mb-4 d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="secondaryBG themeColor rounded-circle h-40 w-40 fw-bold bodyMedium d-inline-block text-center pt-2">05</div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3 d-inline-block"> Get Started </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="fw-light bodyXSmall d-inline-block pt-2 lightColor"> 04:30 </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3 fw-bold d-inline-block">
                                                        {/* Hidden Icon Use "d-none" class || Otherwise Show Icon */}
                                                        <AiFillLock className="lightColor bodyXLarge" />
                                                        <AiFillUnlock className="lightColor bodyXLarge d-none" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="bg-white shadow-sm p-4 rounded mb-4 d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="secondaryBG themeColor rounded-circle h-40 w-40 fw-bold bodyMedium d-inline-block text-center pt-2">06</div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3 d-inline-block"> Class introduction </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="fw-light bodyXSmall d-inline-block pt-2 lightColor"> 04:30 </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3 fw-bold d-inline-block">
                                                        {/* Hidden Icon Use "d-none" class || Otherwise Show Icon */}
                                                        <AiFillLock className="lightColor bodyXLarge" />
                                                        <AiFillUnlock className="lightColor bodyXLarge d-none" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={overviewState === 2 ? "overview-content active-overview-content" : "overview-content"}>
                                <h2 className="headline-3 themeDarkColor mb-4"> Curriculum </h2>
                                <p> Aenean bibendum lorem purus, ut malesuada purus dignissim in. Etiam ornare suscipit ipsum vel auctor. Proin malesuada risus sem. Aliquam erat volutpat. Duis rhoncus tincidunt ullamcorper. Aliquam sodales elit nec eros iaculis, et facilisis augue sagittis. Nam nec porta turpis, ac aliquet sem. Pellentesque porttitor enim finibus magna rhoncus, sed hendrerit ante suscipit. In tempor eu urna in posuere. Etiam vel lectus elit </p>
                                <p className="mb-0"> Aenean bibendum lorem purus, ut malesuada purus dignissim in. Etiam ornare suscipit ipsum vel auctor. Proin malesuada risus sem. Aliquam erat volutpat. Duis rhoncus tincidunt ullamcorper. Aliquam sodales elit nec eros iaculis, et facilisis augue sagittis. Nam nec porta turpis, ac aliquet sem. Pellentesque porttitor enim finibus magna rhoncus, sed hendrerit ante suscipit. In tempor eu urna in posuere. Etiam vel lectus elit </p>
                            </div>
                            <div className={overviewState === 3 ? "overview-content active-overview-content" : "overview-content"}>
                                <h2 className="headline-3 themeDarkColor mb-4"> Instructor </h2>
                                <p> Aenean bibendum lorem purus, ut malesuada purus dignissim in. Etiam ornare suscipit ipsum vel auctor. Proin malesuada risus sem. Aliquam erat volutpat. Duis rhoncus tincidunt ullamcorper. Aliquam sodales elit nec eros iaculis, et facilisis augue sagittis. Nam nec porta turpis, ac aliquet sem. Pellentesque porttitor enim finibus magna rhoncus, sed hendrerit ante suscipit. In tempor eu urna in posuere. Etiam vel lectus elit </p>
                                <p className="mb-0"> Aenean bibendum lorem purus, ut malesuada purus dignissim in. Etiam ornare suscipit ipsum vel auctor. Proin malesuada risus sem. Aliquam erat volutpat. Duis rhoncus tincidunt ullamcorper. Aliquam sodales elit nec eros iaculis, et facilisis augue sagittis. Nam nec porta turpis, ac aliquet sem. Pellentesque porttitor enim finibus magna rhoncus, sed hendrerit ante suscipit. In tempor eu urna in posuere. Etiam vel lectus elit </p>
                            </div>
                            <div className={overviewState === 4 ? "overview-content active-overview-content" : "overview-content"}>
                                <h2 className="headline-3 themeDarkColor mb-4"> Reviews </h2>
                                <p> Aenean bibendum lorem purus, ut malesuada purus dignissim in. Etiam ornare suscipit ipsum vel auctor. Proin malesuada risus sem. Aliquam erat volutpat. Duis rhoncus tincidunt ullamcorper. Aliquam sodales elit nec eros iaculis, et facilisis augue sagittis. Nam nec porta turpis, ac aliquet sem. Pellentesque porttitor enim finibus magna rhoncus, sed hendrerit ante suscipit. In tempor eu urna in posuere. Etiam vel lectus elit </p>
                                <p className="mb-0"> Aenean bibendum lorem purus, ut malesuada purus dignissim in. Etiam ornare suscipit ipsum vel auctor. Proin malesuada risus sem. Aliquam erat volutpat. Duis rhoncus tincidunt ullamcorper. Aliquam sodales elit nec eros iaculis, et facilisis augue sagittis. Nam nec porta turpis, ac aliquet sem. Pellentesque porttitor enim finibus magna rhoncus, sed hendrerit ante suscipit. In tempor eu urna in posuere. Etiam vel lectus elit </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default OverviewTabs;