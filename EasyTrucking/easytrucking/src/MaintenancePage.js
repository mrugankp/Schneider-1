import React from 'react';
import ReactPlayer from 'react-player';
import './MaintenancePage.css';
import { useNavigate } from 'react-router-dom';

const MaintenancePage = () => {
    const navigate = useNavigate();

    const handleBackToTruckConnect = () => {
        navigate('/truckconnect');
    };
    return (
        <div className='maintenance-page-container'>
            <div className='maintenance-videos-container'><h1><u>Truck Maintenance Videos</u></h1></div>
            <div className='videos-grid-container'>
                <div className='video-description-container'>
                    <p className='description-box'><b>Checking your trucks oil</b></p>
                    <div className='player-container'>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=kpV_-7H9u7c'
                            light={true}
                            playing
                            controls
                            width='100%'
                        />
                    </div>
                </div>
                <div className='video-description-container'>
                    <p className='description-box'><b>Checking your trucks tire pressure and inflating with air</b></p>
                    <div className='player-container'>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=4tlLz_oeEhA'
                            light={true}
                            playing
                            controls
                            width='100%'
                        />
                    </div>
                </div>
                <div className='video-description-container'>
                    <p className='description-box'><b>Fixing stuck or locked brakes on truck & trailers</b></p>
                    <div className='player-container'>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=EbVq7kl5MLQ&list=PLiS2omNSgYh3vjDWPKU3lxBHsZ7XrjnRM&index=8'
                            light={true}
                            playing
                            controls
                            width='100%'
                        />
                    </div>
                </div>
                <div className='video-description-container'>
                    <p className='description-box'><b>Checking your brakes</b></p>
                    <div className='player-container'>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=W4IBImJowTI'
                            light={true}
                            playing
                            controls
                            width='100%'
                        />
                    </div>
                </div>
                <div className='video-description-container'>
                    <p className='description-box'><b>Checking windshield wiper fluid & steering fluid</b></p>
                    <div className='player-container'>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=OeMjL3yQqiQ'
                            light={true}
                            playing
                            controls
                            width='100%'
                        />
                    </div>
                </div>
                <div className='video-description-container'>
                    <p className='description-box'><b>Pre trip inspection checklist</b></p>
                    <div className='player-container'>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=5THT8q21-Rg&list=PLiS2omNSgYh3vjDWPKU3lxBHsZ7XrjnRM&index=6'
                            light={true}
                            playing
                            controls
                            width='100%'
                        />
                    </div>
                </div>
            </div>
            <div>
                <button onClick={handleBackToTruckConnect} class = "total-distance">Go Back to Truck Connect</button>
            </div>
        </div>
    );
};

export default MaintenancePage;
