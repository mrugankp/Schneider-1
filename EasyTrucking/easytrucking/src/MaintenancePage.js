import React from 'react';
import ReactPlayer from 'react-player';
import './MaintenancePage.css';

const MaintenancePage = () => {
    return (
        <div>
            <div className='maintenance-videos-container'><h1><u>Truck Maintenance Videos</u></h1></div>
            <div>
                <div className='video-description-left-container'>
                    <div className='player-container'>
                        <p className='description-container'><b>Checking your trucks oil</b></p>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=kpV_-7H9u7c'
                            light={true}
                            playing
                            controls
                        />
                    </div>
                </div>

                <div className='video-description-left-container'>
                    <div className='player-container'>
                        <p className='description-container'><b>Checking your trucks tire pressure and inflating with air</b></p>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=4tlLz_oeEhA'
                            light={true}
                            playing
                            controls
                        />
                    </div>
                </div>

                <div className='video-description-left-container'>
                    <div className='player-container'>
                        <p className='description-container'><b>Fixing stuck or locked brakes on truck & trailers</b></p>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=EbVq7kl5MLQ&list=PLiS2omNSgYh3vjDWPKU3lxBHsZ7XrjnRM&index=8'
                            light={true}
                            playing
                            controls
                        />
                    </div>
                </div>
            </div>

            <div>
                <div className='video-description-right-container'>
                    <div className='player-container'>
                        <p className='description-container'><b>Checking your brakes</b></p>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=W4IBImJowTI'
                            light={true}
                            playing
                            controls
                        />
                    </div>
                </div>

                <div className='video-description-right-container'>
                    <div className='player-container'>
                        <p className='description-container'><b>Checking windshield wiper fluid & steering fluid</b></p>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=OeMjL3yQqiQ'
                            light={true}
                            playing
                            controls
                        />
                    </div>
                </div>

                <div className='video-description-right-container'>
                    <div className='player-container'>
                        <p className='description-container'><b>Pre trip inspection checklist</b></p>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=5THT8q21-Rg&list=PLiS2omNSgYh3vjDWPKU3lxBHsZ7XrjnRM&index=6'
                            light={true}
                            playing
                            controls
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaintenancePage;