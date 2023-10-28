import React from 'react';
import Map from './Map';

const date = new Date();
const workingHours = (date.getHours() > 6 && date.getHours() < 18);

function FindUs() {
  return (
    <section className="map">
        <div className="wrapper">
          <h2 className="title cursive transformed-up">
            <span className="yellow">Gde Nas</span> <br />
            <span className="cursive">Možete Naći</span>
          </h2>
          <div>
              <h3 className='text-center'>
                Pronađite naš rasadnik u <span className="yellow">Turekovcu</span>
              </h3>
              <p>
                Posetite nas. Ljubazno i stručno osoblje Vas čeka, da zajedno
                pronađemo rešenje za vaš vrt, uređenje dvorišta, projektovanje
                dvorišta, uređenje radnog prostora.
              </p>
          </div>
          <div className="location">
            <div>
              <div className="text-center">
                <p>
                  <span className="yellow">PR ROYAL GARDEN MILENKOVIĆ</span> <br />
                  Turekovac bb <br /> 16231 Turekovac, Leskovac
                </p>
              </div>
              <h4>
                Radno vreme: <span className="yellow">07 - 18h</span> svakog
                radnog dana i subotom
              </h4>
              { workingHours ? <p><span className="green">Otvoreno!</span> Dobro došli, čekamo Vas!</p> : <p><span className="red">Zatvoreno.</span> Vidimo se sledećeg radnog
                dana u 07h.</p>}
            </div>
            <Map />
          </div>
        </div>
      </section>
  )
}

export default FindUs;