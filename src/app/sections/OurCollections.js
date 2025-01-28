import CollectionCard from "../components/CollectionCard";

export default function OurCollection() {
  return (
    <section className="section-container">
      <h2 className="section-header text-[#AB572D] text-center mb-20">
        Our Collections
      </h2>
      <div className="flex flex-col gap-[30px] lg:gap-[46px]">
        <div className="flex flex-col md:flex-row gap-[30px] lg:gap-[46px]">
          <CollectionCard
            title={"Designer Delights Collection"}
            link={"/"}
            image={"./Images/Collections/designer-delights-collection.jpg"}
            className={""}
          />
          <CollectionCard
            title={"Travel Essentials Collection"}
            link={"/"}
            image={"./Images/Collections/travel-essentials-collection.jpg"}
            className={"grow-[2]"}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-[30px] lg:gap-[46px]">
          <CollectionCard
            title={"Special Occasions Collection"}
            link={"/"}
            image={"./Images/Collections/special-occasions-collection.jpg"}
            className={"grow-[2]"}
          />
          <CollectionCard
            title={"Seasonal Sensations Collection"}
            link={"/"}
            image={"./Images/Collections/seasonal-sensations-collection.jpg"}
            className={"grow-[3]"}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-[30px] lg:gap-[46px]">
          <CollectionCard
            title={"Vintage Treasures Collection"}
            link={"/"}
            image={"./Images/Collections/vintage-treasures-collection.jpg"}
            className={""}
          />
          <CollectionCard
            title={"Limited Edition Treasures"}
            link={"/"}
            image={"./Images/Collections/limited-edition-treasures.jpg"}
            className={"grow-[1]"}
          />
          <CollectionCard
            title={"Modern Classics Treasures"}
            link={"/"}
            image={"./Images/Collections/modern-classics-collection.jpg"}
            className={""}
          />
        </div>
      </div>
    </section>
  );
}
