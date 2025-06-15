import React from 'react';
import './Certifications.css';

// Import certification images
import mcaLogo from '../assets/ministryofcorporetion.webp';
import commerceLogo from '../assets/depertmentofcommerce.webp';
import taxLogo from '../assets/incometexdepartment.webp';
import dgftLogo from '../assets/Directorgeneraforeation.webp';
import icegateLogo from '../assets/icegate.webp';
import spiceboardLogo from '../assets/spiceboard.webp';
import fssaiLogo from '../assets/fssai.webp';

const Certifications = () => {
  const certificates = [
    {
      id: 1,
      name: 'Ministry of Corporate Affairs',
      image: mcaLogo
    },
    {
      id: 2,
      name: 'Department of Commerce',
      image: commerceLogo
    },
    {
      id: 3,
      name: 'Income Tax Department',
      image: taxLogo
    },
    {
      id: 4,
      name: 'DGFT Registration',
      image: dgftLogo
    },
    {
      id: 5,
      name: 'ICEGATE',
      image: icegateLogo
    },
    {
      id: 6,
      name: 'Spices Board India',
      image: spiceboardLogo
    },
    {
      id: 7,
      name: 'FSSAI',
      image: fssaiLogo
    }
  ];

  return (
    <div className="certifications-page">
      <div className="certifications-hero">
        <h1>Our Certifications</h1>
      </div>

      <div className="certifications-grid">
        {certificates.map(cert => (
          <div key={cert.id} className="certification-card">
            <div className="certification-image">
              <img src={cert.image} alt={cert.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications; 