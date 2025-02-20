import React from 'react';
import Image from 'next/image';
import frame from '@/public/images/home-about.png';
import logo from '@/public/images/Check circle.svg';
import '../home/style/style.css';
interface ClientsDetailsProps {
  sectionImage: string;
  points: string[];
  sectionDescription: string;
}
// function Clients_details() {
const Clients_details: React.FC<ClientsDetailsProps> = ({ sectionImage, points = [], sectionDescription }) => {
  const formattedPoints = typeof points[0] === "string" ? points[0].split(",") : points;

  console.log(formattedPoints); // Debugging: Check the output
  return (
    <>
      {/* <div className="record_clients_image">
        <Image src={sectionImage} alt="Logo" width={940} height={550} />
      </div> */}
      <div className="record_clients_image">
        <Image
          src={sectionImage}
          alt="Logo"
          width={0}  // Dynamically scales
          height={0} // Dynamically scales
          sizes="100vw" // Takes full width of the parent container
          style={{ width: '100%', height: 'auto' }} // Makes it responsive
        />
      </div>

      <div style={{ width: "800px" }}>
        <div className="record_title">Whom we Serve?</div>
        <div className="record_headline">we cater to</div>
        <div className="record_clients_paragraph">
          {sectionDescription}
        </div>
        {/* <div className="record_description">
          <p>
            <span>
              <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
            </span>
            &nbsp;Newcomers – Individuals or groups looking to start their first restaurant, bar, hotel, lounge, or café.
          </p>
          <p>
            <span>
              <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
            </span>
            &nbsp;Existing Businesses – Established businesses seeking to launch new ventures or improve their current operations.
          </p>
          <p>
            <span>
              <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
            </span>
            &nbsp;Hotels – Hotel owners or managers requiring consulting for their food and beverage services.
          </p>
          <p>
            <span>
              <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
            </span>
            &nbsp;Lounges – Businesses planning to open or optimize lounges.
          </p>
          <p>
            <span>
              <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
            </span>
            &nbsp;Food Service Industry – Businesses within the food service industry seeking expert guidance to improve quality and profitability.
          </p>
        </div> */}
        <div className="record_description">
          {formattedPoints.map((point, index) => (
            <p key={index}>
              <span>
                <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
              </span>
              &nbsp;{point.trim()} {/* Trim spaces */}
            </p>
          ))}
        </div>


      </div>
    </>
  );
}

export default Clients_details;
