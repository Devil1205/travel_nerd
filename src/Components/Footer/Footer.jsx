import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './Footer.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
    return (
        <footer className='Fbg1'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-11 col-md-5 col-lg-3 mx-4 my-3">
                        <div className='fHead'>Contact Us</div>
                        <div className='fColumn'>
                            <div className='my-2'>
                                Address: New Delhi, Delhi
                            </div>
                            <div className='my-2'>
                                Email: sachdeva.pulkit2599@gmail.com
                            </div>
                            <div className='my-2'>
                                Phone: +91 8470950994
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-5 col-lg-3 mx-4 my-3">
                        <div className='fHead'>Travel NeRd</div>
                        <div className="fColumn">
                            <div>Travel NeRd offers a wide range of travel blogs to keep you updated about the latest trends in that field.</div>
                        </div>
                    </div>
                    <div className="col-11 col-md-11 col-lg-3 mx-4 my-3">
                        <div className='fHead'>Stay Updated
                        </div>
                        <div className="fColumn">
                            <div>
                                <Link to='/' className='me-4 text-reset'>
                                    <MDBIcon className='facebook' size='2x' fab icon="facebook-f" />
                                </Link>
                                <Link to='/' className='me-4 text-reset'>
                                    <MDBIcon className='twitter' size='2x' fab icon="twitter" />
                                </Link>
                                <Link to='/' className='me-4 text-reset'>
                                    <MDBIcon className='insta' size='2x' fab icon="instagram" />
                                </Link>
                                <Link to='/' className='text-reset'>
                                    <MDBIcon className='linkedin' size='2x' fab icon="linkedin-in" />
                                </Link>
                            </div>
                        </div>
                    </div>
                <div className='text-center my-2'>Copyright © 2023 Travel NeRd Co. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer