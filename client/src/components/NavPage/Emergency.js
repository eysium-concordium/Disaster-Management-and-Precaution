import React, { useState } from 'react';
import './Emergency.css';

const Emergency = () => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const data = [
    { heading: 'Andhra Pradesh', content: ['State Help line: 1070', 'District Help line: 1070', 'Toll Free No: 18004250101'] },
    { heading: 'Arunachal Pradesh', content: ['TOLL FREE NO: 1090', 'Helpline No: 09436074396 / 08257891310 / 0360-2231033'] },
    { heading: 'Assam', content: ['State Emergency Operation Centre: 1070, 1079', 'District Emergency Operation Centre: 1077'] },
    { heading: 'Bihar', content: ['Phone No: 0612-2547232', 'Email: info@bsdma.org'] },
    { heading: 'Chhattisgarh', content: ['Helpline No: 0771-2223471'] },
    { heading: 'Goa', content: ['Phone Numbers: 0832-2419550 / 2419446', 'Fax: 0832-2419767 / 2419670'] },
    { heading: 'Gujarat', content: ['Phone No: +91-79-23259283', 'Landline No: 079-23259275 / 079-23259302', 'Email: smgr5-gsdma@gujarat.gov.in'] },
    { heading: 'Haryana', content: ['Haryana State Government Helpline Number: 8558893911'] },
    { heading: 'Himachal Pradesh', content: ['Helpline No: 104 (Toll free)', 'State Control Room: 1070', 'District Control Room: 1077', 'For Essential Service: 1967 (Toll Free)'] },
    { heading: 'Jharkhand', content: ['Phone/Fax: +91 651-2400218 / 31', 'Email: dmjharkhand@gmail.com', 'Toll Free No: 18000000000'] },
    // Add more states as needed
  ];

  const handleRowClick = (index) => {
    setSelectedRowIndex(index === selectedRowIndex ? null : index); // Toggle selection
  };

  const renderContent = () => {
    if (selectedRowIndex !== null) {
      const rowData = data[selectedRowIndex];
      return (
        <div className="selected-content p-3">
          {rowData.content.map((line, i) => (
            <div key={i} className="mb-2">{line}</div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="emergency-container container-fluid">
      <div className="text-center my-4">
        <h1 className="display-4">Emergency Contacts</h1>
      </div>

      <div className="marquee-container bg-light py-2">
        <marquee className="marquee" scrollamount="10">
          "आपदा सेवा सदैव सर्वत्र" &nbsp;&nbsp;&nbsp; NDRF Helpline Number: +91-9711077372 &nbsp;&nbsp;&nbsp; Saving Lives & Beyond
        </marquee>
      </div>

      <div className="contact-details text-center my-4">
        <h3>NDRF HQ Contact Details</h3>
        <p>Directorate General, National Disaster Response Force</p>
        <p>6th Floor, NDCC-II Building, Jai Singh Road, New Delhi-110001</p>
        <p>Control Room Details: TELE/FAX NO. - 011-23438091, 011-23438136</p>
        <p>Email: hq.ndrf@nic.in</p>
        <p>Reception/Exchange Details: 011-23438017, 011-23438019</p>
      </div>

      <div className="states-section">
        <h2 className="text-center mb-4">States</h2>
        <div className="table-responsive">
          <table className="table table-hover">
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(index)}
                  className={`state-row ${selectedRowIndex === index ? 'active' : ''}`}
                >
                  <td className="state-name">{row.heading}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Emergency;