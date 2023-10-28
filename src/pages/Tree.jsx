import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';

// import Gallery from '../components/Gallery';

import cetinari from '../data/cetinari';
import liscari from '../data/liscari';
import zbunovi from '../data/zbunovi';


import visina from '../treeImg/visina-cet.svg';
import sirina from '../treeImg/sirina-cet.svg';
import rastojanje from '../treeImg/rastojanje-cet.svg';
import sunce from '../treeImg/sunce-cet.svg';
import senka from '../treeImg/senka-cet.svg';


function Tree() {
  const {treeName} = useParams();

  const drvo = cetinari.find( item => item.name === treeName ) || liscari.find( item => item.name === treeName ) || zbunovi.find( item => item.name === treeName);

  if(!drvo){
    return (<h2 className='text-center'>Nema drveta koje tražite!</h2>);
  }


  return (
    <>
      <section className='flower-container tree-container'>
        <div>
          <h1 className='cursive'>{drvo.name && drvo.name}</h1>
          <div className='flower-wrapper tree-wrapper'>
            <div>
              <img src={drvo.img[0]} alt={drvo.name} />
             {/* <Gallery images={drvo.img} width={400} /> */}
            </div>
            <div className='flower-info-container tree-info-container'>
              <h2 className='text-center yellow'>{drvo.name && drvo.name}</h2>
              <p>{drvo.description && drvo.description}</p>
              <ul>
                <li><strong className='yellow'>Životni vek biljke:</strong> {drvo.lifetime && drvo.lifetime}</li>
                <li><strong className='yellow'>Izdržljivost:</strong> {drvo.endurance && drvo.endurance}</li>
                <li><strong className='yellow'>Mesto sadnje:</strong> {drvo.place && drvo.place}</li>
              </ul>
              <div className="d-flex svg-icons yellow">
                {drvo.height && 
                  <div>
                    <img src={visina} alt="visina biljke" />
                    <div>{drvo.height}</div>
                  </div>
                }
                {drvo.width && 
                  <div>
                    <img src={sirina} alt="sirina biljke" />
                    <div>{drvo.width}</div>
                  </div>
                }
                {drvo.distance &&
                  <div>
                    <img src={rastojanje} alt="rastojanje biljke" />
                    <div>{drvo.distance}</div>
                  </div>
                }
                {drvo.sun &&
                  <div>
                    <img src={sunce} alt="sunce" />
                    <div>sunce</div>
                  </div>
                }
                {drvo.shadow &&
                  <div>
                    <img src={senka} alt="senka" />
                    <div>polusenka</div>
                  </div>
                }
              </div>
            </div>
          </div>
          <div className='text-center black-go-back'>
            <Link className="link-btn d-flex" to="/naše-drveće">
              <FaArrowLeft /> <span>Nazad</span> 
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tree;