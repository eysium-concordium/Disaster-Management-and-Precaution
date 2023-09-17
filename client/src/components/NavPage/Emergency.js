import React, { useState } from 'react';
import "./Emergency.css";

const App = () => {
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);

  const data = [
    { heading: 'Andhra Pradesh', content: [' State Help line 1070','District Help line 1070',' Toll Free No: 18004250101'] },
    { heading: 'Arunachal Pradesh', content: [' TOLL FREE NO. 1090 ', 'Helpline No: 09436074396/    08257891310/0360-2231033'] },
    { heading: 'Assam', content: ['State Emergency Operation Centre:1070, 1079','District Emergency Operation Centre:1077'
    ] },
    { heading: 'Bihar', content: ['Phone No: 0612-2547232',

    'Email id-info@bsdma.org'] },
    { heading: 'Chhattisgarh', content: ['Helpline No:0771-2223471'] },
    { heading: 'Goa', content: ['Phone Numbers 0832-2419550/2419446',
    'Fax 0832-2419767/2419670'] },
    { heading: 'Gujarat', content: ['Phone No:+91-79-23259283','Landline No:079-23259275 / 079-23259302'
    ,'Email id:smgr5-gsdma@gujarat.gov.in'] },
    { heading: 'Haryana', content: ['Haryana State Government Helpline Number : 8558893911'] },
    { heading: 'Himachal Pradesh', content: ['Helpline No. 104 (Toll free)','State Control Room – 1070','District Control Room -1077','For Essential Service - 1967 (Toll Free)'] },
    { heading: 'Jharkhand', content: ['Phone/Fax : +91 651-2400218/31','Email : dmjharkhand@gmail.com','Toll Free No : 18000000000'] },
    { heading: 'Karnataka', content: ['Ph : 080-22253707 - Toll Free : 1070','Fax: 22340676','E-Mail : secy.dm@gmail.com'] },
    { heading: 'Kerala', content: ['Observatory Hills, Vikas Bhavan P.O',

    'Thiruvananthapuram, Kerala – 695033','Phone:+91-471-2778855','Website: www.sdma.kerala.gov.in','Email:keralasdma@gmail.com'] },
    { heading: 'Madhya Pradesh', content: ['AddressMadhya Pradesh State Disaster Management Authority Paryavaran Parisar E-5, Arera Colony, Bhopal 462016 Phone+(91) 0755-2446136/ 137/ 138'
      ,'Emailmpstatecoord.sdma@mp.gov.in'] },
    { heading: 'Maharashtra', content: ['Kamgar Bhawan, 5th Floor, C-20, E-Block, Opp R.B.I., Bandra-Kurla Complex, Bandra (E), Mumbai-400 051.','+91 22 26572504/ 09 / 22 / 58','dirdish.mum-mh@gov.in'] },
    { heading: 'Manipur', content: ['Imphal East District, Porompat- 7950005','Contact No : 0385-2458385'] },
    { heading: 'Meghalaya', content: ['Office Contact 0364-2226579, 0364-2502188, 0364-2503022','Fax 0364-2226571',' Mobile 9862088834'] },
    { heading: 'Mizoram', content: ['P.O Vaivakawn, Chawnpui','Aizawl - 796009','Phone - 0389 2342520','Fax - 0389 2345943'] },
    { heading: 'Nagaland', content: ['Civil Secretariat Kohima-797001 Nagaland, India'
    ,'NSDMA Office: 0370-2270050','Email: nsdma.nagaland@gmail.com'] },
    { heading: 'Odisha', content: ['Rajiv bhawan, Unit 5, Bhubaneswar ,Odisha, India, Pin code- 751001','Landline No: 0674-2395398, 2395531','Phone No : 0674-2391871','Email : osdma@osdma.org'] },
    { heading: 'Punjab', content: ['Name : Sh. Baljit Singh Kang, Deputy Secretary Revenue'
    ,'Phone: +91-172-2749056   - (4338 )','    Address : 3rd Floor,  Punjab Civil Secretariat-1, Sector 1, Chandigarh'] },
    { heading: 'Rajasthan', content: ['Ph: 0141-2227084 Fax: 0141-2227230',' Email: relief-rj@nic.in'] },
    { heading: 'Sikkim', content: ['Help Line no :03595-250633'] },
    { heading: 'Tamil Nadu', content: ['Phone : 044 - 2841 5550/044 - 2841/5551 044 - 2841 0544'] },
    { heading: 'Telangana', content: ['2nd floor, Police Head Quarters Building, (CID Building), Lakdi-ka-pul, Hyderabad-500004 Contact No. (040) 23442944,23442955,'] },
    { heading: 'Tripura', content: ['  First Floor, New Capital Complex, Secretariat, Agartala-799001 Phone-0381-2415385/241-8053/241-6045'] },
    { heading: 'Uttar Pradesh', content: [' Emergency  Phone  Numbers  0522-6451993, 4078533, 2720285 , Emergency Operation Centre Other District (EOC) - 1077, Control Room -2236305, 2238084 (fax), 2214819, 2238200 '] },
    { heading: 'Uttarakhand', content: ['USDMA, Secretariat Campus, 4-B, Subash Road, Dehradun Uttarakhand Secretariat.',
    'Phone No:0135-2710233','usdmauttarakhand@gmail.com'] },
    { heading: 'West Bengal', content: ['District level Helpline No: 1077 ','State Level Helpline No:1070'] },
    // Add similar data for the other rows (up to Row 29)
  ];

  const handleRowHover = (index) => {
    setHoveredRowIndex(index);
  };

  const renderContent = () => {
    if (hoveredRowIndex !== null) {
      const rowData = data[hoveredRowIndex];
      return (
        <div className="hovered-content" style={{padding:'300px'}}>
          {rowData.content.map((line, i) => (
            <div key={i} style={{ 
              // margin:'0px 0px 0px 0px',padding:'0px 0px 10px 300px',
               fontSize: '30px',marginBottom: '20px'}}>{line}</div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (<>
<div style={{fontSize:'40px',textAlign:'center'}}><strong>
EMERGENCY
</strong>
  
</div>
     {/* <h1 ><center>Contacts</center></h1>  */}
    <div className="main" >
	  <marquee class="marq"Scrollamount='10'	bgcolor="#F9DEC9"
				direction="left"
				loop="">
			 <p>"आपदा सेवा सदैव सर्वत्र" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NDRF Helpline Number : +91-9711077372 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Saving Lives &amp; Beyond "आपदा सेवा सदैव सर्वत्र" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NDRF Helpline Number : +91-9711077372 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Saving Lives &amp; Beyond </p>
		  </marquee>
	  </div>
  
  <div>
     <br />
  </div>
    <div>
      <center>
      NDRF HQ CONTACT DETAILS
       DIRECTORATE GENERAL, NATIONAL DISASTER RESPONSE FORCE<br></br>
       < br></br>
       6th FLOOR, NDCC-II BUILDING, JAI SINGH ROAD, NEW DELHI-110001<br></br>
       <br></br>
       CONTROL ROOM DETAILS <br />
       <br></br>
       TELE/FAX NO. - 011-23438091, 011-23438136<br></br>
       <br></br>
        EMAIL ID - hq.ndrf@nic.in<br></br>
        <br></br>
        RECEPTION / EXCHANGE DETAILS<br></br>
        <br></br>
         NO. - 011-23438017,  011-23438019,<br></br>
      </center>
    </div>
    <div>
      <h1>STATES</h1>
      <div className="table-container">
        <table style={{ borderCollapse: 'collapse' }}>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                onMouseEnter={() => handleRowHover(index)}
                onMouseLeave={() => handleRowHover(null)}
                style={{ cursor: 'pointer' }}
              >
                <td style={{ fontSize:'25px'}}>{row.heading}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {renderContent()}
      </div>
    </div>

  </>
    );
};

export default App;