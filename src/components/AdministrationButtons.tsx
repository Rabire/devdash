// add shine effect on promotion div

const AdministrationButtons = () => (
  <div className="grid grid-cols-2 grid-rows-2 gap-2.5">
    <button className="btn">Devis</button>
    <button className="btn">Factures</button>
    <button className="btn">Mes clients</button>
    <button className="btn">Opportunités</button>

    <div className="bg-current-theme p-5 col-span-2 border-spacing-2 rounded-lg text-black">
      <h2>Devennez DevBoard+</h2>
      <p>Franchissez le pas de la productivité !</p>
    </div>
  </div>
);

export default AdministrationButtons;
