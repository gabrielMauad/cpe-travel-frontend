import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BoxImages from '../../components/BoxImages';
import BoxText from '../../components/BoxText';
import BoxInfo from '../../components/BoxInfo';
import BoxPrice from '../../components/BoxPrice/BoxPrice';
import BoxItinerario from '../../components/BoxItinerario';

function Local({ local, images }) {
  let lugar = 0;
  for (let i = 0; i < images.length; i += 1) {
    if (local === images[i].key) {
      lugar = images[i];
    }
  }
  return (
    <>
      <Header />
      <BoxImages foto={lugar} />
      <BoxText texto={lugar} />
      <BoxItinerario itinerario={lugar} />
      <BoxPrice />
      <BoxInfo inf={lugar} />
      <Footer />

    </>
  );
}
export default Local;
