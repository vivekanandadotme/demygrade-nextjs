
import CategoryFour from "./CategoryFour";
const Categories = () => {
  return (
    <>
      <div className="rbt-categories-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h5 className="title">Style Four</h5>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            <CategoryFour />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
